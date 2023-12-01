"use client";
import { useState } from "react";
import { DateType, DateValueType } from "react-tailwindcss-datepicker";
import Explore from "./Explore";

export default function Drawer() {
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const orgs = [
    { id: "1", text: "org" },
    { id: "2", text: "org" },
    { id: "3", text: "org" },
  ];

  const tags = [
    { id: "1", text: "checkbox" },
    { id: "2", text: "checkbox" },
    { id: "3", text: "checkbox" },
  ];
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button mt-20 lg:hidden"
          >
            Filter
          </label>
          <Explore />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className=" ">
            <div className="menu flex min-h-screen w-80 flex-col gap-2 bg-base-100 px-7 pt-20">
              <div className="text-xl">Start date:</div>

              <input type="date" className="input input-bordered" />

              <div className="text-xl">End date:</div>

              <input type="date" className="input input-bordered" />

              <div className="text-xl">Location:</div>
              <button
                className="shadown-sm btn btn-neutral btn-sm "
                onClick={() => {
                  if (document)
                    (
                      document.getElementById(
                        "location_modal",
                      ) as HTMLFormElement
                    ).showModal();
                }}
              >
                Romania
              </button>
              <div className="text-xl">Tags:</div>
              <div className="flex flex-col gap-0">
                {tags.map((tag) => {
                  return (
                    <div key={tag.id} className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">{tag.text}</span>
                        <input
                          type="checkbox"
                          checked={true}
                          className="checkbox"
                        />
                      </label>
                    </div>
                  );
                })}
              </div>

              <div className="text-xl">Organised by:</div>
              <div className="flex flex-col gap-0">
                {orgs.map((org) => {
                  return (
                    <div key={org.id} className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text">{org.text}</span>
                        <input
                          type="checkbox"
                          checked={true}
                          className="checkbox"
                        />
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
          </ul>
        </div>
      </div>
      <dialog
        id="location_modal"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <input
            className="input input-bordered mt-2 w-full"
            type="text"
            placeholder="Search for a country"
          />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
