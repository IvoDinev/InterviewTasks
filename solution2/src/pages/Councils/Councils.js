import { useState, useEffect } from "react";

import { consumeAPIEndpoint } from "../../utils";
import Table from "../../components/Table";

const columns = [
  {
    field: "abbreviation",
    headerName: "Abbreviation",
    width: 150,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "code",
    headerName: "Code",
    width: 150,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "id",
    headerName: "ID",
    width: 150,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  { field: "name", headerName: "Name", width: 150 },
  {
    field: "type",
    headerName: "Type",
    width: 150,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "updated",
    headerName: "Updated",
    width: 150,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
];

const Councils = () => {
  const [rows, setRows] = useState([]);

  const handleSearch = async () => {
    const searchData = await consumeAPIEndpoint(
      "http://ws-old.parlament.ch/councils",
      "GET",
      ""
    );

    if (!searchData) return;

    const mappedRows = searchData.map(
      ({ abbreviation, code, id, name, type, updated }) => ({
        abbreviation,
        code,
        id,
        name,
        type,
        updated,
      })
    );

    setRows(mappedRows);
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      <h2>Councils Page</h2>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Councils;
