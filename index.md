---
layout: home_page
---

<div class="tile is-ancestor">
  <div class="tile is-parent">
    <div class="tile is-parent">
      <div class="tile is-child">
        <p class="title">About Project</p>
        <p class="subtitle"></p>
        <p>
          ASNeG Project aims to be an open source platform which helps people to integrate
          their devices and services into the unified infrastructure based on OPC UA technology.
          For this goal we are developing a lot of things such as a C++ client\server SDK, an application server,
          an OPC UA client, a GUI designer etc. All this software is
          open source and free.
        </p>
      </div>
    </div>
  </div>
  <div class="tile is-parent is-vertical is-6">
    <div class="tile is-parent">
      <div class="tile is-child">
        <p class="title">Last news</p>
        <p class="subtitle"> </p>
          {% for post in site.posts limit:5 %}
          <article>
            {{ post.date | date: "%b %d, %Y" }}, <a href="{{ post.url }}"> {{ post.description }} </a>
          </article>
          {% endfor %}
      </div>
    </div>
  </div>
</div>
