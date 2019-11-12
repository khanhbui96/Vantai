import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import Equiment from '../components/Vehicle/Equiment';

const mapStateToProps = state=>{
  return {
    
  }
};

const VihecleEquimentPage = (props)=>{
  useEffect(()=>{
    
  }, [])
    return(
        <Wrapper>
            <Equiment/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    
  }
)(VihecleEquimentPage);