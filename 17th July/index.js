const loginForm=document.getElementById('login-form');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();//default action will not occur

    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;
    //my username and password is admin and admin123 respectively.
    //authenication and generating token locally
    if(username==='admin' && password==='admin123'){
        //generate a token
        //Date.now()->will give date and time in miliseconds format
        const token= Date.now();
        console.log("Token:",token);
        //storing the token in local storage
        localStorage.setItem('token',token);
        //Redirect to home page or any other performance you want
        window.location.href='home.html';
    }
    else{
        console.error("Invalid");
    }
})