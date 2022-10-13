import axios from "axios";
import React, { useMemo, useState, useEffect } from "react";
// import { ColumnFilter } from "./components/ColumnFilter";
// import Table from "./components/Table";
// import data from "./users.json";
import { NavBar } from "./components/NavBar";
import { Route, Link, Routes, Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserTable } from "./pages/UserTable";

function App() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
  //     setData(result.data);
  //   })();
  // }, []);
  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "Полное имя",
  //       Footer: "Полное имя",
  //       accessor: "full_name",
  //       Filter: ColumnFilter,
  //     },
  //     {
  //       Header: "Учетная запись",
  //       Footer: "Учетная запись",
  //       accessor: "domain_name",
  //       Filter: ColumnFilter,
  //     },
  //     {
  //       Header: "Электронная почта",
  //       Footer: "Электронная почта",
  //       accessor: "email",
  //       Filter: ColumnFilter,
  //     },
  //     {
  //       Header: "Группа",
  //       Footer: "Группа",
  //       accessor: "group",
  //       Filter: ColumnFilter,
  //     },
  //     {
  //       Header: "Номер телефона",
  //       Footer: "Номер телефона",
  //       accessor: "phone_number",
  //       Filter: ColumnFilter,
  //     },
  //   ],
  //   []
  // );
  // return (
  //   <div className="App">
  //     <Table columns={columns} data={data} />
  //   </div>
  // );
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user_table" element={<UserTable />} />
      </Routes>
    </div>
  );
}

export default App;
