import React from 'react';
import './App.css';
import Header from './Header'
import Input from './Input'
import Posts from './Posts'
import Users from './Users'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          username: 'Thing 4'
        },
        {
          username: 'Thing 5'
        },
        {
          username: 'Thing 6'
        }
      ],

      post: [
        { 
          username: 'Thing 1',
          content: ' First post about something.',
          time: '12:00'
        },
        { 
          username: 'Thing 2',
          content: ' Second post about something.',
          time: '12:00'
        },
        { 
          username: 'Thing 3',
          content: ' Third post about something.',
          time: '12:00'
        },
      ],
    }
  };

  createPost = (username, time, content) => {
    const newPost = {
      username: username,
      content: content,
      time: time,
    };
    this.setState(
      {
        post: [newPost, ...this.state.post]
      }
    )
  }

  createNewUser = (newUser) => {
    this.setState(
      {
        users: [newUser, ...this.state.users,]
      }
    )
  };

  handleUser = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(
      {
        [name]: value
      }
    )
  };

  render () {
    return (
      <div style={containerCSS} className = "container">

        <Header />

        <select className = "userSelect" name = 'name'  value = {this.state.users.username} onChange = {this.handleUser}>
          <option>Filter Timeline</option>
          {this.state.users.map((user)=> <option >{user.username}</option>)}   
        </select>

        <Input users={this.state.users} createPost={this.createPost} />

        <Posts selectedUser={this.state.name} users={this.state.users}  post={this.state.post} />

        <Users createNewUser = {this.createNewUser} />
        
      </div>
    )
  }
};

const containerCSS = { 
  fontFamily: 'courier new',
  margin: 'auto',
  background: '#00acee',
  padding: '10px',
  maxWidth: '50%',
  fontSize: 'smaller',
};

export default App;