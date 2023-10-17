export default function Navbar() {
    return (
        <div className="absolute navbar w-full z-[999] bg-base-100 border-b-2 border-neutral rounded-none ">
            <div className="navbar-start">
                <div className=" btn btn-ghost text-xl normal-case">Contests / World</div>
            </div>
            <div className="navbar-center">

                <div className="btn bg-transparent border-2 border-neutral">
                    explore
                </div></div>
            <div className="navbar-end">
                <div className="btn btn-neutral">Login</div>
            </div>
        </div>
    )
}