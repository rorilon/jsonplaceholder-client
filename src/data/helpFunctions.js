export const getUserById = (users, id) => {
  if (users.length)
    var user = users.find(function(element) {
      if (element.id === id) return element;
    });

  return user;
};

export const getAlbumById = (albums, id) => {
  if (albums.length)
    var album = albums.find(function(element) {
      if (element.id === id) return element;
    });

  return album;
};

export const getPostById = (posts, id) => {
  if (posts.length)
    var post = posts.find(function(element) {
      if (element.id === id) {
        return element;
      }
    });
  return post;
};
