import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./TableCom.css";

const TableCom = () => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  function createData(number, name, teacher, date, capacity, cost) {
    return { number, name, teacher, date, capacity, cost };
  }

  const rows = [
    createData('01',"دوره پیشرفته  Front-End", 'دکتر محمد بحرالعلوم', '01/02/25', 35, '000 125 ت'),
    createData('02',"دوره پیشرفته  Front-End", 'دکتر محمد بحرالعلوم', '01/02/25', 35, '000 125 ت'),
    createData('03',"دوره پیشرفته  Front-End", 'دکتر محمد بحرالعلوم', '01/02/25', 35, '000 125 ت'),
    createData('04',"دوره پیشرفته  Front-End", 'دکتر محمد بحرالعلوم', '01/02/25', 35, '000 125 ت'),
    createData('05',"دوره پیشرفته  Front-End", 'دکتر محمد بحرالعلوم', '01/02/25', 35, '000 125 ت'),
  ];

  return (
    <div className="tableCom">
      <TableContainer component={Paper} className="tableComContainer">
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead className="tableComContainerHead">
            <TableRow className="tableComContainerHeadItems">
              <StyledTableCell> ردیف </StyledTableCell>
              <StyledTableCell> نام دوره </StyledTableCell>
              <StyledTableCell align="left"> مدرس دوره </StyledTableCell>
              <StyledTableCell> تاریخ شروع </StyledTableCell>
              <StyledTableCell> ظرفیت </StyledTableCell>
              <StyledTableCell> قیمت دوره </StyledTableCell>
              <StyledTableCell> حذف دوره </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.number}>
                <StyledTableCell align="center">{row.number}</StyledTableCell>
                <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
                <StyledTableCell align="left">{row.teacher}</StyledTableCell>
                <StyledTableCell align="center">{row.date}</StyledTableCell>
                <StyledTableCell align="center">{row.capacity}</StyledTableCell>
                <StyledTableCell align="center">{row.cost}</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export { TableCom };
