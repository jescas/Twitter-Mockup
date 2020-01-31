import React from 'react';

class Posts extends React.Component {
  render () {
    if (!this.props.selectedUser) {
      const newPost = this.props.post.map((posts) => {
        return (
          <div className = 'Posts'>
            
            <span>{posts.username}:</ span>
            <span>{posts.content}</ span>
            <p>{posts.time}</p>

          </div>  
        )
      });
      
      return (
        <div>{newPost}</div>
      )

    } else {
      const filterPost = this.props.post.filter(posts =>  posts.username === this.props.selectedUser);
      const newPost = filterPost.map((posts) => {
        return (
          <div className='Posts'>
            
            <div style={filteredPosts}>
              <h4>{posts.username}:</h4>
              <p>{posts.content}</p>
              <p>{posts.time}</p>
            </div>

          </div>  
        )
      })
      return (
        <div>{newPost}</div>
      )
    }
  }
};

const filteredPosts = {
  margin: '10px',
  marginLeft: '0px',
  border: '1px solid white',
  borderRadius: '5px'
};

export default Posts;