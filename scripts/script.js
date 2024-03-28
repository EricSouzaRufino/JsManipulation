document.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    alert('A pagina foi totalmente carregada e o .js foi implantado!')

    loadUserData()

})

function loadUserData(event){
    event.preventDefault()

    const userData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: document.getElementById('age').value
    }

    userData.age
}
