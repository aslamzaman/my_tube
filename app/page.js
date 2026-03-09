"use client";
import React, { useState } from "react";
import { BtnEn, BtnSubmit, TextareaEn } from "@/components/Form";

export default function Home() {
  const [tag, setTag] = useState("");
  const [counter, setCounter] = useState("");
  const [counterResult, setCounterResult] = useState("");
  const [note, setNote] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    try {

      const tagString = tag
        .split("\n")
        .filter(item => item.trim() !== "")
        .join(", ");

      setTag(tagString);

    } catch (error) {
      console.error("Data not matched ", error);
    }
  };


  const wordCounter = () => {
    const characters = counter.length;

    const words = counter.trim().split(/\s+/).filter(word => word.length > 0).length;

    setCounterResult(`Total Characters: ${characters}; Total Word: ${words}`)
  }


  return (
    <div className="px-4 py-6">
      <div className="w-full py-6 sm:w-11/12 md:w-9/12 lg:w-1/2 mx-auto border-2 border-gray-300 rounded-lg shadow-lg">

        <div className="px-4">
          <p className="text-center text-red-500"></p>
          <form onSubmit={submitHandler}>
            <div className="grid grid-cols-1 gap-4">
              <TextareaEn Title="Keywords" Id="tag" Rows="5" Change={e => setTag(e.target.value)} Value={tag} />
            </div>
            <BtnSubmit Title="Result" Class="bg-blue-600 hover:bg-blue-800 text-white" />
          </form>
        </div>

        <div className="w-full px-4">
          <div className="w-full h-[1px] my-4 bg-gray-800"></div>
          <h1 className="text-2xl my-2 underline">Word Counter</h1>
          <TextareaEn Title="Word Counter" Id="counter" Rows="3" Change={e => setCounter(e.target.value)} Value={counter} />
          <div className="flex justify-between items-center">
            <BtnEn Title="Result" Click={wordCounter} Class="bg-blue-600 hover:bg-blue-800 text-white" />
            <p className="text-black font-bold">{counterResult}</p>
          </div>
        </div>
      </div>

      <div className="m-4">
        <TextareaEn Title="Note" Id="note" Rows="10" Change={e => setNote(e.target.value)} Value={note} />
      </div>

    </div>
  );
}


