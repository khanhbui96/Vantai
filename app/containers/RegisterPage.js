// @flow
import { connect } from 'react-redux';
import Register from '../components/Register'
import {registerUser} from '../actions/user.actions'

const mapStateToProps = state=>{
  return {
    errs: state.errs
  }
}
export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(Register);