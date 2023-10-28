import React, { useEffect, useState } from "react";
import Table from "./ui/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  ActionGetTheUserDetails,
  ActionGetUsersName,
} from "./store/client/actions";
import Form from "./ui/Form";

type Props = {};

export default function App({}: Props) {
  const dispatch = useDispatch();
  const { userList, nameList, count } = useSelector((state: any) => state.user);
  console.log(userList, nameList, "useruser");
  // states
  const [isForm, setIsForm] = useState<boolean>(false);
  const [editData, setEditData] = useState<any>({});
  const [mode, setMode] = useState<any>({});
  const [pageNo, setPageNo] = useState<any>(0);
  const [sort, setSort] = useState("desc");

  // function
  const OpenForm = () => {
    if (isForm) {
      setIsForm(false);
      return;
    } else {
      setIsForm(true);
      return;
    }
  };
  const CloseForm = () => {
    setIsForm(false);
  };

  const Pagination = (page?: any, sort?: any) => {
    const obj = {
      pageNo: page,
      limit: 10,
      sort: sort,
    };
    setPageNo(page);
    setSort(sort);
    dispatch(ActionGetTheUserDetails(obj));
  };

  // useeffects
  useEffect(() => {
    Pagination(1, "asc");
    dispatch(ActionGetUsersName());
  }, []);

  return (
    <div className="m-auto py-8 px-20">
      <div className="py-4 border rounded-lg p-4 shadow-lg bg-gray-300">
        <button
          onClick={() => {
            OpenForm();
          }}
          type="button"
          className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200
           hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg
            text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Add User
        </button>
        {/* form start */}
        {isForm && (
          <Form
            sort={sort}
            pageNo={pageNo}
            onClickPagination={Pagination}
            mode={mode}
            editData={editData}
            nameList={nameList}
            onClose={CloseForm}
          />
        )}
        {/* form end */}
        <Table
          setSort={setSort}
          sort={sort}
          pageNo={pageNo}
          onClickPagination={Pagination}
          count={count}
          setMode={setMode}
          setIsForm={setIsForm}
          setEditData={setEditData}
          data={userList}
        ></Table>
      </div>
    </div>
  );
}
