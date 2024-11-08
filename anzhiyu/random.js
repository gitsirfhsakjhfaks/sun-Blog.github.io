var posts=["技术与编程/anzhiyu/","uncategorized/hello-world/","技术与编程/Build/","生活日常/life/","实验室/Laboratory/","技术与编程/environment/","MySQL/mysql1/","技术与编程/environment2/","MySQL/mysql/"];function toRandomPost(){
    pjax.loadUrl('/sun-Blog.github.io/'+posts[Math.floor(Math.random() * posts.length)]);
  };