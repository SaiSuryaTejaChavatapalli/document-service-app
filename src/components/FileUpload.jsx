// Create a functional component that renders a form to upload a file

import "./FileUpload.css";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Button, TextField, MenuItem, Stack } from "@mui/material";
import axios from "axios";

function FileUpload() {
  //Write a function named handleFileUpload that receives the event object as a parameter and store that in state variable

  const form = useForm();
  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;
  const handleUploadClick = (data) => {
    console.log("data", data);
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("applicationId", data.applicationId);
    formData.append("kindOfFile", data.kindOfFile);
    formData.append("statementDetails", data.statementDetails);
    console.log(formData);
    axios
      .post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const kindOfDocumentList = ["financial", "medical", "property"];
  const handleErrorUploadClick = (error) => {
    console.count(error);
  };

  return (
    <Stack className="file-upload-container" spacing={3} direction="column">
      <h1>Upload Document</h1>
      <form onSubmit={handleSubmit(handleUploadClick, handleErrorUploadClick)}>
        {/* <ul>
          {files.map((file) => {
            return (
              <li key={file.name}>
                {file.name} -{file.type}
              </li>
            );
          })}
        </ul> */}
        <Stack spacing={3} direction="column">
          <Controller
            name="file"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <input
                  type="file"
                  required={true}
                  onChange={(e) => {
                    field.onChange(e.target.files);
                  }}
                />
              </div>
            )}
          />
          <div>
            <TextField
              id="outlined-basic"
              label="Application ID"
              type="number"
              variant="outlined"
              {...register("applicationId", {
                required: "Please enter application id",
                valueAsNumber: true,
              })}
              error={!!errors.applicationId}
              helperText={errors.applicationId?.message}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="Statement Details"
              variant="outlined"
              {...register("statementDetails", {
                required: "Please enter statement details",
              })}
              error={!!errors.statementDetails}
              helperText={errors.statementDetails?.message}
            />
          </div>
          <div>
            <TextField
              select
              fullWidth
              label="Select the Kind Of File"
              defaultValue=""
              inputProps={register("kindOfFile", {
                required: "Please Choose kind of file",
              })}
              error={!!errors.kindOfFile}
              helperText={errors.kindOfFile?.message}
            >
              {kindOfDocumentList.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <Button variant="contained" type="submit">
              Upload File
            </Button>
          </div>
        </Stack>
      </form>
    </Stack>
  );
}
export default FileUpload;

//create a file input component using material ui and react hook form
