import axios from "axios";
import { Stack, Button } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useEffect, useState } from "react";
import "./ViewDocumentsContainer.css";
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";

import ViewDocumentRow from "./ViewDocumentRow";
import { dateFilter } from "../../../utils/viewDocsUtils";

function ViewDocumentsContainer() {
  let [data, setData] = useState([]);
  let [searchTxt, setSearchTxt] = useState("");
  let [filterData, setFilterData] = useState([]);
  // let [date, setDate] = useState({ start: "", end: "" });
  let [start, setStart] = useState("");
  let [end, setEnd] = useState("");

  let search = () => {
    if (searchTxt === "") {
      setFilterData(data);
    } else {
      let newData = data.filter((item) => {
        for (let i of Object.values(item)) {
          if (
            i !== null &&
            i.toString().toLowerCase().includes(searchTxt.toLowerCase())
          ) {
            return true;
          }
        }
      });
      setFilterData(newData);
    }
  };

  let fetchData = async () => {
    try {
      let data = await axios.get("http://localhost:3000/search");
      setData(data.data.files);
      setFilterData(data.data.files);
      console.log(data.data.files);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    search();
  }, [searchTxt]);
  // useEffect(() => {
  //   setFilterData(dateFilter(data, start, end));
  // }, [end]);

  return (
    <div className="App">
      <header className="App-header">
        <div id="searchBar" width="100%">
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            width="100%"
          >
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{
                border: "1px solid grey",
                width: "50%",
                padding: "0rem 1rem",
              }}
            >
              <input
                type="text"
                className="input"
                placeholder="Search the Files"
                value={searchTxt}
                onChange={(e) => setSearchTxt(e.target.value)}
              />
              <SearchSharpIcon />
            </Stack>
            <div>
              <input
                type="date"
                width="25%"
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />
              <input
                type="date"
                width="25%"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => setFilterData(dateFilter(data, start, end))}
              >
                OK
              </Button>
            </div>
          </Stack>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow id="header">
                <TableCell align="center" sx={{ fontSize: "1rem" }}>
                  ID
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    fontSize: "1rem",
                    wordWrap: "break-word",
                    width: "100px",
                  }}
                >
                  Name
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1rem" }}>
                  Kind of File
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1rem" }}>
                  Statement Details
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1rem" }}>
                  Size
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1rem" }}>
                  Date of Created
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1rem" }}>
                  Download
                </TableCell>
                <TableCell align="center" sx={{ fontSize: "1rem" }}>
                  Delete
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData?.map((item, index) => (
                <ViewDocumentRow key={item._id} data={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {filterData?.length === 0 && (
          <div id="notFound">
            <h1>Not Found</h1>
          </div>
        )}
      </header>
    </div>
  );
}

export default ViewDocumentsContainer;
