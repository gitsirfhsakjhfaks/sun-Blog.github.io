var posts=["实验室/f2/","实验室/实验室/","uncategorized/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };