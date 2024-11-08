var posts=["技术与编程/Build/","实验室/Laboratory/","技术与编程/anzhiyu/","技术与编程/environment/","uncategorized/hello-world/","生活日常/life/","MySQL/mysql/","MySQL/mysql1/"];function toRandomPost(){
    pjax.loadUrl('/sun-Blog.github.io/'+posts[Math.floor(Math.random() * posts.length)]);
  };