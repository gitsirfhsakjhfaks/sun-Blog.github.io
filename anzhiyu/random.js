var posts=["技术与编程/Build/","实验室/Laboratory/","技术与编程/anzhiyu/","uncategorized/hello-world/","技术与编程/environment/","MySQL/mysql/","生活日常/life/","MySQL/mysql1/"];function toRandomPost(){
    pjax.loadUrl('/sun-Blog.github.io/'+posts[Math.floor(Math.random() * posts.length)]);
  };