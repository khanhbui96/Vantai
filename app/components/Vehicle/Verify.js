import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}));

const Verify = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
            <Tab label={<h4>Thông tin kiểm định</h4>} />
            <Tab label={<h4>Xe tới kì kiểm định</h4>} />
            <Tab label={<h4>Cập nhật thông tin</h4>} />
            </Tabs>
        </AppBar>
        {value === 0 && <div className={classes.page}>khanh</div>}
        {value === 1 && <div className={classes.page}>trong</div>}
        {value === 2 && <div className={classes.page}>Bui</div>}
        </div>
  );
}

export default Verify