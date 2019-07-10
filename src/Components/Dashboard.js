import React from "react";
import { connect } from "react-redux";
import { getPosts, getSearch } from "../redux/reducer";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import Axios from "axios";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      search: ""
    };
  }
  componentDidMount() {
    this.getAllPosts();
    this.handleClick()
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
      //e accesses info about the event.
      // Target targets the element that triggered the event(the same input field or button).
      // Placeholder accesses the placeholder name from the element.
      // toLowerCase() invoked matches the placeholder to the lowercase variables.
    });
    // console.log(e.target.value)
  };

  handleClick = e => {
      Axios.get(`/posts?title=${this.state.search}`).then(response => {
          this.props.getSearch(response.data)
          this.setState({posts: response.data})
      })
  }

  getAllPosts = e => {
    Axios.get("/posts").then(response => {
      this.props.getPosts(response.data);
      //   console.log(response.data)
      //   this.setState({posts: response.data})
    });
  };

  render() {
    console.log(this.props.posts);
    let displayPosts = this.props.posts.map(post => {
        return (
      <Card key={post.post_id} style={{"maxWidth": "50vw"}}>
        <CardImg
          top
          width="100%"
          src={post.image_url}
          alt="Goober"
        />
        <CardBody>
          <CardTitle>{post.username}</CardTitle>
          <CardSubtitle>{post.post_title}</CardSubtitle>
          <CardText>{post.post_text}</CardText>
        </CardBody>
      </Card>);
    });
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Welcome {this.props.username}</p>
        <input name="search" placeholder="Search by title" onChange={this.handleChange}/>
        <button onClick={this.handleClick} name="" >Search</button>
        <div>{displayPosts}</div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(
  mapStateToProps,
  { getPosts, getSearch }
)(Dashboard);
