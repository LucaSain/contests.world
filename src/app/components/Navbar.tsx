import UserControl from "./UserControl";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar  fixed z-[999] w-full rounded-none border-neutral bg-base-100 sm:absolute ">
      <div className="navbar-start">
        <Link
          href="/"
          className="btn btn-ghost btn-sm text-lg normal-case sm:btn-md sm:text-xl"
        >
          <div className="hidden sm:block">Contests / World</div>
          <div className="sm:hidden">C/ World</div>
        </Link>
      </div>
      <div className="navbar-center">
        <Link
          href="/explore"
          className="btn btn-sm border-2 border-neutral bg-transparent shadow-md sm:btn-md"
        >
          explore
        </Link>
      </div>
      <div className="navbar-end">
        <UserControl />
      </div>
    </div>
  );
}
