import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import "./index.css"
import { formatDate } from "../../constants/usefulFunc";

const ShoppingList = (props) => {

    console.log('456', props.myData);

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
        <div className="shoppingTable">
            <TableContainer component={Paper} className="shoppingTableContainer">
                <Table sx={{ minWidth: 600 }} aria-label="customized table">
                    <TableHead className="shoppingTableContainerHead">
                        <TableRow className="shoppingTableContainerHeadItems">
                            <StyledTableCell> ردیف </StyledTableCell>
                            <StyledTableCell> عنوان </StyledTableCell>
                            <StyledTableCell> تاریخ شروع </StyledTableCell>
                            <StyledTableCell align="left"> قیمت </StyledTableCell>
                            <StyledTableCell align="right"> تخفیف </StyledTableCell>
                            <StyledTableCell>  </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.myData && props.myData.map((row, key) => (
                            <StyledTableRow key={key}>
                                <StyledTableCell align="center">{key+1}</StyledTableCell>
                                <StyledTableCell component="th" style={{ display: "flex" }}>
                                    <img width={60} src={row.lesson.image} />
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            marginTop: "10px",
                                            paddingRight: "8px"
                                        }}>
                                        <div>{row.title}</div>
                                        <div
                                            style={{
                                                fontSize: "12px",
                                                marginTop: "5px",
                                                color: "#a99a9a"
                                            }}>
                                            {row.teacher.fullName}
                                        </div>
                                    </div>
                                </StyledTableCell>
                                <StyledTableCell align="left">{formatDate(row.startDate)}</StyledTableCell>
                                <StyledTableCell align="left">{row.cost > 0 ? `${row.cost} ت` : 'دوره رایگان!'} </StyledTableCell>
                                <StyledTableCell align="center">_</StyledTableCell>
                                <StyledTableCell align="center" onClick={() => { props.removeCourse(row) }} ></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    )
}

export {ShoppingList};