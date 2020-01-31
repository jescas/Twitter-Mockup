import React from 'react';

class Input extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      time: '',
      content: '',
    }
  };

  create = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState(
      {
        [name]: value,
      }
    )
  }

  render () {
    return (
      <form>
        
        <h4 style={h4CSS}>What's happening?</h4>
        
        <select style={selectCSS} name="username" value={this.state.username} onChange={this.create}>
          <option>Choose A User</option>
          {this.props.users.map((user)=> <option>{user.username}</option>)}   
        </select>

        <div className="inputs">
        <input style={inputCSS} placeholder="Type in here..." name="content" type ="text" value={this.state.content} onChange ={this.create}></input>
        <input style={buttonCSS} type="button" value="Post!" onClick={() => this.submitForm()}></input>
        </div>
        
      </form>
    )
  };

  submitForm = () => {
    let date = new Date();
    let dateTime = date.toLocaleDateString() + ' @ ' + date.toLocaleTimeString();
    this.props.createPost(this.state.username, dateTime, this.state.content);
    this.setState(
      { 
        username: '',
        content: '',
        time: ''
      }
    )
  }
};

const h4CSS = {
  color: 'white',
  padding: '0px',
  marginTop: '10px',
  marginBottom: '0px'
};

const selectCSS = {
  margin: '10px',
  marginLeft: '0px'
};

const inputCSS = {
  backgroundColor: 'white',
  marginRight: '5px',
  marginBottom: '10px',
  padding: '5px'
};

const buttonCSS = {
  borderRadius: '5px',
  border: 'none',
  padding: '5px',
  color: '#00acee',
  fontWeight: '900'
};

export default Input;