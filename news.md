---
title: News
description: Latest news of ASNeG Project
layout: news_page
---

<div class="tile is-ancestor is-vertical">
{% for post in site.posts %}
  <article class="tile is-child">

    <div class="title">
      <a href="{{ post.url }}">{{ post.title | markdownify }}</a>
    </div>
    <p class="subtitle">   {{ post.date | date: "%b %d, %Y" }}, {{ post.description }} </p>
  </article>
{% endfor %}
</div>
