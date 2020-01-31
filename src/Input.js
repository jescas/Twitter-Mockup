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
        
        <select name="username" value={this.state.username} onChange={this.create}>
          <option>Choose A User</option>
          {this.props.users.map((user)=> <option>{user.username}</option>)}   
        </select>

        <div className="inputs">
        <input style={inputCSS} placeholder="Type in here..." name="content" type ="text" value={this.state.content} onChange ={this.create}></input>
        <input type="button" value="Post!" onClick={() => this.submitForm()}></input>
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


const inputCSS = {
  backgroundColor: 'white',
  marginRight: '5px'
};

export default Input;