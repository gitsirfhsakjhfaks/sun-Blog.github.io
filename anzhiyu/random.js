var posts=["实验室/f2/","技术与编程/hello-world/","生活日常/life/","实验室/实验室/","技术与编程/test/","技术与编程/tech/"];function toRandomPost(){
    pjax.loadUrl('/sun-Blog.github.io/'+posts[Math.floor(Math.random() * posts.length)]);
  };