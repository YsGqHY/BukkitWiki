import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,e,o as n}from"./app-qzeSHtuq.js";const l={};function t(p,i){return n(),a("div",null,i[0]||(i[0]=[e(`<h3 id="配置节点" tabindex="-1"><a class="header-anchor" href="#配置节点"><span>配置节点</span></a></h3><ul><li>take 是否扣除除草使用的物品</li><li>chance 作物在生长中会生草的几率 1s判断一次</li><li>maxChance 最大几率</li><li>msg 生草之后发给玩家的消息</li><li>clippers 剪刀id列表</li></ul><p>在本插件中不存放任何剪刀物品 需要手动将id写到物品的nbt中 剪刀物品的nbt格式如下：</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">farm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">clipper</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">id</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>append 在生草之后对gui中展示物品名字拼接的文字</li><li>appendLore 在生草之后对gui中展示物品Lore拼接的文字</li></ul><h3 id="示例配置" tabindex="-1"><a class="header-anchor" href="#示例配置"><span>示例配置</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  grass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    take</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">false</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    chance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">20</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    maxChance</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">100</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    msg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;请给铁锭种子除草&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    clippers</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;example&quot;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    append</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;[请除草]&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    appendLore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;[请除草]&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const d=s(l,[["render",t],["__file","grass.html.vue"]]),k=JSON.parse('{"path":"/plugins/author/dakuo/uifarm/seed/grass.html","title":"除草配置","lang":"zh-CN","frontmatter":{"title":"除草配置","dir":{"order":1},"description":"配置节点 take 是否扣除除草使用的物品 chance 作物在生长中会生草的几率 1s判断一次 maxChance 最大几率 msg 生草之后发给玩家的消息 clippers 剪刀id列表 在本插件中不存放任何剪刀物品 需要手动将id写到物品的nbt中 剪刀物品的nbt格式如下： append 在生草之后对gui中展示物品名字拼接的文字 append...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/plugins/author/dakuo/uifarm/seed/grass.html"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"除草配置"}],["meta",{"property":"og:description","content":"配置节点 take 是否扣除除草使用的物品 chance 作物在生长中会生草的几率 1s判断一次 maxChance 最大几率 msg 生草之后发给玩家的消息 clippers 剪刀id列表 在本插件中不存放任何剪刀物品 需要手动将id写到物品的nbt中 剪刀物品的nbt格式如下： append 在生草之后对gui中展示物品名字拼接的文字 append..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"除草配置\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":3,"title":"配置节点","slug":"配置节点","link":"#配置节点","children":[]},{"level":3,"title":"示例配置","slug":"示例配置","link":"#示例配置","children":[]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":0.59,"words":178},"filePathRelative":"plugins/author/dakuo/uifarm/seed/grass.md","autoDesc":true}');export{d as comp,k as data};
