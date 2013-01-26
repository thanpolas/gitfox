var fixtures = {};

fixtures.myRepos = [
  {
    "id": 1296269,
    "owner": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/octocat"
    },
    "name": "Hello-World",
    "full_name": "octocat/Hello-World",
    "description": "This your first repo!",
    "private": false,
    "fork": false,
    "url": "https://api.github.com/repos/octocat/Hello-World",
    "html_url": "https://github.com/octocat/Hello-World"
  },

  {
    "id": 1296279,
    "owner": {
      "login": "octocat",
      "id": 1,
      "avatar_url": "https://github.com/images/error/octocat_happy.gif",
      "gravatar_id": "somehexcode",
      "url": "https://api.github.com/users/octocat"
    },
    "name": "Hello-World-two",
    "full_name": "octocat/Hello-World-two",
    "description": "This your second repo!",
    "private": false,
    "fork": true,
    "url": "https://api.github.com/repos/octocat/Hello-World-two",
    "html_url": "https://github.com/octocat/Hello-World-two"
  }
];


fixtures.repoContents = [
  {
    "url": "https://api.github.com/repos/thanpolas/gitfox/contents/.gitmodules",
    "type": "file",
    "sha": "7e11608ebc7aab425cf3b54b32a578e389d81b82",
    "path": ".gitmodules",
    "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/7e11608ebc7aab425cf3b54b32a578e389d81b82",
    "size": null,
    "name": ".gitmodules",
    "_links": {
      "self": "https://api.github.com/repos/thanpolas/gitfox/contents/.gitmodules",
      "html": "https://github.com/thanpolas/gitfox/blob/master/.gitmodules",
      "git": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/7e11608ebc7aab425cf3b54b32a578e389d81b82"
    },
    "html_url": "https://github.com/thanpolas/gitfox/blob/master/.gitmodules"
  },
  {
    "url": "https://api.github.com/repos/thanpolas/gitfox/contents/.jshintrc",
    "type": "file",
    "sha": "4fa7a1f894c8f1a374f2183938009a4d171d5386",
    "path": ".jshintrc",
    "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/4fa7a1f894c8f1a374f2183938009a4d171d5386",
    "size": null,
    "name": ".jshintrc",
    "_links": {
      "self": "https://api.github.com/repos/thanpolas/gitfox/contents/.jshintrc",
      "html": "https://github.com/thanpolas/gitfox/blob/master/.jshintrc",
      "git": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/4fa7a1f894c8f1a374f2183938009a4d171d5386"
    },
    "html_url": "https://github.com/thanpolas/gitfox/blob/master/.jshintrc"
  },
  {
    "url": "https://api.github.com/repos/thanpolas/gitfox/contents/LICENSE-MIT",
    "type": "file",
    "sha": "cac679d6055ae113bec19112211753a3bc4f2489",
    "path": "LICENSE-MIT",
    "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/cac679d6055ae113bec19112211753a3bc4f2489",
    "size": null,
    "name": "LICENSE-MIT",
    "_links": {
      "self": "https://api.github.com/repos/thanpolas/gitfox/contents/LICENSE-MIT",
      "html": "https://github.com/thanpolas/gitfox/blob/master/LICENSE-MIT",
      "git": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/cac679d6055ae113bec19112211753a3bc4f2489"
    },
    "html_url": "https://github.com/thanpolas/gitfox/blob/master/LICENSE-MIT"
  },
  {
    "url": "https://api.github.com/repos/thanpolas/gitfox/contents/README.md",
    "type": "file",
    "sha": "40b0991f9b31754adc60b07993ca3c9b20c4f50d",
    "path": "README.md",
    "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/40b0991f9b31754adc60b07993ca3c9b20c4f50d",
    "size": null,
    "name": "README.md",
    "_links": {
      "self": "https://api.github.com/repos/thanpolas/gitfox/contents/README.md",
      "html": "https://github.com/thanpolas/gitfox/blob/master/README.md",
      "git": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/40b0991f9b31754adc60b07993ca3c9b20c4f50d"
    },
    "html_url": "https://github.com/thanpolas/gitfox/blob/master/README.md"
  },
  {
    "url": "https://api.github.com/repos/thanpolas/gitfox/contents/app",
    "type": "dir",
    "sha": "f2a1daf1b3eb4413a8ed1660eaf214555f4d2538",
    "path": "app",
    "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/trees/f2a1daf1b3eb4413a8ed1660eaf214555f4d2538",
    "size": null,
    "name": "app",
    "_links": {
      "self": "https://api.github.com/repos/thanpolas/gitfox/contents/app",
      "html": "https://github.com/thanpolas/gitfox/tree/master/app",
      "git": "https://api.github.com/repos/thanpolas/gitfox/git/trees/f2a1daf1b3eb4413a8ed1660eaf214555f4d2538"
    },
    "html_url": "https://github.com/thanpolas/gitfox/tree/master/app"
  },
  {
    "url": "https://api.github.com/repos/thanpolas/gitfox/contents/grunt.js",
    "type": "file",
    "sha": "9878729f3819152eb7e2888baaf811655f4ba088",
    "path": "grunt.js",
    "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/9878729f3819152eb7e2888baaf811655f4ba088",
    "size": null,
    "name": "grunt.js",
    "_links": {
      "self": "https://api.github.com/repos/thanpolas/gitfox/contents/grunt.js",
      "html": "https://github.com/thanpolas/gitfox/blob/master/grunt.js",
      "git": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/9878729f3819152eb7e2888baaf811655f4ba088"
    },
    "html_url": "https://github.com/thanpolas/gitfox/blob/master/grunt.js"
  },
  {
    "url": "https://api.github.com/repos/thanpolas/gitfox/contents/manifest.json",
    "type": "file",
    "sha": "6e9949c2464f8b47fe79a95484b85b99ba704339",
    "path": "manifest.json",
    "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/6e9949c2464f8b47fe79a95484b85b99ba704339",
    "size": null,
    "name": "manifest.json",
    "_links": {
      "self": "https://api.github.com/repos/thanpolas/gitfox/contents/manifest.json",
      "html": "https://github.com/thanpolas/gitfox/blob/master/manifest.json",
      "git": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/6e9949c2464f8b47fe79a95484b85b99ba704339"
    },
    "html_url": "https://github.com/thanpolas/gitfox/blob/master/manifest.json"
  },
  {
    "url": "https://api.github.com/repos/thanpolas/gitfox/contents/package.json",
    "type": "file",
    "sha": "ba55b817036098d246af1b7c266f2701012bcb3b",
    "path": "package.json",
    "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/ba55b817036098d246af1b7c266f2701012bcb3b",
    "size": null,
    "name": "package.json",
    "_links": {
      "self": "https://api.github.com/repos/thanpolas/gitfox/contents/package.json",
      "html": "https://github.com/thanpolas/gitfox/blob/master/package.json",
      "git": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/ba55b817036098d246af1b7c266f2701012bcb3b"
    },
    "html_url": "https://github.com/thanpolas/gitfox/blob/master/package.json"
  }
];


fixtures.repoContentsSubfolder = [
  {
    "url": "https://api.github.com/repos/thanpolas/gitfox/contents/app/assets",
    "type": "dir",
    "sha": "fc8c88222f43d951100549bd3d130b4f5797ef85",
    "_links": {
      "self": "https://api.github.com/repos/thanpolas/gitfox/contents/app/assets",
      "html": "https://github.com/thanpolas/gitfox/tree/master/app/assets",
      "git": "https://api.github.com/repos/thanpolas/gitfox/git/trees/fc8c88222f43d951100549bd3d130b4f5797ef85"
    },
    "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/trees/fc8c88222f43d951100549bd3d130b4f5797ef85",
    "path": "app/assets",
    "size": 0,
    "html_url": "https://github.com/thanpolas/gitfox/tree/master/app/assets",
    "name": "assets"
  },
  {
    "url": "https://api.github.com/repos/thanpolas/gitfox/contents/app/index.html",
    "type": "file",
    "sha": "97b96a51d3cf9e48b13b02e48efaa4cf812f754e",
    "_links": {
      "self": "https://api.github.com/repos/thanpolas/gitfox/contents/app/index.html",
      "html": "https://github.com/thanpolas/gitfox/blob/master/app/index.html",
      "git": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/97b96a51d3cf9e48b13b02e48efaa4cf812f754e"
    },
    "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/97b96a51d3cf9e48b13b02e48efaa4cf812f754e",
    "path": "app/index.html",
    "size": 1496,
    "html_url": "https://github.com/thanpolas/gitfox/blob/master/app/index.html",
    "name": "index.html"
  },
  {
    "url": "https://api.github.com/repos/thanpolas/gitfox/contents/app/partials",
    "type": "dir",
    "sha": "8a772e777de4c5ab4940556f6a7a0df3c4ef73a5",
    "_links": {
      "self": "https://api.github.com/repos/thanpolas/gitfox/contents/app/partials",
      "html": "https://github.com/thanpolas/gitfox/tree/master/app/partials",
      "git": "https://api.github.com/repos/thanpolas/gitfox/git/trees/8a772e777de4c5ab4940556f6a7a0df3c4ef73a5"
    },
    "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/trees/8a772e777de4c5ab4940556f6a7a0df3c4ef73a5",
    "path": "app/partials",
    "size": 0,
    "html_url": "https://github.com/thanpolas/gitfox/tree/master/app/partials",
    "name": "partials"
  }
];

fixtures.repoContentsFile = {
  "url": "https://api.github.com/repos/thanpolas/gitfox/contents/grunt.js",
  "type": "file",
  "sha": "9878729f3819152eb7e2888baaf811655f4ba088",
  "path": "grunt.js",
  "encoding": "base64",
  "content": "LypnbG9iYWwgbW9kdWxlOmZhbHNlKi8KbW9kdWxlLmV4cG9ydHMgPSBmdW5j\ndGlvbihncnVudCkgewoKICAvLyBQcm9qZWN0IGNvbmZpZ3VyYXRpb24uCiAg\nZ3J1bnQuaW5pdENvbmZpZyh7CiAgICBwa2c6ICc8anNvbjptaXRocmlvbi5q\ncXVlcnkuanNvbj4nLAogICAgbWV0YTogewogICAgICBiYW5uZXI6ICcvKiEg\nPCU9IHBrZy50aXRsZSB8fCBwa2cubmFtZSAlPiAtIHY8JT0gcGtnLnZlcnNp\nb24gJT4gLSAnICsKICAgICAgICAnPCU9IGdydW50LnRlbXBsYXRlLnRvZGF5\nKCJ5eXl5LW1tLWRkIikgJT5cbicgKwogICAgICAgICc8JT0gcGtnLmhvbWVw\nYWdlID8gIiogIiArIHBrZy5ob21lcGFnZSArICJcbiIgOiAiIiAlPicgKwog\nICAgICAgICcqIENvcHlyaWdodCAoYykgPCU9IGdydW50LnRlbXBsYXRlLnRv\nZGF5KCJ5eXl5IikgJT4gPCU9IHBrZy5hdXRob3IubmFtZSAlPjsnICsKICAg\nICAgICAnIExpY2Vuc2VkIDwlPSBfLnBsdWNrKHBrZy5saWNlbnNlcywgInR5\ncGUiKS5qb2luKCIsICIpICU+ICovJwogICAgfSwKICAgIGNvbmNhdDogewog\nICAgICBkaXN0OiB7CiAgICAgICAgc3JjOiBbJzxiYW5uZXI6bWV0YS5iYW5u\nZXI+JywgJzxmaWxlX3N0cmlwX2Jhbm5lcjpzcmMvPCU9IHBrZy5uYW1lICU+\nLmpzPiddLAogICAgICAgIGRlc3Q6ICdkaXN0LzwlPSBwa2cubmFtZSAlPi5q\ncycKICAgICAgfQogICAgfSwKICAgIG1pbjogewogICAgICBkaXN0OiB7CiAg\nICAgICAgc3JjOiBbJzxiYW5uZXI6bWV0YS5iYW5uZXI+JywgJzxjb25maWc6\nY29uY2F0LmRpc3QuZGVzdD4nXSwKICAgICAgICBkZXN0OiAnZGlzdC88JT0g\ncGtnLm5hbWUgJT4ubWluLmpzJwogICAgICB9CiAgICB9LAogICAgcXVuaXQ6\nIHsKICAgICAgZmlsZXM6IFsndGVzdC8qKi8qLmh0bWwnXQogICAgfSwKICAg\nIGxpbnQ6IHsKICAgICAgZmlsZXM6IFsnZ3J1bnQuanMnLCAnc3JjLyoqLyou\nanMnLCAndGVzdC8qKi8qLmpzJ10KICAgIH0sCiAgICB3YXRjaDogewogICAg\nICBmaWxlczogJzxjb25maWc6bGludC5maWxlcz4nLAogICAgICB0YXNrczog\nJ2xpbnQgcXVuaXQnCiAgICB9LAogICAganNoaW50OiB7CiAgICAgIG9wdGlv\nbnM6IHsKICAgICAgICBjdXJseTogdHJ1ZSwKICAgICAgICBlcWVxZXE6IHRy\ndWUsCiAgICAgICAgaW1tZWQ6IHRydWUsCiAgICAgICAgbGF0ZWRlZjogdHJ1\nZSwKICAgICAgICBuZXdjYXA6IHRydWUsCiAgICAgICAgbm9hcmc6IHRydWUs\nCiAgICAgICAgc3ViOiB0cnVlLAogICAgICAgIHVuZGVmOiB0cnVlLAogICAg\nICAgIGJvc3M6IHRydWUsCiAgICAgICAgZXFudWxsOiB0cnVlLAogICAgICAg\nIGJyb3dzZXI6IHRydWUKICAgICAgfSwKICAgICAgZ2xvYmFsczogewogICAg\nICAgIGpRdWVyeTogdHJ1ZQogICAgICB9CiAgICB9LAogICAgdWdsaWZ5OiB7\nfQogIH0pOwoKICAvLyBEZWZhdWx0IHRhc2suCiAgZ3J1bnQucmVnaXN0ZXJU\nYXNrKCdkZWZhdWx0JywgJ2xpbnQgcXVuaXQgY29uY2F0IG1pbicpOwoKfTsK\n",
  "size": 1485,
  "_links": {
    "self": "https://api.github.com/repos/thanpolas/gitfox/contents/grunt.js",
    "html": "https://github.com/thanpolas/gitfox/blob/master/grunt.js",
    "git": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/9878729f3819152eb7e2888baaf811655f4ba088"
  },
  "git_url": "https://api.github.com/repos/thanpolas/gitfox/git/blobs/9878729f3819152eb7e2888baaf811655f4ba088",
  "name": "grunt.js",
  "html_url": "https://github.com/thanpolas/gitfox/blob/master/grunt.js"
};
