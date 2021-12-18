import { DataGrid } from "@mui/x-data-grid";

const Table = (props) => (
  <div style={{ height: 300, width: "100%" }}>
    <DataGrid rows={props.rows} columns={props.columns} />
  </div>
);

export default Table;