---
title: News
description: Latest news of ASNeG Project
layout: news_page
---

<div class="tile is-ancestor is-vertical">
{% for post in site.posts %}
  <article class="tile is-child">

    <p class="title">
      <a href="{{ post.url }}">{{ post.title }}</a>
    </p>
    <p class="subtitle">   {{ post.date | date: "%b %d, %Y" }}, {{ post.description }} </p>
  </article>
{% endfor %}
</div>
