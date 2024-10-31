var posts=["实验室/Laboratory/","技术与编程/Build/","生活日常/life/","技术与编程/anzhiyu/","uncategorized/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/sun-Blog.github.io/'+posts[Math.floor(Math.random() * posts.length)]);
  };