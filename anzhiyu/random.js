var posts=["实验室/f2/","生活日常/life/","技术与编程/test/","实验室/实验室/","uncategorized/hello-world/","技术与编程/tech/"];function toRandomPost(){
    pjax.loadUrl('/sun-Blog.github.io/'+posts[Math.floor(Math.random() * posts.length)]);
  };