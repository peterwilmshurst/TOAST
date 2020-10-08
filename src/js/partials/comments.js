$(document).ready(function() {

    Handlebars.registerHelper('formatDate', function(property) {
        const milliseconds = property * 1000 
        const dateObject = dayjs(milliseconds).format('dddd, D MMMM, YYYY h:mm A')
        return new Handlebars.SafeString(dateObject);
    });

    var url = "https://cors-anywhere.herokuapp.com/https://objective-fermi-26fd48.netlify.app/data/comments.json";
    var commentsTemplate = $("#commentsTemplate").html();
    var compiledCommentsTemplate = Handlebars.compile(commentsTemplate);

    $.ajax(url).done(function(data) {
        $(".comments-container").html(compiledCommentsTemplate(data));
    });
});