import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Comments from "./Comments";
import PostDetailed from "../components/PostDetailed";

const PostDetailedView = ({ post, handleClosing }) => (
  <Form striped bordered hover>
    <PostDetailed post={post} />
    <Comments />
    <Button variant="primary" type="submit" onClick={handleClosing}>
      Close
    </Button>
  </Form>
);

export default PostDetailedView;
