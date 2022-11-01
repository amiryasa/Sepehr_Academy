import * as React from "react";
import { useEffect } from "react";

import { formatDate } from './../../constants/usefulFunc';

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import shoppingAction from "../../assets/images/Table/shopping.png"
import shoppingDisable from "../../assets/images/Table/shoppingDisable.png"

import "./TableCom.css";


const TableCom = (props) => {

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



  const getPhoto = (courseId) => {

    if (props.buyCourseLast.length > 0) {
      let iconShop = props.buyCourseLast.map((item) => (item === courseId))
      console.log(iconShop, "iconShop");
      if (iconShop[0]) return shoppingDisable
      else return shoppingAction
    }
    else
      return shoppingAction
  }

  const foundFailAdd = (courseId) => {
    // var iconShop;
    // if (props.buyCourseLast.length > 0) {
    //   iconShop = props.buyCourseLast.map((item) => {
    //     if (item === courseId) return true
    //     else return false
    //   })

    //   if (iconShop[0]) return
    //   else return props.onClick(courseId)

    // }
    // else
      // return props.onClick(courseId)
      props.onClick(courseId);
  }


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
            {props.myData ? props.myData.slice((props.currentPage * props.rowsCount) - props.rowsCount, props.currentPage * props.rowsCount).map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="left">{((props.currentPage - 1) * 5) + (index + 1) < 10 ? `0${((props.currentPage - 1) * 5) + (index + 1)}` : ((props.currentPage - 1) * 5) + (index + 1)}</StyledTableCell>
                <StyledTableCell component="th" scope="row">{row.title}</StyledTableCell>
                <StyledTableCell align="left">{row.teacher.fullName}</StyledTableCell>
                <StyledTableCell align="center">{formatDate(row.startDate)}</StyledTableCell>
                <StyledTableCell align="center">{formatDate(row.endDate)}</StyledTableCell>
                <StyledTableCell align="center">{row.cost > 0 ? `${row.cost} ت` : 'رایگان!'}</StyledTableCell>
                <StyledTableCell
                  align="center"
                  onClick={() => {
                    foundFailAdd(row._id)
                  }}>
                  <img style={{ cursor: "pointer" }} width={24} src={props.allCourse ? getPhoto(row._id) : props.actionPic} />
                </StyledTableCell>
              </StyledTableRow>
            )) : ''}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export { TableCom };
