import{_ as a,c as p,o as n,aj as e,aN as i,aO as t,aP as l,aQ as o,aR as c,aS as r,aT as d,aU as h,aV as g,aW as k,aX as m,aY as u,aZ as b}from"./chunks/framework.FdnCNVXu.js";const V=JSON.parse('{"title":"vitepress部署流程","description":"","frontmatter":{},"headers":[],"relativePath":"vitepress/vitepress.md","filePath":"vitepress/vitepress.md","lastUpdated":0}'),v={name:"vitepress/vitepress.md"};function f(_,s,x,y,q,C){return n(),p("div",null,[...s[0]||(s[0]=[e('<h1 id="vitepress部署流程" tabindex="-1">vitepress部署流程 <a class="header-anchor" href="#vitepress部署流程" aria-label="Permalink to “vitepress部署流程”">​</a></h1><blockquote><p>为了养成良好的笔记习惯，在学习之前先部署自己的博客系统，以下以vitepress的部署为例</p></blockquote><blockquote><p>vitepress官方文档地址<a href="https://" target="_blank" rel="noreferrer">https://vitepress.dev/zh/</a></p></blockquote><h2 id="一、安装" tabindex="-1">一、安装 <a class="header-anchor" href="#一、安装" aria-label="Permalink to “一、安装”">​</a></h2><p><strong>安装使用前应有以下环境：</strong></p><ul><li><p>==安装前==</p><blockquote><p>应已配置Node.js 18 及以上版本。 下载好vscode，并打开终端</p><p><img src="'+i+'" alt="截图"></p><p><img src="'+t+'" alt="截图"></p><p><img src="'+l+'" alt="截图"></p><br></blockquote></li><li><p>==使用前==需支持 Markdown 语法的编辑器，推荐 VSCode 及其官方 Vue 扩展</p><hr></li></ul><ol><li><p>安装命令</p><p>vitepress可以安装在现有项目中，作为开发文档或者官方文档，也可以单独作为独立项目使用</p><p>vitepress的安装命令为</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npm add -D vitepress@next</span></span></code></pre></div><p><img src="'+o+'" alt="截图"></p><p>若作为独立基础项目使用，还应该运行构建命令</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>npx vitepress init</span></span></code></pre></div></li></ol><p><img src="'+c+`" alt="截图"> 将需要回答几个简单的问题：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>┌  Welcome to VitePress!</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Where should VitePress initialize the config?</span></span>
<span class="line"><span>│  ./docs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Where should VitePress look for your markdown files?</span></span>
<span class="line"><span>│  ./docs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site title:</span></span>
<span class="line"><span>│  My Awesome Project</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Site description:</span></span>
<span class="line"><span>│  A VitePress Site</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Theme:</span></span>
<span class="line"><span>│  Default Theme</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Use TypeScript for config and theme files?</span></span>
<span class="line"><span>│  Yes</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Add VitePress npm scripts to package.json?</span></span>
<span class="line"><span>│  Yes</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Add a prefix for VitePress npm scripts?</span></span>
<span class="line"><span>│  Yes</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>◇  Prefix for VitePress npm scripts:</span></span>
<span class="line"><span>│  docs</span></span>
<span class="line"><span>│</span></span>
<span class="line"><span>└  Done! Now run pnpm run docs:dev and start writing.</span></span></code></pre></div><blockquote><p>==tips：==</p><ul><li><p>./docs就是vitepress项目中你用来存放平时笔记以及vitepress基础配置的地方，你也可以起其他名字。</p></li><li><p>./的意思是当前文件夹，../的意思是当前文件夹的上一层文件夹</p></li></ul></blockquote><br><h2 id="二、项目的启动运行" tabindex="-1">二、项目的启动运行 <a class="header-anchor" href="#二、项目的启动运行" aria-label="Permalink to “二、项目的启动运行”">​</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>项目启动命令：npm run docs:dev</span></span></code></pre></div><p><img src="`+r+'" alt="截图"></p><br><p><img src="'+d+`" alt="截图"></p><br><p>这个网址就是项目在本地跑起来的地址==按住ctrl+鼠标左键点击==即可直接打开</p><br><p>这个时候我们来看一下目录结构</p><p>目录结构如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js            //vitepress配置文件       </span></span>
<span class="line"><span>│  ├─ api-examples.md         //vitepress相关配置教程</span></span>
<span class="line"><span>│  ├─ markdown-examples.md    //markdown语法使用教程</span></span>
<span class="line"><span>│  └─ index.md                //网站首页，入口文件</span></span>
<span class="line"><span>└─ package.json               //npm脚本命令配置，用来写启动命令，默认已有</span></span></code></pre></div><p>==docs：==</p><blockquote><p>.md文件</p></blockquote><p>可以看到docs文件夹内有三个.md结尾的文件，每个 .md 文件将在相同的路径被编译成为 .html 文件，意思就是你写在docs文件夹里的每一个以.md结尾的文件都会在打包后成为一个单独的页面，而你一整个项目相当于一个网站，这三个单独页面就是一个网站里的三个页面。比如说上面的目录结构中，docs文件夹下有三个以.md结尾的文件，所以在<code>http://localhost:5174/</code>这个网址内，有三个对应的网址：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>http://localhost:5174/index              ========&gt;         对应的是index.md</span></span>
<span class="line"><span>http://localhost:5174/api-examples       ========&gt;         对应的是api-examples.md</span></span>
<span class="line"><span>http://localhost:5174/markdown-examples  ========&gt;         对应的是markdown-examples.md</span></span></code></pre></div><blockquote><p>.vitepress/config.js文件</p></blockquote><p>这个config即vitepress的配置文件，比如设置网站的title、网站的导航、网站的脚标等，修饰细节自己摸索美化。</p><p><img src="`+h+`" alt="截图"></p><p>==package.json：==</p><p>中有三个已经配置项好的东西：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>{</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;docs:dev&quot;: &quot;vitepress dev docs&quot;,</span><span>           //项目启动命令，把项目/软件跑起来</span></span>
<span class="line"><span>    &quot;docs:build&quot;: &quot;vitepress build docs&quot;,</span><span>       //项目打包命令，把整个写好的东西打包成可以用来部署的东西</span></span>
<span class="line"><span>    &quot;docs:preview&quot;: &quot;vitepress preview docs&quot;</span><span>    //项目预览命令，预览你打包好的东西</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  ...</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>这三个东西只要知道是什东西即可，我们怎么去运行这个命令呢</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span>项目启动命令：npm run docs:dev</span></span>
<span class="line"><span>项目打包命令：npm run docs:build</span></span>
<span class="line"><span>项目预览命令：npm run docs:preview</span></span></code></pre></div><h2 id="三、项目的打包" tabindex="-1">三、项目的打包 <a class="header-anchor" href="#三、项目的打包" aria-label="Permalink to “三、项目的打包”">​</a></h2><p>上面讲到，项目的打包命令是<code>npm run docs:build</code></p><p>现在我们运行一下这个命令看发生了什么：</p><p><img src="`+g+'" alt="截图"></p><p>运行结束后我们可以看到成功提示<code>build complete</code>，同时，在docs文件夹下的.vitepress下，多了一个dist文件夹，这就是项目打包后的结果</p><p><img src="'+k+'" alt="截图"></p><p>而这个dist文件夹内的打包结果具体是什么样的呢？</p><p><img src="'+m+'" alt="截图"></p><p>我们可以看到，我们在项目中存在的三个以.md结尾的文件都变成了后缀为.html的文件，这就是前面我们说的一个.md对应一个单独的页面。</p><p>其他的内容则是vitepress这个项目帮你自带的一些处理，比如访问一个不存在的页面，给你自动跳转到404.html。这些你们暂时都不需要非常清楚。</p><p>现在你知道了，把一个.md文件写在docs文件夹里可以生成一个页面，那如果是在dos文件夹里创建一个文件夹，再写一个.md文件呢，会得到什么</p><p><img src="'+u+'" alt="截图"></p><p><img src="'+b+'" alt="截图"></p><p>我们可以惊喜的发现，在<code>http://localhost:5173/test/test</code> 路径下出现了测试页面，我们可以把docs文件夹内的.md文件，文件路径和网页路径对应上，docs文件夹里的test文件夹里的test.md,在网页里是<code>http://localhost:5173/test/test</code></p>',48)])])}const w=a(v,[["render",f]]);export{V as __pageData,w as default};
