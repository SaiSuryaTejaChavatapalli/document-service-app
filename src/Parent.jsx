import axios from "axios";
import { TextField, Stack } from "@mui/material";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useEffect, useState } from "react";
import "./Parent.css";
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material";
import "./App.css";
import Child from "./Child";

function Parent() {
  let [data, setData] = useState([]);
  let [searchTxt, setSearchTxt] = useState("");
  let [filterData, setFilterData] = useState([]);

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

  return (
    <div className="App">
      <header className="App-header">
        <div id="searchBar" width="100%">
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
              placeholder="Search the Files"
              value={searchTxt}
              onChange={(e) => setSearchTxt(e.target.value)}
            />
            <SearchSharpIcon />
          </Stack>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow id="header">
                <TableCell sx={{ fontSize: "1rem" }}>ID</TableCell>
                <TableCell
                  sx={{
                    fontSize: "1rem",
                    wordWrap: "break-word",
                    width: "100px",
                  }}
                >
                  Name
                </TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>Kind of File</TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>
                  Statement Details
                </TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>Size</TableCell>
                <TableCell sx={{ fontSize: "1rem" }}>Download</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filterData.map((item, index) => (
                <Child key={item._id} data={item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {filterData.length === 0 && (
          <div id="notFound">
            <h1>Not Found</h1>
          </div>
        )}
      </header>
    </div>
  );
}

export default Parent;
