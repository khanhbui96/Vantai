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
        margin: theme.spacing(1),
        minWidth: 120,
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
    const {drivers, deleteDriver, setValue, selectDriver} = props;
    const [key, changeKey] = React.useState('')
    const handleChange = (e) => {
       changeKey(e.target.value)
    }
    const Driver = (row, index)=>{
        return <StyledTableRow key={index}>
        <StyledTableCell component="th" scope="row">{index+1}</StyledTableCell>
        <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
        <StyledTableCell align="center">{row.birthday}</StyledTableCell>
        <StyledTableCell align="center">{row.rank}</StyledTableCell>
        <StyledTableCell align="center">{row.position}</StyledTableCell>
        <StyledTableCell align="center">{row.unit}</StyledTableCell>
        <StyledTableCell align="center">
            <Button 
                variant="outlined" 
                size="small" 
                color="primary" 
                className={classes.margin}
                onClick={()=>{
                    selectDriver(row);
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
                onClick={()=>{deleteDriver(row._id)}}
                >
                Xóa
            </Button>
        </StyledTableCell>
    </StyledTableRow>
    }
    const filterDrivers = (drivers)=>{
        return drivers.filter(driver=> {
            return driver.name.indexOf(key) !== -1 || driver.rank == key || driver.position == key 
        } ).map((driver, index)=>{
            return Driver(driver, index)
        })
    }
    return (
        <Paper className={classes.root}>
            <Typography style={{ textAlign: 'center' }} variant='h4'>Lái xe trong đơn vị</Typography>
            <div>
                <form >
                    <TextField
                        style={{ margin: 8 }}
                        placeholder='Tìm kiếm'
                        name='keyword'
                        onChange={handleChange}
                    />
                    <IconButton ><Clear /></IconButton>
                </form>

                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Cấp bậc</InputLabel>
                    <Select native  onChange={handleChange}>
                        <option value="" />
                        <option value='1/'>1/</option>
                        <option value='2/'>2/</option>
                        <option value='3/'>3/</option>
                        <option value='4/'>4/</option>
                        <option value='1//'>1//</option>
                        <option value='2//'>2//</option>  

                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-native-simple">Chức vụ</InputLabel>
                    <Select native  onChange={handleChange} >
                        <option value="" />
                        <option value='Thợ sữa chữa'>Thợ sữa chữa</option>
                        <option value='Lái xe'>Lái xe</option>
                        <option value='Chỉ huy'>Chỉ huy</option>
                    </Select>
                     
                </FormControl>
            </div>

            <Table className={classes.table}>
                <TableHead>
                    <TableRow style={{ background: "#3f51b5" }}>
                        <StyledTableCell style={{ background: "#3f51b5" }}>
                            STT
                        </StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }}>
                            Họ và tên 
                        </StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }} align="center">
                            Năm sinh
                        </StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }}>
                            Cấp bậc
                        </StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }}>
                            Chức vụ
                        </StyledTableCell>
                        <StyledTableCell style={{ background: "#3f51b5" }}>
                            Đơn vị
                        </StyledTableCell>
                        <StyledTableCell align="center" style={{ background: "#3f51b5" }}>
                            Thao tác
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filterDrivers(drivers)}
                </TableBody>
            </Table>
        </Paper>
    );
}
export default AllProfile;