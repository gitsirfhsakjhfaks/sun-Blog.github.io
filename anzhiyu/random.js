var posts=["实验室/f2/","uncategorized/hello-world/","实验室/实验室/","生活日常/life/","技术与编程/tech/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };