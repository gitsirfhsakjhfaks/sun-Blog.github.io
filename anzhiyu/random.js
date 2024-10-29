var posts=["2024/10/28/hello-world/","2024/10/29/categories/实验室/实验室/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };