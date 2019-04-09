---
title: News
layout: news_page
---


<div class="tile">
{% for post in site.posts %}
  <article class="tile is-child">
    <p class="title">
      <a href="{{ post.url }}">{{ post.title }}</a>
    </p>
    <p clas="subtitle"> {{ post.description }} </p>
  </article>
{% endfor %}
</div>
