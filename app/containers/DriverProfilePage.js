import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import Profile from '../components/Driver/Profile';
import {
  getAll,
  addDriver,
  deleteDriver,
  selectDriver,
  updateDriver
} from '../actions/driver.actions'

const mapStateToProps = state=>{
  return {
    drivers: state.drivers,
    updateData: state.selectDriver
  }
};

const DriveProfilePage = (props)=>{
  const {getAll, drivers} = props;
  useEffect(()=>{
    getAll()
  }, [drivers.isUpdate])
    return(
        <Wrapper>
            <Profile driverProps={props}/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    addDriver,
    deleteDriver,
    selectDriver,
    updateDriver
  }
)(DriveProfilePage);