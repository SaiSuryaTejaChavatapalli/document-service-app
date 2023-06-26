import { TableRow, TableCell } from "@mui/material";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import {
  formatSizeUnits,
  dateFn,
  deleteFn,
} from "../../../utils/viewDocsUtils";
import { styled } from "@mui/system";
// const Style = styled(TableCell)({
//   alignment: "center",
//   backgroundColor: red,
// });

let ViewDocumentRow = ({ data }) => {
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
      <TableCell align="center">
        <DeleteOutlineIcon color="error" onClick={() => deleteFn(data.key)} />
      </TableCell>
    </TableRow>
  );
};

export default ViewDocumentRow;
