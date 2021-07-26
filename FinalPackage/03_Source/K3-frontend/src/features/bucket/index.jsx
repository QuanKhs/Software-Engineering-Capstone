import React, { useState, useEffect } from "react";
import * as SC from "./style";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import * as minio from "minio";
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Bucket = () => {
  const classes = useStyles();

  const { listBucket } = useSelector((state) => state.bucket);

  const showBucket = () => {
    const result = listBucket.map((item) => {
      const create = JSON.stringify(item.creationDate);
      return (
        <TableRow key={item.name}>
          <TableCell component="th" scope="item">
            {item.name}
          </TableCell>
          <TableCell align="right">{item.create}</TableCell>
          <TableCell align="right">5gb</TableCell>
        </TableRow>
      );
    });
    return result;
  };

  return (
    <SC.Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Bucket Name</TableCell>
              <TableCell align="right">Last Modified</TableCell>
              <TableCell align="right">Size</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{showBucket()}</TableBody>
        </Table>
      </TableContainer>
    </SC.Container>
  );
};
export default Bucket;
