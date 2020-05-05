function solution() {
    const commentsListTag = $('.comment-list')
    const countAttr = commentsListTag.data('count')
    commentsListTag.html('Loading...')

    $.ajax({
        method: 'GET',
        url: 'https://www.example.com/comments?count=' + countAttr,
        dataType: 'json'
    })
        .success((data) => {
            const commentItemlist = data.map(comment => (
                rendercommentItemlist(comment)
            ))
            commentsListTag.html(commentItemlist.join(''))
        })
        .fail((data) => {
            commentsListTag.html('')
        })
}

function rendercommentItemlist(comment) {
    return (
        `<div class="comment-item">
            <div class="comment-item__username">
              ${comment.username}
            </div>
            <div class="comment-item__message">
              ${comment.message}
            </div>
        </div>`
    )
}
