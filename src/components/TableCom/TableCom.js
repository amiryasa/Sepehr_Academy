import * as React from "react";
import { useState } from 'react';

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./TableCom.css";

const TableCom = (props) => {

  const[num, setNum] = useState(1);

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
              <StyledTableCell> تاریخ پایان </StyledTableCell>
              <StyledTableCell> قیمت دوره </StyledTableCell>
              <StyledTableCell> {props.lastColumnTitle} </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.myData ? props.myData.slice((props.currentPage*props.rowsCount)-props.rowsCount,props.currentPage*props.rowsCount).map((row, index) => (
              <StyledTableRow key={index}> 
                <StyledTableCell align="left">{((props.currentPage-1)*5)+(index+1) < 10 ? `0${((props.currentPage-1)*5)+(index+1)}` : ((props.currentPage-1)*5)+(index+1)}</StyledTableCell>
                <StyledTableCell component="th" scope="row">{row.title}</StyledTableCell>
                <StyledTableCell align="left">{row.teacher.fullName}</StyledTableCell>
                <StyledTableCell align="center">1401/02/25</StyledTableCell>
                <StyledTableCell align="center">1401/02/25</StyledTableCell>
                <StyledTableCell align="center">{row.cost > 0 ? `${row.cost} ت` : 'رایگان!'}</StyledTableCell>
                <StyledTableCell align="center"></StyledTableCell>
              </StyledTableRow>
            )) : ''}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export { TableCom };
