import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import Profile from '../components/Vehicle/Profile';
import {getAll, addVehicle, deleteVehicle, selectVehicle, updateVehicle} from '../actions/vehicle.actions'

const mapStateToProps = state=>{
  return {
    vehicles: state.vehicles,
    updateData: state.selectVehicles
  }
};

const VehicleProfilePage = (props)=>{
  const {getAll, vehicles} = props;
  console.log(vehicles)
  useEffect(()=>{
    getAll()
  }, [vehicles.isUpdate])
    return(
        <Wrapper>
            <Profile vehicleProps={props}/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    getAll,
    addVehicle,
    deleteVehicle,
    selectVehicle,
    updateVehicle
  }
)(VehicleProfilePage);