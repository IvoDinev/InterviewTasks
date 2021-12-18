const PROXY_URL = "https://cors-anywhere.herokuapp.com/";

const columnNames = [
  "active",
  "code",
  "firstName",
  "lastName",
  "id",
  "officialDenomination",
  "salutationLetter",
  "salutationTitle",
  "updated",
];

const consumeAPIEndpoint = async (url, method, headerOptions) => {
  const response = await fetch(`${PROXY_URL}${url}`, {
    method: method,
    headers: {
      Accept: "text/json",
      "Content-Type": "application/json",
      ...headerOptions,
    },
  });

  if (!response) {
    console.log("Error occurred");
    return;
  }

  return response.json();
};

const createTableRow = (councilor) => {
  const newRow = document.createElement("tr");
  const tableCells = columnNames.map(
    (column) =>
      `<td>${councilor[column] !== null ? councilor[column] : ""}</td>`
  );
  newRow.innerHTML = tableCells.join("");
  return newRow;
};

const filterData = (name, id, data) => {
  let filteredData = [...data];

  if (!data || data.length === 0) return data;
  if (!name && !id) return data;

  if (name) {
    const nameLower = name.toLowerCase();
    filteredData = filteredData.filter((councilor) => {
      if (councilor.firstName.toLowerCase().includes(nameLower)) return true;
      if (councilor.lastName.toLowerCase().includes(nameLower)) return true;
      return false;
    });
  }

  if (id) {
    filteredData = filteredData.filter(
      (councilor) => councilor.id === Number(id)
    );
  }

  return filteredData;
};

const sortData = (sortOption, data) => {
  if (!data || data.length === 0) return data;

  let sortedData = [...data];

  if (sortOption === "ID") {
    sortedData = sortedData.sort(
      (council1, council2) => council1.id - council2.id
    );
  } else {
    sortedData = sortedData.sort((council1, council2) => {
      if (
        council1.firstName.toLowerCase() < council2.firstName.toLowerCase()
      ) {
        return -1;
      }
      if (
        council1.firstName.toLowerCase() > council2.firstName.toLowerCase()
      ) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  }

  return sortedData;
};

document.getElementById("searchBtn").addEventListener("click", async () => {
  const sortingOption = document.getElementById("sortBy").value;
  const nameFilterValue = document.getElementById("nameInput").value;
  const idFilterValue = document.getElementById("idInput").value;

  const responseData = await consumeAPIEndpoint(
    "http://ws-old.parlament.ch/councillors",
    "GET",
    ""
  );
  if (responseData) {
    const filteredData = filterData(
      nameFilterValue,
      idFilterValue,
      responseData
    );
    const sortedData = sortData(sortingOption, filteredData);
    const tableBody = document.getElementById("councilTableBody");
    tableBody.innerHTML = "";
    sortedData.forEach((council) => {
      const row = createTableRow(council);
      tableBody.appendChild(row);
    });
  }
});
