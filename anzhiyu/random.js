var posts=["uncategorized/hello-world/","实验室/f2/","实验室/实验室/","技术与编程/test/","技术与编程/tech/","生活日常/life/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };