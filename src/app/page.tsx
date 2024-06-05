"use client";
import React, { useState } from "react";
import "./globals.css";

function Home() {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setmainTask([...mainTask, { title, desc }]);
    settitle("");
    setdesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setmainTask(copyTask);
  };

  let renderTask = <h2>No task added yet ....</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
          <li key={i} className="items-center gap-5 mt-2">
            <div className="flex gap-4">
              <div className="flex-col">
                <h5 className="text-2xl font-semibold">{t.title}</h5>

                <p>{t.desc}</p>
              </div>
              {/* Button */}

              <button
                onClick={(i) => {
                  deleteHandler(i);
                }}
                className="bg-red-600 text-white px-4 py-2 rounded-md font-bold"
              >
                Delete
              </button>
            </div>
          </li>
        </>
      );
    });
  }
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center">
        <h1>ToDo List</h1>
      </div>

      {/* Form starts here */}
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-4">
          <div>
            <input
              // To do here
              type="text"
              placeholder="Enter todo ...!"
              className="rounded-md pl-1 text-green-600 font-semibold"
              value={title}
              onChange={(e) => {
                settitle(e.target.value);
              }}
            />
          </div>
          {/* Description  here */}
          <div>
            <input
              type="text"
              placeholder="Details here ...!"
              className="rounded-md pl-1 text-blue-600 font-semibold"
              value={desc}
              onChange={(e) => {
                setdesc(e.target.value);
              }}
            />
          </div>
          <button className="border-spacing-2 bg-pink-300 pl-3 pr-3 rounded-md">
            Add
          </button>
        </div>
      </form>
      <div className="flex justify-center text-white p-2">
        <ul>{renderTask}</ul>
      </div>
    </div>
  );
}
export default Home;
