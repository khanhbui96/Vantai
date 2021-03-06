import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/GuestWrapper';
import Command from '../components/RegisterCommand/Command';
import {addCommand, getAllCommand, selectCommand} from '../actions/command.actions';

const mapStateToProps = state=>{
  return {
    commands: state.commands,
    chooseCommand: state.selectCommand
  }
}
const RegisterCommandPage = (props)=>{
  const {getAllCommand, commands} = props;
  useEffect(()=>{
    getAllCommand()
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
    getAllCommand,
    selectCommand
  }
)(RegisterCommandPage);