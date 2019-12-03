---
title: News
description: Latest news of ASNeG Project
layout: news_page
---

<div class="tile is-ancestor is-vertical">
{% for post in site.posts %}
  <div class="tile is-child">
    <div class="content"> 
      <div class="subtitle">
        <a href="{{ post.url }}">{{ post.title | markdownify }}</a>
      </div>
      {{ post.date | date: "%b %d %Y" }}, {{ post.description }} 
    </div>
  </div>
{% endfor %}
</div>
