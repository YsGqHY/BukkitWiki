import{_ as s,c as n,e as a,o as l}from"./app-CdVTaPkS.js";const e={};function t(h,i){return l(),n("div",null,i[0]||(i[0]=[a(`<h1 id="创建" tabindex="-1"><a class="header-anchor" href="#创建"><span>创建</span></a></h1><h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础"><span>基础</span></a></h2><p>TrMenu 的菜单是以 <strong>YAML</strong> (.yml) 文件格式配置、读取加载的</p><p>因此，创建一个新的菜单，你可以通过新建一个 YAML 文件开始</p><h2 id="路径" tabindex="-1"><a class="header-anchor" href="#路径"><span>路径</span></a></h2><p>菜单文件可以放在默认菜单目录 （menus）中或自定义路径（需要自行配置）</p><p>菜单文件名（不包括拓展名后缀）即是菜单的唯一 ID，</p><p>重复 ID 的菜单仍然会被加载，但会影响开启命令的正常工作</p><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>菜单的配置项将在接下来的章节详细解析</p><p>请先浏览下方所提供的示例模式，快速了解菜单基本结构</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 容器显示的标题</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;TrMenu&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 容器标题刷新的时间</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Title-Update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">40</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 菜单布局</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Layout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 菜单布局 - 玩家容器</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">PlayerInventory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 菜单选项</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Options</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 是否启用参数</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Arguments</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 默认参数填充</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Default-Arguments</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [ ]</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 非上锁槽位</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Free-Slots</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">71</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">72</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 默认页码</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Default-Layout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 是否隐藏玩家容器物品</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Hide-Player-Inventory</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 最小点击延时</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Min-Click-Delay</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">200</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 强制依赖的 PlaceholderAPI 拓展</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Depend-Expansions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [ </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;server&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;player&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;progress&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;animations&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 菜单绑定</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Bindings</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 命令</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Commands</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;(?i)example(-)?(gui)?(s)?&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 物品特征</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Items</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;material:compass&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;material:clock,lore:OPEN_MENU&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDRmNDUyZDk5OGVhYmFjNDY0MmM2YjBmZTVhOGY0ZTJlNjczZWRjYWUyYTZkZmQ5ZTZhMmU4NmU3ODZlZGFjMCJ9fX0=&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 菜单事件反应</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Events</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 开启事件</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Open</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">condition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;perm *trmenu.use&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;sound: BLOCK_CHEST_OPEN-1-0&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      deny</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;sound: ENTITY_ITEM_BREAK-1-0&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;title: \`&amp;c&amp;lPermission Required\` \`&amp;7&amp;lYou need permission &amp;6&amp;ltrmenu.use &amp;7&amp;lto open this menu\` 15 20 15&#39;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;return&#39;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 关闭事件</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Close</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;sound: BLOCK_CHEST_CLOSE-1-0&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 菜单的图标主体</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Icons</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 图标 Id</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  &#39;Close&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    # 显示属性更新频率</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    # 子图标重新计算频率</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    refresh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">-1</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    # 显示部分</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    display</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    # 动作部分</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: []</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 定时任务</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Tasks</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  # 任务 ID</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  tikTok</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    # 任务周期 (in ticks)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    period</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    # 任务反应 (reactions)</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    task</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">condition</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;$ sender.isOp()&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        actions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">          - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;sound: BLOCK_NOTE_BLOCK_BIT-1-2&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"># 内置自定义 JavaScript 函数</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Functions</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;content&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结构" tabindex="-1"><a class="header-anchor" href="#结构"><span>结构</span></a></h3><ul><li>标题 <ul><li>单个或多个标题</li><li>标题更新周期</li></ul></li><li>布局 <ul><li>菜单布局</li><li>玩家容器布局</li></ul></li><li>选项 <ul><li>默认补全参数</li><li>默认布局页码</li><li>是否隐藏玩家容器物品</li><li>自由槽位</li><li>防频繁点击间隔</li><li>需要依赖的 PlaceholderAPI 拓展</li></ul></li><li>绑定 <ul><li>绑定正则命令</li><li>绑定物品特征</li></ul></li><li>事件 <ul><li>开启菜单执行动作</li><li>关闭菜单执行动作</li></ul></li><li>图标</li><li>内置脚本</li><li>周期任务</li></ul><h3 id="菜单国际化-社区版新增" tabindex="-1"><a class="header-anchor" href="#菜单国际化-社区版新增"><span>菜单国际化(社区版新增)</span></a></h3><p>太复杂了，自己去看<a href="https://github.com/Dreeam-qwq/TrMenu/pull/64" target="_blank" rel="noopener noreferrer">TrMenu PR #64</a></p>`,16)]))}const k=s(e,[["render",t],["__file","create.html.vue"]]),d=JSON.parse('{"path":"/plugins/plugins/trmenu/menu/create.html","title":"创建","lang":"zh-CN","frontmatter":{"description":"创建 基础 TrMenu 的菜单是以 YAML (.yml) 文件格式配置、读取加载的 因此，创建一个新的菜单，你可以通过新建一个 YAML 文件开始 路径 菜单文件可以放在默认菜单目录 （menus）中或自定义路径（需要自行配置） 菜单文件名（不包括拓展名后缀）即是菜单的唯一 ID， 重复 ID 的菜单仍然会被加载，但会影响开启命令的正常工作 配置 ...","head":[["meta",{"property":"og:url","content":"https://bukkit.wiki/plugins/plugins/trmenu/menu/create.html"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"创建"}],["meta",{"property":"og:description","content":"创建 基础 TrMenu 的菜单是以 YAML (.yml) 文件格式配置、读取加载的 因此，创建一个新的菜单，你可以通过新建一个 YAML 文件开始 路径 菜单文件可以放在默认菜单目录 （menus）中或自定义路径（需要自行配置） 菜单文件名（不包括拓展名后缀）即是菜单的唯一 ID， 重复 ID 的菜单仍然会被加载，但会影响开启命令的正常工作 配置 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-29T08:09:08.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-29T08:09:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"创建\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-29T08:09:08.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"基础","slug":"基础","link":"#基础","children":[]},{"level":2,"title":"路径","slug":"路径","link":"#路径","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"结构","slug":"结构","link":"#结构","children":[]},{"level":3,"title":"菜单国际化(社区版新增)","slug":"菜单国际化-社区版新增","link":"#菜单国际化-社区版新增","children":[]}]}],"git":{"createdTime":1730189348000,"updatedTime":1730189348000,"contributors":[{"name":"大阔","email":"1520622465@qq.com","commits":1}]},"readingTime":{"minutes":1.92,"words":577},"filePathRelative":"plugins/plugins/trmenu/menu/create.md","localizedDate":"2024年10月29日","excerpt":"\\n<h2>基础</h2>\\n<p>TrMenu 的菜单是以 <strong>YAML</strong> (.yml) 文件格式配置、读取加载的</p>\\n<p>因此，创建一个新的菜单，你可以通过新建一个 YAML 文件开始</p>\\n<h2>路径</h2>\\n<p>菜单文件可以放在默认菜单目录 （menus）中或自定义路径（需要自行配置）</p>\\n<p>菜单文件名（不包括拓展名后缀）即是菜单的唯一 ID，</p>\\n<p>重复 ID 的菜单仍然会被加载，但会影响开启命令的正常工作</p>\\n<h2>配置</h2>\\n<p>菜单的配置项将在接下来的章节详细解析</p>\\n<p>请先浏览下方所提供的示例模式，快速了解菜单基本结构</p>","autoDesc":true}');export{k as comp,d as data};