"use client"
import { useState } from "react";
import { DateType, DateValueType } from "react-tailwindcss-datepicker";
import Datepicker from "react-tailwindcss-datepicker";
import Card from "../components/Card";
export default function explore() {
    const [value, setValue] = useState<DateValueType>({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleValueChange = (newValue: DateValueType) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    }

    const orgs = [{ id: "1", text: "org" }, { id: "2", text: "org" }, { id: "3", text: "org" }]

    const tags = [{ id: "1", text: "checkbox" }, { id: "2", text: "checkbox" }, { id: "3", text: "checkbox" }]
    return (
        <div className="min-h-screen w-screen flex flex-row ">
            <div className="min-h-screen border-r-2 border-neutral w-1/5 pt-20  px-7 flex flex-col gap-2 ">
                <div className="text-xl">Start date:</div>
                <div className="border-2 border-neutral rounded-lg shadow-md">
                    <Datepicker
                        value={value}
                        asSingle={true}
                        onChange={handleValueChange}
                    />
                </div>
                <div className="text-xl">End date:</div>
                <div className="border-2 border-neutral rounded-lg shadow-md">
                    <Datepicker
                        value={value}
                        asSingle={true}
                        onChange={handleValueChange}
                    />
                </div>
                <div className="text-xl">Location:</div>
                <div className="btn btn-neutral btn-sm">Romania</div>
                <div className="text-xl">Tags:</div>
                <div className="flex flex-col gap-0">
                    {tags.map((tag) => {
                        return (
                            <div key={tag.id} className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">{tag.text}</span>
                                    <input type="checkbox" checked={true} className="checkbox" />
                                </label>
                            </div>
                        )
                    })}
                </div>

                <div className="text-xl">Organised by:</div>
                <div className="flex flex-col gap-0">
                    {orgs.map((org) => {
                        return (
                            <div key={org.id} className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">{org.text}</span>
                                    <input type="checkbox" checked={true} className="checkbox" />
                                </label>
                            </div>
                        )
                    })}

                </div>
            </div>
            <div className="grid w-full h-full flex-1 grid-cols-3 pt-20 gap-2 px-2">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}