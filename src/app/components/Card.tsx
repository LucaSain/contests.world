import prisma from "../lib/db";
import { Contest } from "../types/types";

interface Props {
  contest: Contest;
}

export default async function Card(props: Props) {
  const author = await prisma.user.findUnique({
    where: {
      email: props.contest.author,
    },
  });
  return (
    <div className="relative flex  w-full flex-col overflow-hidden rounded-lg border-2 border-neutral shadow-lg">
      <img
        src={props.contest.logoURL}
        className="absolute right-0 z-0 h-2/3 w-1/3 rounded-lg object-cover opacity-60 blur-2xl brightness-150 filter"
      />

      <div className="z-0 p-4">
        <div className="text text-2xl">{props.contest.name}</div>
        <div className="text-lg">{author?.name}</div>
        <div className="badge badge-neutral">Main badge</div>

        <div className="flex-1"></div>
        <div className="flex w-full flex-row items-end justify-end">
          <div className="text-xs">
            Starts on {props.contest.startDate?.toUTCString()}
          </div>
          <div className="flex-1"></div>
          <div className="btn btn-ghost max-w-max border-2 border-neutral bg-base-100  shadow-lg">
            Info
          </div>
        </div>
        <img
          src={props.contest.logoURL}
          className=" mask mask-circle absolute right-[-6px] top-2 h-1/2 w-1/3 rounded-full object-cover"
        />
      </div>
    </div>
  );
}
