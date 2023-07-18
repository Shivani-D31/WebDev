//creating a new Blog
const createBlog=document.getElementById('create-blog');
createBlog.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const givenTitle=document.getElementById('title').value;
    const givenDes=document.getElementById('description').value;
    //Create an object to hold the form data to send.
    const newBlog={
        //key in db:value by me
        title:givenTitle,
        description:givenDes,
    }
    
//Sending a POST request to the json server
    fetch("http://localhost:3000/blogs",{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(newBlog)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
      alert("Created a New Blog");
        //Handle successful response and redirectto login.html
    })
    .catch(error=>{
        console.log("error",error);
        //handle error
    })
    
})



//getting all the Blogs
const url="http://localhost:3000/blogs";
fetch(url)
.then(response=>response.json())
.then(data=>{
    console.log(data);
    displayData(data);
})
.catch(error=>{
    console.log(error);
})

function displayData(data){
    const blogs=document.getElementById('blog-container');
    data.forEach(item=>{
        const title=document.createElement('h3');
        const body=document.createElement('p');
        const del=document.createElement('button');
        const edit=document.createElement('button');
        title.textContent=`Title:${item.title}`;
        body.textContent=`Description: ${item.description}`;
        edit.textContent="Edit Blog";
        del.textContent="Delete Blog";
        blogs.append(title,body,edit,del);
    })
}

