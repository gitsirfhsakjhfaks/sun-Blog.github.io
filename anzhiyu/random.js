var posts=["uncategorized/hello-world/","实验室/f2/","实验室/实验室/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };