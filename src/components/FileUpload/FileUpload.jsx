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
  const form = useForm();//useForm is a custom hook for managing forms with ease.
  const { register, handleSubmit, formState, control, reset: resetForm } = form;
  const { errors } = formState; //errors is an object that contains all the errors that are present in the form.

  const handleUploadClick = (data) => { //sends file to server on clicking Upload button.
    console.log("data", data);
    setIsLoaderVisible(true); //loader is visible while uploading file.
    const formData = new FormData(); 
    formData.append("file", data.file[0]); //
    formData.append("date", data.file[0].lastModifiedDate);
    formData.append("applicationId", data.applicationId);
    formData.append("kindOfFile", data.kindOfFile);
    formData.append("statementDetails", data.statementDetails);
    console.log(formData);
    axios //axios is used to make http requests.
      
      .post("http://localhost:3000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("res", res);
        setIsLoaderVisible(false); //loader is invisible after file upload.
        toast.success("Document Uploaded Successfully!", { //toast is used to display success message.
          position: "bottom-center",
          autoClose: 5000, //autoClose is used to close the toast after 5 seconds.
          hideProgressBar: true, //hideProgressBar is used to hide the progress bar.
          closeOnClick: true, //closeOnClick is used to close the toast when user clicks on it.
          pauseOnHover: true, //pauseOnHover is used to pause the toast when user hovers on it.
          draggable: true, //draggable is used to make the toast draggable.
          progress: undefined, //progress is used to display the progress of the upload.
          theme: "light",
        });
        resetForm(); //resets the form after file upload.
      })
      .catch((err) => { 
        console.log("err", err);
        setIsLoaderVisible(false); //loader is invisible after file upload.
        toast.error("Document Upload Failed!", {//toast is used to display error message.
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

  const kindOfDocumentList = [ //kindOfDocumentList is an array that contains all the kind of documents that can be uploaded.
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
    <Stack spacing={3} direction="column" className="file-upload-container"> 
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
              error={!!errors.applicationId} //error is true if applicationId is not valid.
              helperText={errors.applicationId?.message}//helperText is the message that is displayed if applicationId is not valid.
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
export default FileUpload; //export the FileUpload component.

//create a file input component using material ui and react hook form
