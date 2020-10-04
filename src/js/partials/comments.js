$(document).ready(function() {
    var url = "https://objective-fermi-26fd48.netlify.app/data/comments.json";
    var commentsTemplate = $("#commentsTemplate").html();
    var compiledCommentsTemplate = Handlebars.compile(commentsTemplate);

    $.ajax(url).done(function(data) {
        $(".comments-container").html(compiledCommentsTemplate(data));
    });
});