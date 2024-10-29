var posts=["uncategorized/hello-world/","uncategorized/categories/实验室/实验室/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };