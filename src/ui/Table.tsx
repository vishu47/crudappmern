import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  ActionDeleteUser,
  ActionGetTheUserDetails,
} from "../store/client/actions";

type Props = {
  data: any;
  setEditData: any;
  setIsForm: any;
  setMode: any;
  count: any;
  onClickPagination: any;
  pageNo: any;
  sort: any;
  setSort: any;
};

export default function Table({
  data,
  setEditData,
  setIsForm,
  setMode,
  count,
  onClickPagination,
  pageNo,
  sort,
  setSort,
}: Props) {
  // redux
  const dispatch = useDispatch();
  // states
  const [data1, setData1] = useState([]);
  // functions
  // delete user data
  const DeleteUser = async (id: any) => {
    if (window.confirm("Are you sure to delete this Data?")) {
      await dispatch(ActionDeleteUser(id));
      await onClickPagination(1);
    }
  };

  const StartEditingData = (item: any) => {
    setIsForm(true);
    setEditData(item);
    setMode("edit");
  };

  const SortDataAscending = async () => {
    const sr = sort === "desc" ? "asc" : "desc";
    await onClickPagination(pageNo, sr);

    // const sortTitle = data1.slice().sort((a: any, b: any) => {
    //   let fa = a.title.toLowerCase(),
    //     fb = b.title.toLowerCase();
    //   if (fa > fb) {
    //     return -1;
    //   }
    //   if (fa < fb) {
    //     return 1;
    //   }
    //   return 0;
    // });
    // console.log(sortTitle);
    // setData1(sortTitle);
  };

  function DivideAndReturnWhole(number: any) {
    const m = number / 10;
    const l = Math.floor(number / 10);
    return m > l ? l + 1 : l;
  }

  //   useeffect
  useEffect(() => {
    setData1(data);
  }, [data]);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span
                  onClick={() => SortDataAscending()}
                  className="flex  items-center cursor-pointer w-[30%]"
                >
                  name
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 ml-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                    />
                  </svg>
                </span>
              </th>
              <th scope="col" className="px-6 py-3 w-[15%]">
                Category
              </th>
              <th scope="col" className="px-6 py-3 w-[30%]">
                Email
              </th>
              <th scope="col" className="px-6 py-3 w-[10%]">
                Avalability(24*7)
              </th>
              <th scope="col" className="px-6 py-3 w-[20%]">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data1.length > 0
              ? data1.map((item: any, key: any) => {
                  return (
                    <>
                      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                        >
                          {item.title}
                        </th>
                        <td className="px-6 py-4">{item.category}</td>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              disabled
                              type="checkbox"
                              value=""
                              className="sr-only peer"
                              checked={item.availability ? true : false}
                            />
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                          </label>
                        </td>
                        <td className="px-6 py-4 flex justify-start gap-8">
                          <button
                            onClick={() => {
                              StartEditingData(item);
                            }}
                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline border px-2 py-1 rounded-md"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => {
                              DeleteUser(item._id);
                            }}
                            className="font-medium text-red-600 dark:text-blue-500 hover:underline border px-2 py-1 rounded-md"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })
              : ""}
          </tbody>
        </table>
        <nav
          className="flex items-center justify-between pt-4 bg-white p-4 "
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Total Records :{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              {count}
            </span>
          </span>
          <ul className="inline-flex -space-x-px text-sm h-8">
            {Array(count ? DivideAndReturnWhole(count) : 0)
              .fill("")
              .map((_: any, key: any) => {
                return (
                  <>
                    <li
                      onClick={() => {
                        onClickPagination(key + 1, sort);
                      }}
                    >
                      <a
                        href="#"
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                      >
                        {key + 1}
                      </a>
                    </li>
                  </>
                );
              })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
