import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select'
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog'
import {Subtitles} from '@material-ui/icons'
const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: '100%',
    },
    iconButton:{
        marginTop: 16
    }
}));

const AddDefineLevel = (props)=>{
    const classes = useStyles();
    
    const {updateData, selectDefineLevel, updateDefineLevel} = props
    const [data, changeData]= React.useState({...updateData.data})
    const [open, setOpen] = React.useState(false);
    function handleClickOpen() {
        setOpen(true);
      }
    
      function handleClose() {
        setOpen(false);
      }
    function handleDateChange(date) {
        setSelectedDate(date);
        setTime(formatDate(date));
    };
    const handleChange = (e)=>{
        changeData({
            ...data,
           [ e.target.name]: e.target.value 
        })
    };
    return(
        <React.Fragment>
            {props.collection ? <DialogTitle id="form-dialog-title">Sửa</DialogTitle> : <DialogTitle id="form-dialog-title">Thêm định mức mới</DialogTitle>}
            <DialogContent>
                    
                        <TextField
                            margin="dense"
                            id="name"
                            fullWidth
                            label="Tên trang bị"
                            name='label'
                            value={data.label}
                            onChange={handleChange}
                        />
                        <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Tên nhiên liệu</InputLabel>
                        <Select native defaultValue={data.fluel} name='fluel' onChange={handleChange}>
                            <option value="" />
                            <option value='Xăng'>Xăng</option>
                            <option value='Dầu Diezen'> Dầu Diezen</option>
                        </Select>
                    </FormControl>
                        <TextField
                            margin="dense"
                            id="name"
                            fullWidth
                            label="Định mức Theo TT/59 của BQP (lít/100km)"
                            name='define1'
                            value={data.define1}
                            onChange={handleChange}
                        />
                        <TextField
                            margin="dense"
                            id="name"
                            fullWidth
                            label="	Định mức Thường xuyên của Quân đoàn (lít/100km)"
                            name='define2'
                            value={data.define2}
                            onChange={handleChange}
                        />
                    
                    </DialogContent>
                    <DialogActions>

                    { !updateData.isSelected ? <Button 
                                    onClick={()=>{
                                        props.addDefineLevel({
                                            ...data
                                        });
                                        props.handleClose(false)
                                    }} 
                                    style={{marginBottom: 10}} 
                                    variant = "outlined" 
                                    color='primary' 
                                    type = 'submit'>
                                        Tạo mới
                                </Button> : <div><Button 
                                    style={{marginBottom: 10}} 
                                    variant = "outlined" 
                                    color='primary'
                                    onClick={()=>{
                                        updateDefineLevel(updateData.data._id, data);
                                        props.handleClose(false)
                                    }} 
                                    type = 'submit'>
                                        Lưu thay đổi hồ sơ
                                </Button>
                                <Button 
                                style={{marginBottom: 10, marginLeft: 10}} 
                                variant = "outlined" 
                                color='primary'
                                onClick ={()=>{
                                    selectDefineLevel({
                                        label: "",
                                        fluel: "",
                                        define1: "",
                                        define2: "",
                                    });
                                    props.handleClose(false)
                                }} 
                                >
                                    Hủy
                            </Button></div>
                            }

                    </DialogActions>
    </React.Fragment>
    )
}
export default AddDefineLevel
