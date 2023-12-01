"use client";

import { useEffect, useState } from "react";
import { Contest } from "../types/types";
import { createContest } from "../actions";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
export default function Create() {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const forms = [
    {
      name: "A fantastic name and logo",
      form: (
        <>
          <label htmlFor="logo">
            <div className="avatar">
              <div className="h-20 w-20 rounded-full border-2 transition-all hover:translate-y-[-1px] hover:shadow-lg sm:h-32 sm:w-32">
                <img src="/vercel.svg" />
              </div>
            </div>
          </label>
          <input id="logo" type="file" hidden={true} />

          <input
            type="text"
            id="name"
            className="input w-full rounded-none border-0 border-b-2 border-neutral text-lg focus:outline-none"
          />
        </>
      ),
    },
    {
      name: "Date and location",
      form: (
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
            <div
              className="modal-backdrop"
              onClick={() => {
                if (document)
                  (
                    document.getElementById("location_modal") as HTMLFormElement
                  ).close();
              }}
            ></div>
          </dialog>
          <div className="flex w-full flex-row items-center justify-between ">
            <div className="text-xl font-semibold sm:text-4xl">Location</div>
            <a
              className="shadown-sm btn btn-neutral btn-sm "
              onClick={() => {
                if (document)
                  (
                    document.getElementById("location_modal") as HTMLFormElement
                  ).showModal();
              }}
            >
              select
            </a>
          </div>
          <div className="flex w-full flex-row items-center justify-between ">
            <div className="text-xl font-semibold sm:text-4xl">Start date</div>

            <input
              type="date"
              id="startDate"
              className="input input-bordered input-sm w-1/2 border-2 border-neutral shadow-md sm:w-1/3"
            />
          </div>
          <div className="flex w-full flex-row items-center justify-between ">
            <div className="text-xl font-semibold sm:text-4xl">End date</div>
            <input
              type="date"
              id="endDate"
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
              id="rulesLink"
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
                  id="restrictHighSchool"
                  type="checkbox"
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
                  id="restrictUniversity"
                  type="checkbox"
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
          form="contestForm"
          className="textarea h-1/3 w-full overflow-x-auto border-neutral"
        ></textarea>
      ),
    },
    {
      name: "Social Links",
      form: (
        <>
          <div className="form-control z-10 w-full max-w-xs">
            <label className="label">
              <span className="label-text">Facebook</span>
            </label>
            <input
              id="Facebook"
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
              id="Instagram"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control  w-full max-w-xs">
            <label className="label">
              <span className="label-text">LinkedIn</span>
            </label>
            <input
              id="LinkedIn"
              type="text"
              placeholder="Type here"
              className="input input-bordered z-20 w-full max-w-xs"
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
      <form
        id="contestForm"
        action={createContest}
        className="flex h-screen w-screen flex-col items-center justify-center"
      >
        {forms.map((form) => {
          return (
            <>
              <div
                key={form.name + "a"}
                className={
                  "absolute top-20 text-xl font-semibold sm:top-40 sm:text-5xl " +
                  (forms.indexOf(form) === currentStep ? "block" : "hidden")
                }
              >
                {form.name}
              </div>
              <div
                key={form.name + "b"}
                className={
                  "flex h-1/2 w-2/3 min-w-max flex-1 flex-col items-center justify-center gap-10 p-2 sm:w-1/3 " +
                  (forms.indexOf(form) === currentStep ? "block" : "hidden")
                }
              >
                {form.form}
              </div>
            </>
          );
        })}
        <div className="absolute bottom-8 flex flex-col items-center gap-3 sm:bottom-20">
          {currentStep < 4 ? (
            <div
              onClick={() => {
                setCurrentStep(currentStep + 1);
              }}
              className="btn btn-neutral max-w-max shadow-lg"
            >
              Next
            </div>
          ) : (
            <div className="relative flex items-center justify-center">
              <div className="absolute z-0 h-20 w-20 animate-pulse bg-neutral object-cover blur-xl transition-all" />
              <button className="btn relative z-40 max-w-max border-neutral shadow-xl">
                Post
              </button>
            </div>
          )}
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
      </form>
    </>
  );
}
