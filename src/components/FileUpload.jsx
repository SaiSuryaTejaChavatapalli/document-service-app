// Create a functional component that renders a form to upload a file

import { useState } from "react";
import "./FileUpload.css";
import { useForm } from "react-hook-form";
import { Button, TextField, MenuItem } from "@mui/material";
function FileUpload() {
  //Write a function named handleFileUpload that receives the event object as a parameter and store that in state variable
  const [filesList, setFilesList] = useState();
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const handleFileUpload = (event) => {
    event.preventDefault();
    setFilesList(event.target.files);
  };
  const handleUploadClick = (data) => {
    console.log("Final Data", { filesList, data });
    if (!filesList) {
      alert("Please select a file to upload");
      return;
    }
    // const formData = new FormData();
    // files.forEach((file, i) => {
    //   formData.append(`file-${i}`, file, file.name);
    // });

    // for (let obj of formData) {
    //   console.log(obj);
    // }

    // fetch("http://localhost:8080/upload", {
    //   method: "POST",
    //   body: formData,
    // });
  };

  const files = filesList ? [...filesList] : [];
  return (
    <div className="file-upload-container">
      <form onSubmit={handleSubmit(handleUploadClick)}>
        <Button
          variant="contained"
          component="label"
          onChange={handleFileUpload}
        >
          Select File
          <input type="file" hidden />
        </Button>

        <ul>
          {files.map((file) => {
            return (
              <li key={file.name}>
                {file.name} -{file.type}
              </li>
            );
          })}
        </ul>
        <ul>
          <div>
            <TextField
              id="outlined-basic"
              label="Application ID"
              type="number"
              variant="outlined"
              {...register("applicationId")}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Statement Details"
              variant="outlined"
              {...register("statementDetails")}
            />
          </div>
          <div>
            <TextField
              select
              fullWidth
              label="Select"
              defaultValue=""
              inputProps={register("kindOfFile", {
                required: "Please enter currency",
              })}
              error={errors.currency}
              helperText={errors.currency?.message}
            >
              <MenuItem key="financial" value="financial">
                Financial
              </MenuItem>
              <MenuItem key="medical" value="financial">
                Medical
              </MenuItem>
              <MenuItem key="property" value="financial">
                Property
              </MenuItem>
            </TextField>
          </div>
        </ul>
        <Button onClick={handleUploadClick} variant="contained" type="submit">
          Upload File
        </Button>
      </form>
    </div>
  );
}
export default FileUpload;

//create the above form using material UI library
