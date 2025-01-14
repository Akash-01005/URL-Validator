const valUrl = document.getElementById('valurl');
const checkUrl = document.getElementById('checkUrl');

const form = document.querySelector('form');

checkUrl.addEventListener('click',()=>{
    const url = valUrl.value;

    const exp = /^((ftp|https|http):\/\/)([a-zA-Z0-9]+\.)?([a-zA-Z]+)\.([a-zA-Z]{2,})/

    if(exp.test(url)){
        const markup = `<div class="alert alert-success" role="alert">
        <b>${url}</b> is Valid!.
        </div>`;
        form.insertAdjacentHTML('beforebegin',markup);

    }
    else{
        const markup = `<div class="alert alert-danger" role="alert">
        <b>${url}</b> is not Valid!.
        </div>`;
        form.insertAdjacentHTML('beforebegin',markup);
    }

});

form.addEventListener('submit',e=>{
    e.preventDefault();
});

setTimeout(()=>{
    document.querySelector('.alert').remove()
},1000)
