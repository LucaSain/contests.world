import UserControl from "./UserControl";

export default function Navbar() {
  return (
    <div className="navbar absolute z-[999] w-full rounded-none border-b-2 border-neutral bg-base-100 ">
      <div className="navbar-start">
        <div className="btn btn-ghost text-xl normal-case">
          Contests / World
        </div>
      </div>
      <div className="navbar-center">
        <button className="btn border-2 border-neutral bg-transparent">
          explore
        </button>
      </div>
      <div className="navbar-end">
        <UserControl />
      </div>
    </div>
  );
}
