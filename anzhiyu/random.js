var posts=["实验室/f2/","uncategorized/hello-world/","uncategorized/index/","生活日常/life/","技术与编程/tech/","技术与编程/test/","实验室/实验室/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };