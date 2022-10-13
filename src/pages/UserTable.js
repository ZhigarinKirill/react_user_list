import React, { useMemo, useState, useEffect } from "react";
import { ColumnFilter } from "../components/ColumnFilter";
import Table from "../components/Table";
import axios from "axios";

export const UserTable = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios(
        "https://raw.githubusercontent.com/ZhigarinKirill/repo_for_json/main/users.json"
      );
      setData(result.data);
    })();
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: "Полное имя",
        Footer: "Полное имя",
        accessor: "full_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Учетная запись",
        Footer: "Учетная запись",
        accessor: "domain_name",
        Filter: ColumnFilter,
      },
      {
        Header: "Электронная почта",
        Footer: "Электронная почта",
        accessor: "email",
        Filter: ColumnFilter,
      },
      {
        Header: "Группа",
        Footer: "Группа",
        accessor: "group",
        Filter: ColumnFilter,
      },
      {
        Header: "Номер телефона",
        Footer: "Номер телефона",
        accessor: "phone_number",
        Filter: ColumnFilter,
      },
    ],
    []
  );
  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
};
