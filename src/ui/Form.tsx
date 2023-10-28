import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ActionDeleteUser,
  ActionEditData,
  ActionGetTheUserDetails,
  ActionSubmitData,
} from "../store/client/actions";

type Props = {
  onClose: any;
  nameList: any;
  editData: any;
  mode: any;
  onClickPagination: any;
  pageNo: any;
  sort: any;
};

export default function Form({
  onClose,
  nameList,
  editData,
  mode,
  onClickPagination,
  pageNo,
  sort,
}: Props) {
  console.log(editData, "nameListnameListnameListnameList");
  //   redux
  const dispatch = useDispatch();
  //   state
  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isAvailable, setIsAvailable] = useState<any>(false);
  const [id, setId] = useState<any>("");
  // function
  const EmptyData = () => {
    setEmail("");
    setCategory("");
    setIsAvailable(false);
    setName("");
  };
  const SubmitForm = async () => {
    if (mode === "edit") {
      const obj = {
        id: id,
        title: name,
        category: category,
        email: email,
        availability: isAvailable,
      };
      await dispatch(ActionEditData(obj));
      await onClickPagination(pageNo, sort);
    } else {
      const obj = {
        title: name,
        category: category,
        email: email,
        availability: isAvailable ? isAvailable : false,
      };
      await dispatch(ActionSubmitData(obj));
      await onClickPagination(1, "");
    }

    EmptyData();
    onClose();
  };
  // useeffects
  useEffect(() => {
    setEmail(editData.email);
    setCategory(editData.category);
    setIsAvailable(editData.availability);
    setName(editData.title);
    setId(editData._id);
  }, [editData]);

  return (
    <>
      <div className="bg-white p-4 py-8 my-4 border rounded-md shadow-lg flex justify-between gap-4 sm:flex-col xl:flex-row">
        <div className="flex sm:flex-col xl:flex-row  gap-4 justify-between">
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name
            </label>

            <select
              name=""
              id=""
              onChange={(e: any) => setName(e.target.value)}
              value={name}
              className="bg-gray-50 border-gray-300 border rounded-md ring-blue-300 w-48 py-1 px-2"
            >
              <option value="" selected>
                ---Choose Name---
              </option>
              {nameList.map((item: any) => {
                return (
                  <>
                    <option
                      value={item.name}
                      selected={name === item.name ? true : false}
                    >
                      {item.name}
                    </option>
                    ;
                  </>
                );
              })}
            </select>
          </div>
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Category
            </label>
            <input
              onChange={(e: any) => setCategory(e.target.value)}
              value={category}
              placeholder="Enter category"
              type="text"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs
            focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
            dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="small-input"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              onChange={(e: any) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Enter email"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs
         focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end items-end align-bottom ">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                onChange={(e: any) => setIsAvailable(e.target.checked)}
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={isAvailable}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Availability 24*7
              </span>
            </label>
          </div>
        </div>
        <div className=" flex justify-center items-end align-bottom gap-4">
          <button
            onClick={() => {
              SubmitForm();
            }}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline border px-2 py-1 rounded-md"
          >
            Submit
          </button>
          <button
            onClick={() => {
              onClose();
            }}
            className="font-medium text-red-600 dark:text-blue-500 hover:underline border px-2 py-1 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
