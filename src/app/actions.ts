"use server";
import { Stream } from "stream";
import bucket from "./lib/storage";
import { getServerSession } from "next-auth/next";
import authOptions from "./lib/auth";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();
function _arrayBufferToBase64(buffer: ArrayBuffer) {
  var binary = "";
  var bytes = new Uint8Array(buffer);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

async function upload(file: File, name: string, contentType: string) {
  const arrayBuffer = await file.arrayBuffer();

  let base64 = _arrayBufferToBase64(arrayBuffer);
  var bufferStream = new Stream.PassThrough();
  bufferStream.end(Buffer.from(base64, "base64"));

  var uFile = bucket.file(name);
  bufferStream
    .pipe(
      uFile.createWriteStream({
        metadata: {
          contentType: contentType,
        },
      }),
    )
    .on("error", function (err) {
      console.log(err);
    })
    .on("finish", function () {
      console.log("upload done");
      return "sampleurl";
    });
}

export async function createContest(formData: FormData) {
  prisma.$connect();
  const session = await getServerSession(authOptions);
  if (!session) {
    throw Error("user must be authentificated!");
  }

  const mail = session.user?.email || "noMail";
  const logo = formData.get("logo") as File;
  const pdf = formData.get("regulations") as File;
  const name = formData.get("name") as string;
  await upload(logo, name + "logo", "image/jpeg");
  await upload(pdf, name + "regulations", "application/pdf");
  await prisma.contest
    .create({
      data: {
        name: name,
        author: mail,
        hasAward: false,
        restrictUsersSchool: Boolean(
          formData.get("restrictHighSchool") as string,
        ),
        restrictUsersStudents: Boolean(
          formData.get("restrictHighSchool") as string,
        ),
        startDate: new Date(formData.get("startDate") as string).toISOString(),
        endDate: new Date(formData.get("endDate") as string).toISOString(),
        location: "",
        logoURL:
          "https://storage.googleapis.com/" +
          process.env.BUCKET_NAME +
          "/" +
          name +
          "logo",
        regulationsURL:
          "https://storage.googleapis.com/" +
          process.env.BUCKET_NAME +
          "/" +
          name +
          "regulations",
        Instagram: formData.get("instagram") as string,
        Facebook: formData.get("facebook") as string,
        LinkedIn: formData.get("linkedIn") as string,
      },
    })
    .then((t) => {
      console.log(t);
      prisma.$disconnect();
    });
  redirect("/");
}

export async function fetchContests(tags: Array<{ author: string }>) {}
