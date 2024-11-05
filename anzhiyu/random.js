var posts=["技术与编程/Build/","技术与编程/anzhiyu/","uncategorized/hello-world/","实验室/Laboratory/","技术与编程/environment/","生活日常/life/"];function toRandomPost(){
    pjax.loadUrl('/sun-Blog.github.io/'+posts[Math.floor(Math.random() * posts.length)]);
  };