function loadRepos() {
    $('#repos').empty()
    $.ajax({
        method: 'GET',
        url: 'http://api.github.com/users/' + $('#username').val() + '/repos',
        success: handleSuccess,
        error:handleError
    })

    function handleSuccess(res) {
        for (let repo of res) {
            $('#repos').append(
                $('<li>').append(
                    $(`<a href="${repo.html_url}">${repo.full_name}</a>`)
                )
            )
        }
    }

    function handleError(err) {
        console.log(err)
    }
}