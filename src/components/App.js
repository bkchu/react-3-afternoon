import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import Header from "./Header/Header";
import Compose from "./Compose/Compose";
import Post from "./Post/Post";

class App extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
      baseUrl: "https://practiceapi.devmountain.com/api"
    };

    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }

  componentDidMount() {
    axios
      .get(`${this.state.baseUrl}/posts`)
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => console.error(error));
  }

  updatePost(id, text) {
    axios
      .put(`${this.state.baseUrl}/posts?id=${id}`, { text })
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => console.error(error));
  }

  deletePost(id) {
    axios
      .delete(`${this.state.baseUrl}/posts?id=${id}`)
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => console.error(error));
  }

  createPost(text) {
    axios
      .post(`${this.state.baseUrl}/posts`, { text })
      .then(response => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch(error => console.error(error));
  }

  searchHandler(text) {
    if (text.length >= 1) {
      axios
        .get(`${this.state.baseUrl}/posts/filter?text=${text}`)
        .then(response => {
          console.log(response);
          this.setState({ posts: response.data });
        })
        .catch(error => console.error(error));
    } else {
      axios
        .get(`${this.state.baseUrl}/posts`)
        .then(response => {
          console.log(response);
          this.setState({ posts: response.data });
        })
        .catch(error => console.error(error));
    }
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="App__parent">
        <Header search={this.searchHandler} />

        <section className="App__content">
          <Compose createPostFn={this.createPost} />
          {posts.map(post => {
            return (
              <Post
                id={post.id}
                key={post.id}
                text={post.text}
                date={post.date}
                updatePostFn={this.updatePost}
                deletePostFn={this.deletePost}
              />
            );
          })}
        </section>
      </div>
    );
  }
}

export default App;
