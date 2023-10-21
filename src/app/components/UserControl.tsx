import { getServerSession } from "next-auth";
import Link from "next/link";

export default async function UserControl() {
  const session = await getServerSession();
  return (
    <>
      {session !== null && session.user !== null ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="avatar btn btn-circle btn-ghost">
            <div className="w-10 rounded-full">
              <img src={session.user?.image || "/next.svg"} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
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
