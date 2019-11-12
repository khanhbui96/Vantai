import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/GuestWrapper';
import Command from '../components/RegisterCommand/Command';
import {addCommand, getAll, selectCommand} from '../actions/command.actions';

const mapStateToProps = state=>{
  return {
    commands: state.commands,
    chooseCommand: state.selectCommand
  }
}
const RegisterCommandPage = (props)=>{
  const {getAll, commands} = props;
  useEffect(()=>{
    getAll()
  }, [commands.isUpdate])
    return(
        <Wrapper>
            <Command commandProps={props}/>
        </Wrapper>
    )
}
export default connect(
  mapStateToProps,
  {
    addCommand,
    getAll,
    selectCommand
  }
)(RegisterCommandPage);