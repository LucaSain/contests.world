"use server";
import prisma from "./lib/db";
import { Contest } from "./types/types";

export async function createContest(formData: FormData) {
  console.log(formData);
  //return prisma.contest.create({ data: formData });
}
