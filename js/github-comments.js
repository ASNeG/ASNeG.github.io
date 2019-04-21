// Original code taken with permission from : https://github.com/dwilliamson/donw.io/blob/master/public/js/github-comments.js

// use of ajax vs getJSON for headers use to get markdown (body vs body_html)

function ShowComments(repo_name, comment_id, page_id)
{
    $.ajax({
        url: "https://api.github.com/repos/" + repo_name + "/issues/" + comment_id + "/comments" + "?page=" + page_id,
        headers: {Accept: "application/vnd.github.v3.html+json"},
        dataType: "json",
        success: function(comments, textStatus, jqXHR) {

            if (1 == page_id) {
                // post button
                var url = "https://github.com/" + repo_name + "/issues/" + comment_id + "#new_comment_field";
                $("#gh-comments-list").append("<div class='container'> <form action='" + url + "' rel='nofollow'> <input class='button is-primary' type='submit' value='Post a comment on Github' /> </form></div><br/>");
            }

            // Individual comments
            $.each(comments, function(i, comment) {

                var date = new Date(comment.created_at);

                var t = "<div class='box' id='gh-comment'>";
                t += "<article class='media'>";
                  t += "<div class='media-left'>";
                    t += "<figure class='image is-64x64'><img src='" + comment.user.avatar_url + "' width='24px'></figure>";
                  t += "</div>";
                  t += "<div class='media-content'>";
                    t += "<div class='content'><p>";
                      t += "<b><a href='" + comment.user.html_url + "'>" + comment.user.login + "</a></b>";
                      t += " posted at ";
                      t += "<small>" + date.toUTCString() + "</small>";
                      t += "<div id='gh-comment-hr'></div>";
                      t += comment.body_html;
                    t += "</p></div>";
                  t += "</div>";
                t += "</article>"
                t += "</div>";
                $("#gh-comments-list").append(t);
            });

            // Call recursively if there are more pages to display
            var linksResponse = jqXHR.getResponseHeader("Link");
            if (linksResponse) {
                var entries = linksResponse.split(",");
                for (var j=0; j<entries.length; j++)
                {
                    var entry = entries[j];
                    if ("next" == entry.match(/rel="([^"]*)/)[1])
                    {
                        ShowComments(repo_name, comment_id, page_id+1);
                        break;
                    }
                }
            }
        },
        error: function() {
            $("#gh-comments-list").append("Comments are not open for this post yet.");
        }
    });
}

function DoGithubComments(repo_name, comment_id)
{
    $(document).ready(function ()
    {
        ShowComments(repo_name, comment_id, 1);
    });
}
