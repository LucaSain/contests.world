export default function Card() {
    return (//add svg to cut the card with the logo
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
    )
}