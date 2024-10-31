var posts=["技术与编程/Build/","技术与编程/anzhiyu/","实验室/Laboratory/","生活日常/life/","uncategorized/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/sun-Blog.github.io/'+posts[Math.floor(Math.random() * posts.length)]);
  };