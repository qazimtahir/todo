"use client";
import React, { useState } from "react";

function Input() {
  const [inputList, setInPutList] = useState("Test");
  const [items, setItems] = useState([]);

  type event = {
    event:string;
    oldItems: string;
  }

  const itemEvent = (event:event) => {
      setInPutList(event.target.value)
  };

  const listOfItems =()=>{
    setItems((oldItems:event) =>{
      return [...oldItems, inputList];
    });
  }

  return (
    <div className="text-[red] flex h-[600px] w-[25%] mt-4 justify-center bg-white rounded-lg ">
      <form action="">
        <label>
          <h2 className="text-3xl font-medium flex justify-center pb-2 shadow-md shadow-pink-500 rounded-full mb-4 bg-slate-200">
            To Do List
          </h2>
        </label>

        <div className="border-b-4  border-blue-500 shadow-2xl shadow-green-400"></div>
        
        {/* Input */}
        <div className="flex space-between">
          <div className="pt-4">
            <input
              className="text-[green] flex border-solid border-2 border-gray-500 rounded-2xl pl-2"
              type="text" onChange={itemEvent} placeholder="Enter your to do ..." value={inputList}
            />
          </div>
          {/* Button */}
          <div className="pt-4 ml-2">
            <button className="border-solid border-1 border-gray-300 px-4 shadow-2xl bg-blue-500 rounded-xl text-blue-50 font-bold text-xl hover:bg-pink-600" onClick={listOfItems}>
              +
            </button>
          </div>
        </div>


        <div>
          <ol>
            {
            items.map( (itemval) => {
              return(
                <li>{inputList}</li>
              )
            })
          }
           
          </ol>

        </div>



      </form>
    </div>
  );
}

export default Input;
