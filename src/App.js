import React, { Component } from 'react';
import { connect } from "react-redux";
import { updateUser, deleteUser } from "./redux/Action/authAction";

class App extends Component {

  constructor() {
    super()
     
  }

  componentDidMount() {
    console.log('--------', this.props.updateUser({name:'Ayan Murad'}))
  }

  render() {
    return <>
       <h1>{this.props.user?.name}</h1>
       <button onClick={this.props.deleteUser}>Remove</button>
      </>
  }
}

const mapStateToProps = (state) =>{
  return {
    user: state.Auth.user
  }
}

const mapDispatchToProps = (dispatch) => {
 return{
  updateUser: (user) => dispatch(updateUser(user)),
  deleteUser: () => dispatch(deleteUser())
 } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
