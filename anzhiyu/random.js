var posts=["uncategorized/hello-world/","生活日常/life/","技术与编程/tech/","实验室/实验室/","实验室/f2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };