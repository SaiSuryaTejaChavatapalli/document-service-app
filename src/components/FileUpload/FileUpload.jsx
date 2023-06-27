// Create a functional component that renders a form to upload a file

import "./FileUpload.css";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Button, TextField, MenuItem, Stack, Input } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Loader } from "rsuite";
import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/rsuite-no-reset.min.css";
function FileUpload() {
  //Write a function named handleFileUpload that receives the event object as a parameter and store that in state variable
  const [isLoaderVisible, setIsLoaderVisible] = useState(false);
  const form = useForm();
  const { register, handleSubmit, formState, control, reset: resetForm } = form;
  const { errors } = formState;

  const handleUploadClick = (data) => {
    console.log("data", data);
    setIsLoaderVisible(true);
    const formData = new FormData();
    formData.append("file", data.file[0]);
    formData.append("date", data.file[0].lastModifiedDate);
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
        setIsLoaderVisible(false);
        toast.success("Document Uploaded Successfully!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        resetForm();
      })
      .catch((err) => {
        console.log("err", err);
        setIsLoaderVisible(false);
        toast.error("Document Upload Failed!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const kindOfDocumentList = [
    "financial",
    "medical",
    "property",
    "educational",
    "miscellaneous",
  ];
  const handleErrorUploadClick = (error) => {
    console.count(error);
  };

  return (
    <Stack
      spacing={3}
      direction="column"
      className="file-upload-container"
      style={{ marginTop: "4.5rem" }}
    >
      <h1>Upload Document</h1>
      <form onSubmit={handleSubmit(handleUploadClick, handleErrorUploadClick)}>
        <Stack spacing={3} direction="column">
          <Controller
            name="file"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <Input
                  color="primary"
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
                //custom valiate to accept only 5 digit applicationId
                validate: {
                  isValidApplicationId: (value) => {
                    if (value.toString().length !== 5) {
                      console.log(value);
                      return "Please enter 5 digit application id";
                    }
                  },
                },
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
      <div>
        {isLoaderVisible && (
          <Loader size="lg" content="Uploading document..." vertical />
        )}
      </div>
    </Stack>
  );
}
export default FileUpload;

//create a file input component using material ui and react hook form
