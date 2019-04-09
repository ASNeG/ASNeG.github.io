---
title: News
description: Latest news of ASNeG Project
layout: news_page
---

<div class="tile">
{% for post in site.posts %}
  <article class="tile is-child">
    <p> {{ post.date | date: "%b %d, %Y" }} </p>
    <p class="title">
      <a href="{{ post.url }}">{{ post.title }}</a>
    </p>
    <p class="subtitle"> {{ post.description }} </p>
  </article>
{% endfor %}
</div>
