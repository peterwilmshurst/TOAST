loadComments =>
    $(".comments-container").html("")
let allComments = []
let jsonContent = 'https://cors-anywhere.herokuapp.com/https://objective-fermi-26fd48.netlify.app/data/comments.json'

$.get(jsonContent, data => {

    $.each(data, (index, value) => {
        let date = value.timeStamp * 1000
        let formattedDate = dayjs(date).format('dddd, D MMMM, YYYY h:mm A')

        if (value.parentId.length > 4) {
            allComments.push(value)
        } else {
            $(".comments-container").prepend(`<div class='comments-container__comment' data-index=${value.timeStamp} id='parent-${index}'></div>`)
            $(`#parent-${index}`).append(`<div class='comments-container__comment__user-details'><p>${value.author}<span>${formattedDate}</span></p> </div>`)
            $(`#parent-${index}`).append(`<div class='comments-container__comment__user-comment'>${value.comment}</div>`)
            $(`#parent-${index}`).append("<div class='row'><div class='col comments-container__comment__user-controls'><a href='#' title='reply'>reply</a></div></div>")
        }
    })
    $.each(allComments, (index, {
        timeStamp,
        parentId,
        author,
        comment
    }) => {
        let date = timeStamp * 1000
        let formattedDate = dayjs(date).format('dddd, D MMMM, YYYY h:mm A')
        let parentID = parentId

        $(`#parent-${parentID}`).append(`<div class='comments-container__comment--reply' data-index=${timeStamp} id='comment-${index}'></div>`)
        $(`#comment-${index}`).append(`<div class='comments-container__comment--reply__user-details'><p>${author}<span>${formattedDate}</span></p> </div>`)
        $(`#comment-${index}`).append(`<div class='comments-container__comment--reply__user-comment'>${comment}</div>`)
    })

    $('.comments-container').each(function() {
        let $this = $(this);
        $this.append($this.find('.comments-container__comment').get().sort((a, b) => $(b).data('index') - $(a).data('index')));
    });
});

$(document).ready(() => {
    loadComments()
})