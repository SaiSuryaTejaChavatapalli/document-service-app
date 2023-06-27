import axios from "axios"; // npm install axios
import { Stack, Button } from "@mui/material"; // npm install @mui/material
import SearchSharpIcon from "@mui/icons-material/SearchSharp"; // npm install @mui/icons-material
import { useEffect, useState } from "react"; // npm install react
import "./ViewDocumentsContainer.css"; // npm install @mui/icons-material
import {
  Table,
  TableContainer,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
  Paper,
} from "@mui/material"; // npm install @mui/material

import ViewDocumentRow from "./ViewDocumentRow"; // npm install @mui/material
import { dateFilter } from "../../../utils/viewDocsUtils"; // npm install @mui/material

function ViewDocumentsContainer() {
  //A container's view site object manages the display space for a particular view of a document
  let [data, setData] = useState([]);
  let [searchTxt, setSearchTxt] = useState("");
  let [filterData, setFilterData] = useState([]);
  // let [date, setDate] = useState({ start: "", end: "" });
  let [start, setStart] = useState("");
  let [end, setEnd] = useState("");

  let search = () => {
    if (searchTxt === "") {
      setFilterData(data); //setFilterData(data);
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

  const handleDelete = (key) => {
    axios
      .get(`http://localhost:3000/delete/${key}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let fetchData = async () => {
    try {
      let data = await axios.get("http://localhost:3000/search"); //fetch the data from the server
      setData(data.data.files); //set the data to the state
      setFilterData(data.data.files);
      console.log(data.data.files);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    //whenever the component is mounted, the fetchData function is called
    fetchData();
  }, []);
  useEffect(() => {
    search();
  }, [searchTxt]);
  // useEffect(() => {
  //   setFilterData(dateFilter(data, start, end));
  // }, [end]);

  return (
    <div className="App" style={{ marginTop: "4.5rem" }}>
      <header className="App-header">
        <div id="searchBar" width="100%">
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems={"center"}
            width="100%"
            sx={{
              position: "fixed",
              top: "5rem",
              padding: "0px 1rem",
              zIndex: 1,
              backgroundColor: "ghostWhite",
            }}
          >
            <Stack
              direction="row"
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{
                border: "1px solid grey",
                width: "50%",
                padding: "0rem 1rem",
                backgroundColor: "#ffffff",
              }}
            >
              <input
                type="text"
                data-testid="search-input"
                className="input"
                placeholder="Search the Files"
                value={searchTxt}
                onChange={(e) => setSearchTxt(e.target.value)} //set the searchTxt to the state
              />
              <SearchSharpIcon />
            </Stack>
            <div>
              <input
                data-testid="start-date"
                type="date"
                width="25%"
                value={start}
                onChange={(e) => setStart(e.target.value)}
              />
              <input
                data-testid="end-date"
                type="date"
                width="25%"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
              />
              <Button
                variant="contained"
                color="primary"
                onClick={() => setFilterData(dateFilter(data, start, end))}
                style={{ marginLeft: ".5rem" }}
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
                <ViewDocumentRow
                  key={item._id}
                  data={item}
                  handleDelete={handleDelete}
                />
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
