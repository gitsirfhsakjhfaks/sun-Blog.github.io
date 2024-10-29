var posts=["uncategorized/hello-world/","uncategorized/f2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };