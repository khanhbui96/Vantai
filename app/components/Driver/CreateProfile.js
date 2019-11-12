import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Add from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import ImageIcon from '@material-ui/icons/Image';
import { Grid, CardMedia } from '@material-ui/core';
import FileBase64 from 'react-file-base64';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const currencies1 = [
    {
        value: '',
        label: '',
      },
    {
      value: 'B1',
      label: 'B1',
    },
    {
      value: 'B2',
      label: 'B2',
    },
    {
        value: 'C',
        label: 'C',
      },
      {
        value: 'D',
        label: 'D',
      },{
        value: 'E',
        label: 'E',
      },
      {
        value: 'FC',
        label: 'FC',
      }
  ];
  const currencies2 = [
    {
        value: '',
        label: '',
      },
    {
      value: '1/',
      label: '1/',
    },
    {
      value: '2/',
      label: '2/',
    },
    {
        value: '3/',
        label: '3/',
      },
      {
        value: '4/',
        label: '4/',
      },{
        value: '1//',
        label: '1/',
      },
      {
        value: '2//',
        label: '2//',
      }
  ];
  const currencies3 = [
    {
        value: '',
        label: '',
      },
    {
      value: 'Thợ sữa chữa',
      label: 'Thợ sữa chữa',
    },
    {
      value: 'Lái xe',
      label: 'Lái xe',
    },
    {
        value: 'Chỉ huy',
        label: 'Chỉ huy',
      }
  
  ];
  const currencies4 = [
    {
        value: '',
        label: '',
      },
    {
      value: 'Bậc 1',
      label: 'Bậc 1',
    },
    {
      value: 'Bậc 2',
      label: 'Bậc 2',
    },
    {
        value: 'Bậc 3',
        label: 'Bậc 3',
      },
      {
        value: 'Bậc 4',
        label: 'Bậc 4',
      },{
        value: 'Bậc 5',
        label: 'Bậc 5',
      },
      {
        value: 'Bậc 6',
        label: 'Bậc 6',
      },
      {
        value: 'Bậc 7',
        label: 'Bậc 7',
      }
  ];
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
        level: 'relative',
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

    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

function CreateProfile(props) {
    const classes = useStyles();
    const { createProfile } = props;
    const [open, setOpen] = React.useState(false);
    const [file, chooseFile] = React.useState([]);
    const {addDriver, setValue, updateData, selectDriver, updateDriver} = props;
    const [data, changeData] = React.useState(
        {...updateData.driver}
    
    );
    function handleClickOpen() {
        setOpen(true);
    }
    function handleClose() {
        setOpen(false);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newData = {
            ...data,
            base64: file ? '' : file[0].base64
        };
        addDriver(newData);
        setValue(1);
        setValue(0)
    }
    const handleChange = (e) => {
        changeData({ ...data, [e.target.name]: e.target.value })
    }
    const handleChangeSelect = name => event => {
        changeData({ ...data, [name]: event.target.value });
      };
    const getFiles = (files) => {
        chooseFile(files)
    }
    return (
        <React.Fragment>
                <form encType='multipart/form-data' onSubmit={handleSubmit}>
                    <List>
                        <Card className={classes.card}>
                            
                            <CardContent>
                                <Grid container spacing={3}>
                                    <Grid item xs={4} style={{display: 'flex', justifyContent: 'center'}}>
                                    <Button
                                    style={{ borderRadius: '50%' }}
                                    component="label"
                                >
                                    <div style={{ display: "none" }}>
                                        <FileBase64
                                            multiple={true}
                                            onDone={getFiles} />
                                    </div>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={file.length ? file[0].base64 : "https://www.digitalseed.dk/wp-content/uploads/2016/02/avatar_male.jpg"} className={classes.bigAvatar} >
                                    </Avatar>
                                </Button>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListItem style={{display: 'flex', flexDirection: 'column'}}>
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Họ và tên"
                                                name='name'
                                                value={data.name}
                                                onChange={handleChange}
                                            />
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Năm sinh"
                                                name='birthday'
                                                value={data.birthday}
                                                onChange={handleChange}
                                            />
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Số giấy phép lái xe"
                                                value={data.number}
                                                name='number'
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={4}>
                                    <ListItem style={{display: 'flex', flexDirection: 'column'}}>
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Ngày cấp"
                                                name='start'
                                                value={data.start}
                                                onChange={handleChange}
                                            />
                                            <TextField
                                                select
                                                label="Hạng xe"
                                                style={{ width: "100%", marginBottom: 24 }}
                                                value={data.level}
                                                onChange={handleChangeSelect('level')}
                                                SelectProps={{
                                                    native: true,
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                            >
                                                {currencies1.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Hạn sử dụng"
                                                value={data.end}
                                                name='end'
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <ListItem style={{display: 'flex', flexDirection: 'column'}}>
                                        <TextField
                                                select
                                                label="Cấp bậc"
                                                style={{ width: "100%", marginBottom: 24 }}
                                                value={data.rank}
                                                onChange={handleChangeSelect('rank')}
                                                SelectProps={{
                                                    native: true,
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                            >
                                                {currencies2.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                select
                                                label="Chức vụ"
                                                style={{ width: "100%", marginBottom: 24 }}
                                                value={data.position}
                                                onChange={handleChangeSelect('position')}
                                                SelectProps={{
                                                    native: true,
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                            >
                                                {currencies3.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                        </ListItem>
                                    </Grid><Grid item xs={4}>
                                        <ListItem style={{display: 'flex', flexDirection: 'column'}}>
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Đơn vị"
                                                value={data.unit}
                                                name='unit'
                                                onChange={handleChange}
                                            />

                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Nơi đăng kí HKTT"
                                                name='registArea'
                                                value={data.registArea}
                                                onChange={handleChange}
                                            />
                                        </ListItem>
                                    </Grid><Grid item xs={4}>
                                        <ListItem style={{display: 'flex', flexDirection: 'column'}}>
                                        <TextField
                                                select
                                                label="Bậc kĩ thuật"
                                                style={{ width: "100%", marginBottom: 24 }}
                                                value={data.degree}
                                                onChange={handleChangeSelect('degree')}
                                                SelectProps={{
                                                    native: true,
                                                    MenuProps: {
                                                        className: classes.menu,
                                                    },
                                                }}
                                            >
                                                {currencies4.map(option => (
                                                    <option key={option.value} value={option.value}>
                                                        {option.label}
                                                    </option>
                                                ))}
                                            </TextField>
                                            <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Năm nhận"
                                                name='dateReceive'
                                                value={data.dateReceive}
                                                onChange={handleChange}
                                            />

                                        </ListItem>
                                    </Grid>
                                    <Grid item xs={12}>
                                      <ListItem>

                                      <TextField
                                                style={{ width: "100%", marginBottom: 24 }}
                                                label="Đang làm nhiệm vụ"
                                                name='uses'
                                                value={data.uses}
                                                onChange={handleChange}
                                            />
                                      </ListItem>
                                    
                                    </Grid>
                                </Grid> </CardContent>
                                { !updateData.isSelected ? <Button 
                                    style={{marginBottom: 10}} 
                                    variant = "outlined" 
                                    color='primary' 
                                    type = 'submit'>
                                        Thêm hồ sơ
                                </Button> : <div><Button 
                                    style={{marginBottom: 10}} 
                                    variant = "outlined" 
                                    color='primary'
                                    onClick={()=>{
                                        updateDriver(updateData.driver._id, data)
                                    }} 
                                    type = 'submit'>
                                        Lưu thay đổi hồ sơ
                                </Button>
                                <Button 
                                style={{marginBottom: 10, marginLeft: 10}} 
                                variant = "outlined" 
                                color='primary'
                                onClick ={()=>{
                                    selectDriver({
                                        name: "",
                                        birthday: "",
                                        number: "",
                                        start: "",
                                        level: "",
                                        end: "",
                                        rank: "",
                                        position:"",
                                        unit: "",
                                        registArea: "",
                                        uses: "",
                                        degree: "",
                                        dateReceive: ""
                                    })
                                    setValue(1);
                                    setValue(0)
                                }} 
                                >
                                    Hủy
                            </Button></div>
                            }
                        </Card>
                    </List>
                </form>

        </React.Fragment>

    )
}
export default CreateProfile