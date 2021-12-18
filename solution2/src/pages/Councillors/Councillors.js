import { useState, useEffect } from "react";

import { consumeAPIEndpoint } from "../../utils";
import Table from "../../components/Table";

const columns = [
  {
    field: "active",
    headerName: "Active",
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
  { field: "firstName", headerName: "First Name", width: 150 },
  { field: "lastName", headerName: "Last Name", width: 150 },
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "officialDenomination",
    headerName: "Official Denomination",
    width: 150,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "salutationLetter",
    headerName: "Salutation Letter",
    width: 150,
    hideSortIcons: true,
    disableColumnMenu: true,
  },
  {
    field: "salutationTitle	",
    headerName: "Salutation Title	",
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

const Councillors = (props) => {
  const [rows, setRows] = useState([]);

  const handleSearch = async () => {
    const searchData = await consumeAPIEndpoint(
      "http://ws-old.parlament.ch/councillors",
      "GET",
      ""
    );

    if (!searchData) return;

    const mappedRows = searchData.map(
      ({
        id,
        active,
        code,
        firstName,
        lastName,
        officialDenomination,
        salutationLetter,
        salutationTitle,
        updated,
      }) => ({
        id,
        active,
        code,
        firstName,
        lastName,
        officialDenomination,
        salutationLetter,
        salutationTitle,
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
      <h2>Councillors Page</h2>
      <Table columns={columns} rows={rows} />
    </>
  );
};

export default Councillors;
