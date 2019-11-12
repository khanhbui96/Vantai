import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import Verify from '../components/Vehicle/Verify';

const mapStateToProps = state=>{
  return {
    
  }
};

const VehicleVerifyPage = (props)=>{
  useEffect(()=>{
    
  }, [])
    return(
        <Wrapper>
            <Verify/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    
  }
)(VehicleVerifyPage);