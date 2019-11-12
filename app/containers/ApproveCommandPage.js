import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import Wrapper from '../components/HostWrapper';
import Command from '../components/ApproveCommand/Command';
import {addCommand, getAll, selectCommand, deleteCommand, updateCommand} from '../actions/command.actions';

const mapStateToProps = state=>{
  return {
    commands: state.commands,
    chooseCommand: state.selectCommand
  }
}
const ApproveCommandPage = (props)=>{
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
    selectCommand,
    deleteCommand,
    updateCommand
  }
)(ApproveCommandPage);