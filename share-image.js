document.querySelectorAll('img.share-image').forEach(e => {
    e.addEventListener("contextmenu", c => {
        c.preventDefault()
        let html = '<a href="' + window.location.href + '" target="_blank"><img src="' + e.src + '"/></a>'
        prompt("Place this HTML code to your website to embed this image", html)
        return false
    })
})