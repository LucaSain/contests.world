import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function UserControl() {
  const session = await getServerSession();
  return (
    <>
      {session !== null && session.user !== null ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
            <div className="sm:w-15 w-10 rounded-full border-2 border-primary shadow-xl">
              <img src={session.user?.image || "/next.svg"} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 border-2 border-primary bg-base-100 p-2"
          >
            <li>
              <a className="justify-between">
                Profile
                <div className="badge badge-primary badge-sm">Organisator</div>
              </a>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/create ">Create</Link>
            </li>
            <li>
              <a href="/api/auth/signout">Logout</a>
            </li>
          </ul>
        </div>
      ) : (
        <a href="/api/auth/signin" className="btn btn-neutral">
          Sign in
        </a>
      )}
    </>
  );
}
