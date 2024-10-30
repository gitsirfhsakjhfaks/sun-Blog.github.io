var posts=["技术与编程/hello-world/","实验室/f2/","实验室/实验室/","技术与编程/test/","技术与编程/tech/","生活日常/life/"];function toRandomPost(){
    pjax.loadUrl('/sun-Blog.github.io/'+posts[Math.floor(Math.random() * posts.length)]);
  };