export default function Dashboard() {
    return (
        <div className="grid grid-flow-row grid-cols-3 grid-rows-3 min-h-screen h-max w-screen px-4 gap-3 pt-20 pb-4">
            <div className="min-h-[200px] w-full rounded-lg border-2 border-neutral p-4 shadow-lg hover:translate-y-[-1px] transition-transform flex flex-col">
                <div className="text text-4xl">Contestname</div>
                <div className="text-xl">Organisator name</div>
                <div className="badge badge-neutral">Main badge</div>

                <div className="flex-1"></div>
                <div className="flex flex-row justify-end items-end w-full">
                    <div className="">Starts in 24h</div>
                    <div className="flex-1"></div>
                    <div className="border-2 border-neutral btn btn-ghost shadow-lg max-w-max">Info</div>
                </div>
            </div>
        </div>
    )
}