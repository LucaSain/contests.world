import { getServerSession } from "next-auth"
import Link from "next/link";

export default async function UserControl() {
    const session = await getServerSession()
    return (
        <>
            {session !== null && session.user !== null ?
                <div className="dropdown dropdown-end"><label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={session.user?.image || "/next.svg"} />
                    </div>
                </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><Link href="/dashboard">Dashboard</Link></li>
                        <li><a href="/api/auth/signout">Logout</a></li>
                    </ul></div> :
                <a href="/api/auth/signin" className="btn btn-neutral">Sign in</a>
            }
        </>
    )
}