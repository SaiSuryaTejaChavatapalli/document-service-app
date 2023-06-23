import { TableRow, TableCell } from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";

let Child = ({ data }) => {
  return (
    <TableRow>
      <TableCell>{data.applicationId}</TableCell>
      <TableCell>{data.originalname}</TableCell>
      <TableCell>{data.kindOfFile}</TableCell>
      <TableCell>{data.statementDetails}</TableCell>
      <TableCell>{`${(data.size / 1000000).toFixed(2)} MB`}</TableCell>
      <TableCell>
        <a download href={data.location}>
          <CloudDownloadOutlinedIcon />
        </a>
      </TableCell>
    </TableRow>
  );
};

export default Child;
