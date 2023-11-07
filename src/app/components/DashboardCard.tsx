export default function DashboardCard() {
  return (
    <div className="relative flex w-full flex-col rounded-lg border-2 border-neutral p-4 shadow-lg">
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

      <img
        src="/images.jpeg"
        className=" mask mask-circle absolute right-[-6px] top-2 h-1/2 w-1/3 rounded-full object-cover"
      />
    </div>
  );
}
