import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import Link from 'react-router-dom/Link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Add from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Dialog from '@material-ui/core/Dialog';
import moment from 'moment';
import AddEquiment from './AddEquiment';


const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);
const useStyles = makeStyles(() => ({
  
}));
function Equiment(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { vehicles, selectVehicle, updateVehicle, updateData} = props.vehicleProps;
  const [single, setSingle] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [keyword, setKeyword] = React.useState('');
  const Vehicle = (row, index) => {
    return (
      <StyledTableRow key={index} >
        <StyledTableCell component="th" scope="row" align='center'>
          {index + 1}
        </StyledTableCell>
        <StyledTableCell align='center'>{row.brand}</StyledTableCell>
        <StyledTableCell align='center'>{row.number}</StyledTableCell>
        <StyledTableCell align='center'> {row.equiments.tires.length}</StyledTableCell>
        <StyledTableCell align='center'>{row.equiments.batterys.length}</StyledTableCell>
        <StyledTableCell align='center'>
          
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => {
              selectVehicle(row);
              handleClickOpen()
            }}
          >
            Xem, Bổ sung thông tin
          </Button>
          
        </StyledTableCell>
      </StyledTableRow>
    );
  };
  const filterVehicles = vehicles => {
    return vehicles
      .filter(vehicles=>{
        return (
          vehicles.status == 'Sử dụng thường xuyên'
        )
      })
      .map((vehicle, index) => {
        return Vehicle(vehicle, index);
      });
  };
  function handleClickOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit'
      }
    })
  };
  return (
    <Paper >
      <Typography style={{ textAlign: 'center', margin: 20 }} variant="h4">
        TRANG BỊ PHƯƠNG TIỆN
      </Typography>
      <Table className={classes.table}>
        <TableHead>
          <TableRow style={{ background: '#3f51b5' }}>
            <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
              STT
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
              Nhãn xe chuyên dùng
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
              Số đăng kí
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
              Số lượng lốp
            </StyledTableCell>
            <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
              Số lượng bình điện
            </StyledTableCell>

            <StyledTableCell style={{ background: '#3f51b5' }} align='center'>
              Thao tác
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>{filterVehicles(vehicles.data)}</TableBody>
      </Table>
      <AddEquiment 
        open={open}
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        updateData={updateData}
        updateVehicle={updateVehicle}
      />
      <div></div>
     
    </Paper>
  );
}

export default Equiment;
