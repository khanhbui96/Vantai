// @flow
import { connect } from 'react-redux';
import Login from '../components/Login';
import {loginUser} from '../actions/user.actions';

const mapStateToProps = state=>{
  return {
    errs: state.errs
  }
}
export default connect(
  mapStateToProps,
  {
    loginUser
  }
)(Login);