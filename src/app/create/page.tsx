"use client"
import { DateType, DateValueType } from "react-tailwindcss-datepicker";
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from "react"
import { Contest } from "../types/types";



export default function Create() {
    const [contest, setContest] = useState<Contest>();
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleValueChange = (newValue: DateValueType) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    const forms = [
        {
            name: "A fantastic name",
            form: <input
                onChange={e => {
                    let tmpContest = { ...contest }
                    tmpContest.name = e.target.value;
                    setContest(tmpContest);
                }}
                value={contest?.name}
                type="text" className="w-full text-lg input border-neutral border-0 border-b-2 rounded-none outline-none" />
        }
        , {
            name: "Date and location",
            form: <>
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="text-4xl font-semibold ">Location</div>
                    <div className="border-2 border-neutral rounded-lg shadow-md w-1/3">
                        <Datepicker
                            value={value}
                            asSingle={true}
                            onChange={handleValueChange}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full" >
                    <div className="text-4xl font-semibold">Start date</div>
                    <div className="border-2 border-neutral rounded-lg shadow-md w-1/3">
                        <Datepicker
                            value={value}
                            asSingle={true}
                            onChange={handleValueChange}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full" >
                    <div className="text-4xl font-semibold">End date</div>
                    <button className="btn btn-sm btn-neutral shadow-lg">select</button>
                </div>

            </>
        }

        , {
            name: "Rules and regualtions",
            form: <div className="flex flex-col w-2/3 h-full justify-center gap-8">
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Upload a pdf</span>

                    </label>
                    <input type="file" className="file-input file-input-bordered w-full max-w-xs shadow-lg" />
                </div>                <div>
                    <div className="form-control">
                        <label className="label cursor-pointer ">
                            <span className="label-text ">Only accept users form highschool</span>
                            <input type="checkbox" checked={true} className="checkbox" />
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer ">
                            <span className="label-text ">Only accept users from university</span>
                            <input type="checkbox" checked={true} className="checkbox" />
                        </label>
                    </div>
                </div>
            </div>
        }
        , {
            name: "Something about?",
            form: <textarea className="textarea w-full h-4/5 border-neutral overflow-x-auto"></textarea>
        },
        {
            name: "Social Links",
            form:
                <>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Facebook</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Instagram</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text"></span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                </>
        }
    ]

    const steps = [
        "Name",
        "Date and location",
        "Rules and regulations",
        "Description",
        "Social media & preview"
    ]


    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <div className="absolute top-40 text-5xl font-semibold">{forms[currentStep].name}</div>
            <div className="flex flex-col min-w-max h-1/2 w-1/3 justify-center items-center gap-10 p-2">
                {forms[currentStep].form}
            </div>
            <div className="absolute bottom-20 flex gap-3 flex-col items-center">
                <div onClick={() => { setCurrentStep(currentStep + 1) }} className="btn btn-neutral shadow-lg max-w-max">Next</div>
                <ul className="steps">
                    {steps.map((step) => {
                        return <li onClick={() => (setCurrentStep(steps.indexOf(step)))} key={step} className={"step " + (currentStep >= steps.indexOf(step) ? "step-neutral" : "")}>{step}</li>
                    })}
                </ul>
            </div>
        </div >
    )
}