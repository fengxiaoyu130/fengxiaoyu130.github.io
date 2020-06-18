---
title: VuePress从零开始搭建专属博客
date: 2020-06-17
tags:
 - VuePress
 - Blog
categories:
 - other
---

# VuePress从零开始搭建专属博客

## VuePress是什么？

VuePress是以Vue驱动的静态网站生成器，是一个由Vue、Vue Router和webpack驱动的单页应用。在VuePress中，你可以使用Markdown编写文档，然后生成网页，每一个由VuePress生成的页面都带有预渲染好的HTML，也因此具有非常好的加载性能和搜索引擎优化。同时，一旦页面被加载，Vue将接管这些静态内容，并将其转换成一个完整的单页应用，其他的页面则会只在用户浏览到的时候才按需加载。

详情请看[VuePress官方文档](https://vuepress.vuejs.org/zh/)

与传统动态网站（如 WordPress）相比，静态网站生成器的主要优势体现在：

- **响应速度快，资源占用率低。**
  
- **安全性、易维护性高。**
  
- **易于管理和备份，自动化。**

Markdown 编辑器的选择很多，在 Windows 上可以考虑以下几个,(个人建议选择Typora)：

1. **Typora** （网址是 <https://typora.io/>）
   它是闭源的商业软件，在 Beta 阶段都将是免费的。它的特点是所见即所得，且在功能上没有限制，功能强大丰富，甚至可以用来作图（网址是<http://support.typora.io/Draw-Diagrams-With-Markdown/>）。它支持简体中文界面语言，在帮助菜单里面（Help | Markdown Reference）还带有 Markdown 的语法参考的英文文档。
   
2. **Visual Studio Code** （网址是 <https://code.visualstudio.com/>）
   它是微软为软件开发人员推出的代码编辑器，功能强大复杂，可作为多种语言的集成开发环境。开源免费，跨平台。如果您是开发人员，可以考虑它，既可以用来开发程序，又可以编写文档。
   
3. **MarkdownPad** （网址是 <http://www.markdownpad.com/>）
   它是闭源的商业软件，免费版有一些功能限制。它是分左右两栏的编辑器，左边是可编辑的 Markdown 源文件，右边是实时的网页预览。注：此软件自2013年3月份后，已经多年没有更新了。



近年来，静态网站生成器成了动态网站的替代方案，特别受到开发人员的欢迎。人们用它来制作博客（Blog）、写 文档和电子书、发布个人简历等用途。静态网站生成器工具软件有很多，从其功能和易用性考虑，VuePress 是新秀。VuePress 本来的设计初衷是编写软件的文档，但自 V0.x 起有许多用户用它来建博客，因此在 V1.x 版本中，官方发布了支持博客的插件，满足了这部分用户的使用需求。 



## VuePress特性

- 为技术文档而优化的内置Markdown拓展

- 在Markdown文件中使用Vue组件的能力

- Vue驱动的自定义主题系统

- 自动生成Service Worker(支持PWA)

- Google Analytics集成

- 基于Git的”最后更新时间”

- 多语言支持

- 响应式布局

  

## 搭建博客网站

### 安装 VuePress

1.安装程序 node.js 或者 Yarn。VuePress支持使用Yarn和npm来安装，Node.js版本需要>=8才可以。

此处选择熟悉的工具即可，本人这里用的是npm。

2.打开cmd，在控制台输入以下代码：

#### 全局安装VuePress

参照 VuePress 的官方文档，[安装 VuePress](https://vuepress.vuejs.org/zh/) ：

```shell
# Install vuepress.
npm install -g vuepress 或者 #yarn global add vuepress
```

新打开一个命令行窗口，检查一下版本：

```shell
vuepress --version
```

#### 创建新目录

```shell
mkdir project
cd project
```

#### 初始化项目

```shell
npm init -y 或者 # yarn init -y
```

#### 在package.json 里加脚本

```shell
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
    /* docs:dev 键值可以自定义修改，此处是为了和一些项目中默认脚本中自带的 dev 区分开。
    如果修改了这个doc:dev 为 mydev，那么下面执行vuepress dev docs的命令就变成了npm run mydev
    npm run mydev 等于在该项目的根目录下执行vuepress dev doc
    vuepress dev doc 做的就是调用安装的vuepress去根据你目录中的.vuepress配置项和docs下的所有.md/。html文件做一个项目的编译和打包
    docs:build 同理 */
  }
}
```

然后就可以开始写作了:

```shell
npm run docs:dev 或者 #yarn docs:dev

```

要生成静态的 HTML 文件，运行：

```shell
npm run docs:build 或者 #yarn docs:build
```

默认情况下，文件将会被生成在 `.vuepress/dist`，当然，你也可以通过 `.vuepress/config.js`中的 `dest` 字段来修改，生成的文件可以部署到任意的静态文件服务器上.

不习惯命令行输入的也可以直接依靠windows可视化操作建立如下工程目录。

```shell
project
├─── docs
│   ├── README.md
└── package.json
```

在README.md中输入一些内容，在package.json中注入脚本命令。并将命令挂载到webstorm的命令配置处。
然后点击运行run dev ，run build 来自动生成.vuepress文件夹

![](asset/1.png)

```shell
project
├─── docs
│   ├── README.md
│   └── .vuepress
│       ├── dist
│       ├── public
│       └── config.js
└── package.json
```

不管使用哪种方式，最终的项目结构应该和上面一样。

- docs文件夹是你的根目录，也是vuepress要去解析的文件夹，
- docs下的README.md可以理解为首页页面。
- docs下的.vuepress是一些配置文件，这里可以存放图片等静态资源，一些主题配置，自定义组件等等

至此，一个基于docs文件夹下的README.md文件 生成的页面 就制作完成了。

### config.js基本配置

```shell
module.exports = {
    title: 'xiaoyu', // 页签标题 
    description: '欢迎来到小渝的blog~'
    // 注入到当前页面的 HTML <head> 中的标签
    "dest": "public",
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录 
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/img/geass-bg.ico' }], 
    ],
    base: '/xxxxxx/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块不显示行号
    },
 }
```



**注意事项**

- 和**图标/图片**等静态资源相关的 其 '/' 默认指向的是 **docs/.vuepress/public/**

- 侧边栏/导航栏指向.md文件的需要**先建立相关.md文件**，不然会报404或者页面空白

  

**特别说明** 

博客文章即 Markdown 文档。例如，其他类（other）的文章之一：《利用 VuePress 搭建博客网站》，放在 `docs\views\other\guide\`文件夹中。此文章的文件命名为 `README.md`，它将作为`http://localhost:8080/views/other/guide/`的首页。关于图片文件的引用，有一个小技巧。

1. 在 `docs\.vuepress\public\views\` 和 `docs\views\` 中建立同样的目录结构。其中前者是 VuePress 要求存放图片文件的地方，后者是 Markdown 博客文章 Markdown 文件的存放地方。
2. 为了让 Typora 编辑器打开 Markdown 文件时能够显示图片，同时又能让图片文件位于 VuePress 所要求的文件夹，我们需要在 Markdown 文件所在的文件夹中，建立一个目录连接（Directory Junction），让它指向 VuePress 要求的文件夹中（那里存放着图片文件）。

举个例子， `docs\.vuepress\public\views\other\guide\asset\` 中，存放了几张图片文件。在 Markdown 文件`README.md` 所处的文件夹 `docs\views\other\guide\`中，我们建立了一个 `asset` 目录链接，它以相对路径的方式指向了`docs\.vuepress\public\views\other\guide\asset\`。

```shell
REM We would like to create a directory junction "asset" from:
REM docs\views\other\guide\
REM to: 
REM docs\.vuepress\public\views\other\guide\asset\

REM First, check if the relative path is correct:
CD /D docs\views\other\guide\
DIR ..\..\..\.vuepress\public\views\other\guide\asset

REM Then, run the command to create the directory junction:
MKLINK /J asset ..\..\..\.vuepress\public\views\other\guide\asset
```

另外，为了避免将目录链接里面的文件重复加入到 Git 的版本控制，我们需要在 `.gitignore` 中，添加一条设置，忽略建立的目录链接。例如：

```
# ignore directory junctions.
/docs/views/other/guide/asset/
```



打开本地服务，一边用 Typora 编辑 Markdown 文章，一边用浏览器（http://localhost:8080）看效果。每次保存 Markdown 文件，浏览器的结果会自动更新（不需要手动刷新），非常方便快捷。

```shell
# 打开本地服务
# Or: vuepress dev docs
yarn dev
```

本地开发满意后，在 GitHub （也可以是 GitLab等类似的版本控制托管服务）中建立一个代码库，将本地代码提交到代码库中。



## 发布到 Netlify

发布到 [Netlify.com](https://www.netlify.com)，只需要简单几步：

1. 注册 Netlify 的账号并登录，需要提供一个电子邮件。
2. 新建一个项目，在设置里面填入 GitHub 代码库的链接，填写构建的命令和输出文件夹。
   ![](asset/netlify_build_settings.png)
   按“Deploy site”按钮，耐心等候5分钟左右时间，让构建流程正常结束。
3. 构建成功后，设置定制的域名。
   ![](asset/netlify_custom_domains.png)
   例如这里，我设置了定制的域名“bobyuan”，于是可以这样访问此博客网站：
   <https://bobyuan.netlify.com/>
   
4. 【可选】每次提交到 GitHub，Netlify 将自动构建并发布网站。为了了解构建状态，在首页（README.md）中添加一个“status badge”。
   ![](asset/netlify_status_badge.png)

## 小结

本文简明扼要地给出了基于 VuePress 搭建个人博客网站的全过程，有些技术细节没有提及，读者应该也是技术人员，相信您有能力自行探索或调整。希望本文对您有所帮助。

