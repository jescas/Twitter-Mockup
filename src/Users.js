import React from 'react';

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
  };

  create = (e) => {
    let name = e.target.name
    let value = e.target.value

    this.setState(
      {
        [name]: value,
      }
    )
  };

  render () {
    return (
      <div className = 'createNewUser'>
      
        <form style={formCSS}>
          <input style={inputCSS} placeholder="Type in here..." name="username" type="text" value={this.state.username} onChange={this.create}></input> 
          <input style={buttonCSS} type="button" value= "Add New User!" onClick={() => this.submitForm()}></input>
        </form>

      </div>
    )
  };

  submitForm = () => {
    this.props.createNewUser(this.state);
    this.setState(
      { 
        username: ''
      }
    )
  }
};

const formCSS = {
  margin: '15px',
  marginLeft: '0'
};

const inputCSS = {
  backgroundColor: 'white',
  marginRight: '5px',
  padding: '5px'
};

const buttonCSS = {
  borderRadius: '5px',
  border: 'none',
  padding: '5px',
  color: '#00acee',
  fontWeight: '900'
};

export default Users;