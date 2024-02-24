import prisma from "../lib/db";
import { Contest } from "../types/types";
import Card from "./Card";

export default async function Explore({ data }: { data?: Array<Contest> }) {
  const contests = await prisma.contest.findMany();
  return (
    <div className="grid min-h-screen w-full flex-1 grid-cols-1 grid-rows-4 gap-2 px-2 py-2 sm:grid-cols-3 sm:pt-20">
      {contests.map((contest) => {
        return <Card key={contest.name} contest={contest as Contest} />;
      })}
    </div>
  );
}
