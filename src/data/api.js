import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

const postsPath = `${baseUrl}/posts`;
const commentsPath = `${baseUrl}/comments`;
const postCommentsPath = postId => `${commentsPath}?postId=${postId}`;
const usersPath = `${baseUrl}/users`;
const albumsPath = `${baseUrl}/albums`;
const photosPath = `${baseUrl}/photos`;
const todosPath = `${baseUrl}/todos`;
const userAlbumsPath = userId => `${albumsPath}?userId=${userId}`;
const userPostsPath = userId => `${postsPath}?userId=${userId}`;
const userTodosPath = userId => `${todosPath}?userId=${userId}`;
const albumPhotosPath = albumId => `${photosPath}?albumId=${albumId}`;

export default {
  posts: {
    list: () => axios(postsPath),
    ofUser: userId => axios(userPostsPath(userId))
  },
  comments: {
    list: () => axios(commentsPath),
    ofPost: postId => axios(postCommentsPath(postId))
  },
  users: {
    list: () => axios(usersPath)
  },
  albums: {
    list: () => axios(albumsPath),
    ofUser: userId => axios(userAlbumsPath(userId))
  },
  photos: {
    list: () => axios(photosPath),
    ofAlbum: albumId => axios(albumPhotosPath(albumId))
  },
  todos: {
    list: () => axios(todosPath),
    ofUser: userId => axios(userTodosPath(userId))
  }
};
