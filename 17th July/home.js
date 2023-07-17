const token=localStorage.getItem('token');
if(!token){
    window.location.href='index.html'; // if token is not there redirect to index.html
}

function logout(){
    localStorage.removeItem('token');
    window.location.href='index.html';
}
