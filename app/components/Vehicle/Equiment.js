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

const Equiment = props => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
 
  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
        <div className={classes.root}>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
            <Tab label={<h5>Tra cứu trang thiết bi</h5>} />
            <Tab label={<h5>Bổ sung thông tin trang thiết bị </h5>} />
            </Tabs>
        </AppBar>
        {value === 0 && <div className={classes.page}>khanh</div>}
        {value === 1 && <div className={classes.page}>Bui</div>}
        </div>
  );
}

export default Equiment