function attachEvents() {
    $('#submit').on('click', submit)
    $('#refresh').on('click', refresh)

    function submit() {
        let author = $('#author').val()
        let content = $('#content').val()
        let message = JSON.stringify({
            author,
            content,
            timestamp: Date.now()
        })
        console.log(message)
        $.post("https://messenger-e9502.firebaseio.com/messenger/.json", message)
            .then(refresh)
    }

    function refresh() {
        $('#messages').empty()
        $.get("https://messenger-e9502.firebaseio.com/messenger/.json")
            .then(loadPosts)
    }

    function loadPosts(data) {
        let textArea = $('#messages')
        for (const key in data) {
            const message = data[key]
            let messageString = `${message.author}: ${message.content}\n`
            textArea.append(messageString)
        }
    }
}