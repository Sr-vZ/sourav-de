function template_loader(){
    fetch('../templates/navbar.html').then(res =>{
        console.log(res)
        document.getElementById('navbar').innerHTML = res
    })
}


template_loader()