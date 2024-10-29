var posts=["实验室/f2/","技术与编程/tech/","uncategorized/hello-world/","生活日常/life/","实验室/实验室/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };