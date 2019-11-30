import React, {useEffect} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import { Clear} from '@material-ui/icons'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import { red } from '@material-ui/core/colors';


const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        }
    },
}))(TableRow);

function createData(name, rank, position, unit, infor) {
    return { name, rank, position, unit, infor };
}



const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
        marginTop: 10
    },
    formControl: {
        marginBottom: 30,
        minWidth: 200,
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    avatar: {
        backgroundColor: red[500],
    },
    bigAvatar: {
        margin: 10,
        width: 200,
        height: 200,
    },
    imageBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    margin: {
        marginLeft: 8
    }
}));

function AllProfile(props) {
    const classes = useStyles();
    const {vehicles, deleteVehicle, setValue, selectVehicle} = props;
    const [key, changeKey] = React.useState('')
    const handleChange = (e) => {
       changeKey(e.target.value)
    }
    const Vehicle = (row, index)=>{
        return <StyledTableRow key={index}>
        <StyledTableCell component="th" align="center" scope="row">{index+1}</StyledTableCell>
        <StyledTableCell align="center">{row.brand}</StyledTableCell>
        <StyledTableCell align="center">{row.type}</StyledTableCell>
        <StyledTableCell align="center">{row.fuel}</StyledTableCell>
        <StyledTableCell align="center">{row.number}</StyledTableCell>
        <StyledTableCell align="center">{row.date}</StyledTableCell>
        <StyledTableCell align="center">
            <Button 
                variant="outlined" 
                size="small" 
                color="primary" 
                className={classes.margin}
                onClick={()=>{
                    selectVehicle(row);
                    setValue(0);
                    setValue(1)
                
                }}
                >
                Xem và Sửa
            </Button>
            <Button 
                variant="outlined" 
                size="small" 
                color="primary" 
                className={classes.margin}
                onClick={()=>{deleteVehicle(row._id)}}
                >
                Xóa
            </Button>
        </StyledTableCell>
    </StyledTableRow>
    }
    const filterVehicles = (vehicles)=>{
        return vehicles.filter(vehicle=> {
            return vehicle.brand.indexOf(key) !== -1 || vehicle.type.indexOf(key) !== -1 || vehicle.number.indexOf(key) !== -1 || vehicle.fuel == key
        } ).map((vehicle, index)=>{
            return Vehicle(vehicle, index)
        })
    }
    return (
        <Paper className={classes.root}>
            <Typography style={{ textAlign: 'center' }} variant='h4'>Lí lịch phương tiện</Typography>
            <div>
                <form >
                    <TextField
                        style={{ margin: 16 }}
                        placeholder='Tìm kiếm'
                        name='keyword'
                        onChange={handleChange}
                    />
                    <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Nhiên liệu</InputLabel>
                    <Select native onChange={handleChange} >
                        <option value="" />
                        <option value='Xăng'>Xăng</option>
                        <option value='Dầu Diezen'>Dầu Diezen</option>
                    </Select>
                </FormControl>
                </form>
            </div>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow style={{ background: "#3f51b5" }}>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            STT
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Nhãn xe chuyên dùng
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Loại phương tiện
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Nhiên liệu sử dụng
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Số đăng kí
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }} align="center">
                            Thời gian đăng kí
                        </StyledTableCell>
                        
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Thao tác
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filterVehicles(vehicles.data)}
                </TableBody>
            </Table>
        </Paper>
    );
}
export default AllProfile;