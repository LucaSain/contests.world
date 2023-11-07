"use client";

import { useEffect, useState } from "react";
import { Contest } from "../types/types";

export default function Create() {
  const [contest, setContest] = useState<Contest>({ links: {} });
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [startDate, setStardDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());

  const handleStartDate = (startDate: Date) => {
    setStardDate(startDate);
    let tmp = { ...contest };
    tmp.startDate = startDate;
    setContest(tmp);
  };

  const handleEndDate = (endDate: Date) => {
    setEndDate(endDate);
    let tmp = { ...contest };
    tmp.endDate = endDate;
    setContest(tmp);
  };

  const forms = [
    {
      name: "A fantastic name and logo",
      form: (
        <>
          <label htmlFor="fileInput">
            <div className="avatar">
              <div className="h-20 w-20 rounded-full border-2 transition-all hover:translate-y-[-1px] hover:shadow-lg sm:h-32 sm:w-32">
                <img src="/vercel.svg" />
              </div>
            </div>
          </label>
          <input id="fileInput" type="file" hidden={true} />

          <input
            onChange={(e) => {
              let tmpContest = { ...contest };
              tmpContest.name = e.target.value;
              setContest(tmpContest);
            }}
            value={contest?.name}
            type="text"
            className="input w-full rounded-none border-0 border-b-2 border-neutral text-lg focus:outline-none"
          />
        </>
      ),
    },
    {
      name: "Date and location",
      form: (
        <>
          <div className="flex w-full flex-row items-center justify-between ">
            <div className="text-xl font-semibold sm:text-4xl">Location</div>
            <button
              className="shadown-sm btn btn-neutral btn-sm "
              onClick={() => {
                if (document)
                  (
                    document.getElementById("location_modal") as HTMLFormElement
                  ).showModal();
              }}
            >
              select
            </button>
          </div>
          <div className="flex w-full flex-row items-center justify-between ">
            <div className="text-xl font-semibold sm:text-4xl">Start date</div>
            {/* <div className="w-1/2 rounded-lg border-2 border-neutral shadow-md sm:w-1/3">
              <Datepicker
                value={startDate}
                asSingle={true}
                useRange={false}
                onChange={handleStartDate}
              />
              
            </div> */}
            <input
              type="date"
              className="input input-bordered input-sm w-1/2 border-2 border-neutral shadow-md sm:w-1/3"
            />
          </div>
          <div className="flex w-full flex-row items-center justify-between ">
            <div className="text-xl font-semibold sm:text-4xl">End date</div>
            <input
              type="date"
              className="input input-bordered input-sm w-1/2 border-2 border-neutral shadow-md sm:w-1/3"
            />
          </div>
        </>
      ),
    },
    {
      name: "Rules and regualtions",
      form: (
        <div className="flex h-full w-2/3 flex-col justify-center gap-8">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Upload a pdf</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered w-full max-w-xs shadow-lg"
            />
          </div>{" "}
          <div>
            <div className="form-control">
              <label className="label cursor-pointer ">
                <span className="label-text ">
                  Only accept users form highschool
                </span>
                <input
                  onChange={(e) => {
                    let tmp = { ...contest };
                    tmp.restrictUsersSchool = e.target.checked;
                    setContest(tmp);
                  }}
                  type="checkbox"
                  checked={contest?.restrictUsersSchool}
                  className="checkbox"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer ">
                <span className="label-text ">
                  Only accept users from university
                </span>
                <input
                  onChange={(e) => {
                    let tmp = { ...contest };
                    tmp.restrictUsersStudents = e.target.checked;
                    setContest(tmp);
                  }}
                  type="checkbox"
                  checked={contest?.restrictUsersStudents}
                  className="checkbox"
                />
              </label>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Description",
      form: (
        <textarea
          onChange={(e) => {
            let tmp = { ...contest };
            tmp.description = e.target.value;
            setContest(tmp);
          }}
          value={contest?.description}
          className="textarea h-1/3 w-full overflow-x-auto border-neutral"
        ></textarea>
      ),
    },
    {
      name: "Social Links",
      form: (
        <>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Facebook</span>
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => {
                let tmp = { ...contest };
                tmp.links.Facebook = e.target.value;
                setContest(tmp);
              }}
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Instagram</span>
            </label>
            <input
              onChange={(e) => {
                let tmp = { ...contest };
                tmp.links.Instagram = e.target.value;
                setContest(tmp);
              }}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">LinkedIn</span>
            </label>
            <input
              onChange={(e) => {
                let tmp = { ...contest };
                tmp.links.LinkedIn = e.target.value;
                setContest(tmp);
              }}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </>
      ),
    },
  ];

  const steps = [
    "Name",
    "Date and location",
    "Rules and regulations",
    "Description",
    "Social media & preview",
  ];

  return (
    <>
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

      <div className="flex h-screen w-screen flex-col items-center justify-center">
        <div className="absolute top-20 text-xl font-semibold sm:top-40 sm:text-5xl">
          {forms[currentStep].name}
        </div>
        <div className="flex h-1/2 w-2/3 min-w-max flex-1 flex-col items-center justify-center gap-10 p-2 sm:w-1/3">
          {forms[currentStep].form}
        </div>
        <div className="absolute bottom-8 flex flex-col items-center gap-3 sm:bottom-20">
          <div
            onClick={() => {
              setCurrentStep(currentStep + 1);
            }}
            className="btn btn-neutral max-w-max shadow-lg"
          >
            Next
          </div>
          <ul className="steps">
            {steps.map((step) => {
              return (
                <li
                  onClick={() => setCurrentStep(steps.indexOf(step))}
                  key={step}
                  className={
                    "step text-sm " +
                    (currentStep >= steps.indexOf(step) ? "step-neutral" : "")
                  }
                >
                  <div className="hidden sm:block">{step}</div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* <div className="w-screen bg-neutral py-[1px] text-center text-sm text-white dark:text-black sm:hidden">
          {steps[currentStep]}
        </div> */}
      </div>
    </>
  );
}
