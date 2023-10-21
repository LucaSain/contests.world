import UserControl from "./UserControl";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar absolute z-[999] w-full rounded-none border-neutral bg-base-100 ">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl normal-case">
          Contests / World
        </Link>
      </div>
      <div className="navbar-center">
        <Link
          href="/explore"
          className="btn border-2 border-neutral bg-transparent shadow-md"
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
