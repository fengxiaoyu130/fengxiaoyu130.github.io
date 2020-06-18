module.exports = {
  "title": "xiaoyu",
  "description": "欢迎来到小渝的blog~",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/fengxiaoyu130",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "friendLink": [
	  {
        "title": "VuPress",
        "desc": "学习VuePress官方配置文档",
        "email": "1247656916@qq.com",
        "link": "https://vuepress.vuejs.org/zh/" 
      },
	    {
        "title": "matlab",
        "desc": "学习matlab官方配置文档",
        "email": "1247656916@qq.com",
        "link": "https://www.mathworks.com" 
      },
	  {
        "title": "云应用系统开发技术",
        "desc": "电子书《云应用系统开发技术》",
        "link": "https://cloudappdev.netlify.app/"
      },
    ],
	"logo": "/logo_trans.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "Xiao Yu ",
    "authorAvatar": "/avatar.png",

    //"record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": false
  }
}