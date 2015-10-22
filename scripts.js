var links;

// links in post
var post_content = document.getElementsByClassName("td-post-content");
if (post_content.length > 0) {
    var links = post_content[0].getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].setAttribute('target', '_blank')
    }    
}

// links in comments
var links = document.querySelectorAll('.comment-content p a')
for (z = 0; z < links.length; z++) {
    links[z].setAttribute('target', '_blank')
}

