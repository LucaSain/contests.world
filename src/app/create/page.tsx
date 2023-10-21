"use client";
import { DateType, DateValueType } from "react-tailwindcss-datepicker";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react";
import { Contest } from "../types/types";

export default function Create() {
  const [contest, setContest] = useState<Contest>();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [value, setValue] = useState<DateValueType>({
    startDate: new Date(),
    endDate: new Date(),
  });

  const handleValueChange = (newValue: DateValueType) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const forms = [
    {
      name: "A fantastic name and logo",
      form: (
        <>
          <label htmlFor="fileInput">
            <div className="avatar">
              <div className="h-32 w-32 rounded-full border-2 transition-all hover:translate-y-[-1px] hover:shadow-lg">
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
            className="input w-full rounded-none border-0 border-b-2 border-neutral text-lg outline-none"
          />
        </>
      ),
    },
    {
      name: "Date and location",
      form: (
        <>
          <div className="flex w-full flex-row items-center justify-between">
            <div className="text-4xl font-semibold ">Location</div>
            <div className="w-1/3 rounded-lg border-2 border-neutral shadow-md">
              <Datepicker
                value={value}
                asSingle={true}
                onChange={handleValueChange}
              />
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-between">
            <div className="text-4xl font-semibold">Start date</div>
            <div className="w-1/3 rounded-lg border-2 border-neutral shadow-md">
              <Datepicker
                value={value}
                asSingle={true}
                onChange={handleValueChange}
              />
            </div>
          </div>
          <div className="flex w-full flex-row items-center justify-between">
            <div className="text-4xl font-semibold">End date</div>
            <button className="btn btn-neutral btn-sm shadow-lg">select</button>
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
                <input type="checkbox" checked={true} className="checkbox" />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer ">
                <span className="label-text ">
                  Only accept users from university
                </span>
                <input type="checkbox" checked={true} className="checkbox" />
              </label>
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Something about?",
      form: (
        <textarea className="textarea h-4/5 w-full overflow-x-auto border-neutral"></textarea>
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
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Instagram</span>
            </label>
            <input
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
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="absolute top-40 text-5xl font-semibold">
        {forms[currentStep].name}
      </div>
      <div className="flex h-1/2 w-1/3 min-w-max flex-col items-center justify-center gap-10 p-2">
        {forms[currentStep].form}
      </div>
      <div className="absolute bottom-20 flex flex-col items-center gap-3">
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
                  "step " +
                  (currentStep >= steps.indexOf(step) ? "step-neutral" : "")
                }
              >
                {step}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
