export default function Card() {
  return (
    //add svg to cut the card with the logo
    <div className="flex min-h-[200px] w-full flex-col rounded-lg border-2 border-neutral p-4 shadow-lg transition-transform hover:translate-y-[-1px]">
      <div className="text text-4xl">Contestname</div>
      <div className="text-xl">Organisator name</div>
      <div className="badge badge-neutral">Main badge</div>

      <div className="flex-1"></div>
      <div className="flex w-full flex-row items-end justify-end">
        <div className="">Starts in 24h</div>
        <div className="flex-1"></div>
        <div className="btn btn-ghost max-w-max border-2 border-neutral shadow-lg">
          Info
        </div>
      </div>
    </div>
  );
}
