import { TableRow, TableCell } from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { formatSizeUnits, dateFn } from "../../../utils/viewDocsUtils";

const ViewDocumentRow = ({ data, handleDelete }) => {
  return (
    <TableRow>
      <TableCell align="center">{data.applicationId}</TableCell>
      <TableCell align="center">{data.originalname}</TableCell>
      <TableCell align="center">{data.kindOfFile}</TableCell>
      <TableCell align="center">{data.statementDetails}</TableCell>
      <TableCell align="center">{formatSizeUnits(data.size)}</TableCell>
      <TableCell align="center">{dateFn(data)}</TableCell>

      <TableCell align="center">
        <a download href={data.location}>
          <CloudDownloadOutlinedIcon color="primary" />
        </a>
      </TableCell>
      <TableCell align="center" sx={{ cursor: "pointer" }}>
        <DeleteOutlineIcon
          color="error"
          onClick={() => handleDelete(data.key)}
        />
      </TableCell>
    </TableRow>
  );
};

export default ViewDocumentRow;
