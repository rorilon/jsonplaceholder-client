export const getPosts = store => {
  if (getUserId(store) && getSelectedTab(store) === "users")
    return getUserPosts(store);
  else return store.posts.posts;
};
export const getComments = store => {
  if (getPostId(store) && getSelectedTab(store) === "posts")
    return store.post.comments;
  else return store.comments.comments;
};
export const getUsers = store => store.users.users;
export const getAlbums = store => {
  if (getUserId(store) && getSelectedTab(store) === "users")
    return getUserAlbums(store);
  else return store.albums.albums;
};
export const getPhotos = store => {
  if (getAlbumId(store) && getSelectedTab(store) === "albums")
    return store.album.photos;
  else return store.photos.photos;
};
export const getTodos = store => {
  if (getUserId(store) && getSelectedTab(store) === "users")
    return getUserTodos(store);
  else return store.todos.todos;
};

export const getPostId = store => store.post.postId;
export const getUserId = store => store.user.userId;
export const getAlbumId = store => store.album.albumId;

export const getPagination = (store, mode) => {
  if (mode === "todos") return getPaginationTodos(store);
  else if (mode === "comments") return getPaginationComments(store);
  else if (mode === "posts") return getPaginationPosts(store);
  else if (mode === "albums") return getPaginationAlbums(store);
  else if (mode === "photos") return getPaginationPhotos(store);
  else return getPaginationOverview(store);
};
export const getPaginationOverview = store => store.pagination.overview;
export const getPaginationTodos = store => store.pagination.todos;
export const getPaginationComments = store => store.pagination.comments;
export const getPaginationPosts = store => store.pagination.posts;
export const getPaginationAlbums = store => store.pagination.albums;
export const getPaginationPhotos = store => store.pagination.photos;

export const getUserAlbums = store => store.user.albums;
export const getUserPosts = store => store.user.posts;
export const getUserTodos = store => store.user.todos;

export const getSelectedTab = store => store.tabs.selected;

export const isFetchingTodos = store => {
  if (getUserId(store)) return store.user.isFetchingTodos;
  else return store.todos.isFetching;
};
export const isFetchingPosts = store => {
  if (getUserId(store)) return store.user.isFetchingPosts;
  else return store.posts.isFetching;
};
export const isFetchingAlbums = store => {
  if (getUserId(store)) return store.user.isFetchingAlbums;
  else return store.albums.isFetching;
};
export const isFetchingComments = store => {
  if (getPostId(store)) return store.post.isFetchingComments;
  else return store.comments.isFetching;
};
export const isFetchingUsers = store => store.users.isFetching;
export const isFetchingPhotos = store => {
  if (getAlbumId(store)) return store.album.isFetchingPhotos;
  else return store.photos.isFetching;
};
