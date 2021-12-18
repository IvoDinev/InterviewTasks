import { useState, useEffect } from "react";

import { consumeAPIEndpoint } from "../../utils";
import Table from "../../components/Table";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 150,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "shortId",
    headerName: "Short ID",
    width: 150,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  { field: "updated", headerName: "Updated", width: 150 },
  
];

const Affairs = () => {
  const [rows, setRows] = useState([]);

  const handleSearch = async () => {
    const searchData = await consumeAPIEndpoint(
      "http://ws-old.parlament.ch/affairs",
      "GET",
      ""
    );

    if (!searchData) return;

    const mappedRows = searchData.map(
      ({
        id,
        shortId,
        updated
      }) => ({
        id,
        shortId,
        updated
      })
    );

    setRows(mappedRows);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <h2>Affairs Page</h2>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Affairs;
