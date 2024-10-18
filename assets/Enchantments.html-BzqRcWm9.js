import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,f as a,o as n}from"./app-B-BpvHCM.js";const t={};function l(h,s){return n(),i("div",null,s[0]||(s[0]=[a(`<h1 id="enchantments-附魔" tabindex="-1"><a class="header-anchor" href="#enchantments-附魔"><span>Enchantments 附魔</span></a></h1><p>附魔属性用于给使用 MythicMobs 制作的物品施加附魔效果。这些附魔可以应用于任何物品，并且可以超过 Minecraft 自然设定的附魔等级上限。然而，如果将某些附魔应用于它们原本不适合的物品上，可能没有任何效果。</p><h2 id="syntax-语法" tabindex="-1"><a class="header-anchor" href="#syntax-语法"><span>Syntax 语法</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">internal_itemname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&lt;material&gt;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Enchantments</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&lt;enchantment&gt; &lt;level&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&lt;enchantment&gt; &lt;level&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>&lt;enchantment&gt;</strong><br> 要应用于指定物品的附魔类型。</p><p><strong>&lt;level&gt;</strong><br> 指定附魔的等级。</p><h2 id="available-enchantments-可用附魔" tabindex="-1"><a class="header-anchor" href="#available-enchantments-可用附魔"><span>Available Enchantments 可用附魔</span></a></h2><p>可用<a href="https://hub.spigotmc.org/javadocs/spigot/org/bukkit/enchantments/Enchantment.html" target="_blank" rel="noopener noreferrer">附魔列表</a>可以在 spigot javadocs 中找到<br> 如果还有其他提供者，也可以通过 <code>namespace:enchant_name</code> 语法添加附魔</p><h2 id="example-示例" tabindex="-1"><a class="header-anchor" href="#example-示例"><span>Example 示例</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">lethal_pickaxe</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">diamond_pickaxe</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  Enchantments</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">DAMAGE_ALL 3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">KNOCKBACK 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10)]))}const c=e(t,[["render",l],["__file","Enchantments.html.vue"]]),d=JSON.parse('{"path":"/plugins/plugins/mythicmobs/Items/Enchantments.html","title":"Enchantments 附魔","lang":"zh-CN","frontmatter":{"description":"Enchantments 附魔 附魔属性用于给使用 MythicMobs 制作的物品施加附魔效果。这些附魔可以应用于任何物品，并且可以超过 Minecraft 自然设定的附魔等级上限。然而，如果将某些附魔应用于它们原本不适合的物品上，可能没有任何效果。 Syntax 语法 <enchantment> 要应用于指定物品的附魔类型。 <level> 指定附...","head":[["meta",{"property":"og:url","content":"https://bukkit.wiki/plugins/plugins/mythicmobs/Items/Enchantments.html"}],["meta",{"property":"og:site_name","content":"BukkitWiki"}],["meta",{"property":"og:title","content":"Enchantments 附魔"}],["meta",{"property":"og:description","content":"Enchantments 附魔 附魔属性用于给使用 MythicMobs 制作的物品施加附魔效果。这些附魔可以应用于任何物品，并且可以超过 Minecraft 自然设定的附魔等级上限。然而，如果将某些附魔应用于它们原本不适合的物品上，可能没有任何效果。 Syntax 语法 <enchantment> 要应用于指定物品的附魔类型。 <level> 指定附..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-18T22:25:05.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-18T22:25:05.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Enchantments 附魔\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-18T22:25:05.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Syntax 语法","slug":"syntax-语法","link":"#syntax-语法","children":[]},{"level":2,"title":"Available Enchantments 可用附魔","slug":"available-enchantments-可用附魔","link":"#available-enchantments-可用附魔","children":[]},{"level":2,"title":"Example 示例","slug":"example-示例","link":"#example-示例","children":[]}],"git":{"createdTime":1729290305000,"updatedTime":1729290305000,"contributors":[{"name":"大阔","email":"1520622465@qq.com","commits":1}]},"readingTime":{"minutes":0.59,"words":177},"filePathRelative":"plugins/plugins/mythicmobs/Items/Enchantments.md","localizedDate":"2024年10月18日","autoDesc":true}');export{c as comp,d as data};
