document.querySelectorAll('img.share-image').forEach(e => {
    e.addEventListener("mouseenter", c => {
        let btn = document.createElement('a')
        btn.classList.add('share-button')
        btn.style.cssText = "position:absolute;bottom:2%;left:8%;background:red;padding:1px 20px;border-radius:20px;color:white;cursor:pointer"
        btn.append('Share')
        btn.addEventListener('click',ev =>{
            ev.preventDefault()
            let div = document.createElement('div')
            div.style.cssText = "position: fixed; width: auto; background: white; top: 50%; left: 50%;z-index: 9999;transform: translate(-50%,-50%);padding: 20px;border: 1px solid;"
            let p = document.createElement('p')
            let x = document.createElement('h5')
            x.append('X')
            p.style.margin = '0'
            x.style.margin = '0'
            p.innerText = "Place this HTML code to your website to embed this image"
            let h = document.createElement('div')
            h.style.display ='flex'
            h.style.justifyContent = 'space-between'
            h.style.marginBottom = '20px'
            h.style.alignItems = 'center'
            h.append(p,x)
            div.append(h)
            let code = document.createElement('code')
            code.innerText ='<a href="' + window.location.href + '" target="_blank"><img src="' + e.src + '"/></a>'
            code.style.cursor = 'pointer'
            code.style.display = 'block'
            code.title = 'Click to copy'
            code.addEventListener('click',() =>{

                if (navigator && navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code.innerText);
            })
            div.append(code)
            x.addEventListener('click',e =>{
                e.preventDefault()
                    if (navigator && navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code.innerText);
                div.remove()
            })
            document.body.append(div)
            return false

        })
        e.parentElement.style.position='relative'
        e.parentElement.append(btn)
        e.parentElement.addEventListener('mouseleave', c1 => {
            btn.remove()
        })
    })
})