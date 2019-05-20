import React, { Component } from 'react'
import axios from 'axios';

 class PostForm extends React.Component {
     constructor(props){
         super(props);
         this.state = {
             title : '',
             body : ''
         }
     }
     
     onChange = (e) =>{
        this.setState({[e.target.name] : e.target.value})
     }

     onSubmit = (e) => {
         e.preventDefault ()

         const post = {
             title : this.state.title,
             body : this.state.body
         };

         axios.get(`https://jsonplaceholder.typicode.com/todos/1`, {
             method : 'POST',
             headers : {
                 'content-type' : 'application/json'
             },
             body : JSON.stringify(post)
         })
         .then(res => {
             console.log("Successfully posted")
         })
         .catch(err =>{
             console.log(err);
         })
     }
  render() {
    return (
      <div>
          <h3>Add Posts</h3>
          <form onSubmit= {this.onSubmit}>
            <div>
                <label htmlFor="title">Title: </label>
                <input 
                type="text"
                name="title"
                value={this.state.title}
                onChange= {this.onChange}
                placeholder = "Post title"
                />
            </div>
            <br/>
            <div>
                <textarea
                name="body" 
                cols="30" 
                rows="10"
                value={this.state.body}
                onChange={this.onChange}
                placeholder="Body of the post"
                >
                </textarea>
            </div>
            <br/>
            <button>Add Post</button>
          </form>
      </div>
    )
  }
};
export default PostForm ;
