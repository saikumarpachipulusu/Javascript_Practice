// console.log("Buy Hamburger");
// console.log("Buy Pizza");
// console.log("Buy Tea");

//setTimeout

// setTimeout(function(){
//    console.log("Am called");
// },3000)

//async code

// const msg=()=>{
//     console.log("how are you");
// };

// console.log("go to park");
// setTimeout(msg,3000);
// console.log("go to bank");

//----
// Callback
//----

//logic
//1.create a post
//2.fetch all posts

// const postsData=[
//     {
//         title:"Title 1",
//         desc:"Desc 1",
//     },
//     {
//         title:"title 2",
//         desc:"Desc 2",
//     },
//     {
//         title:"title 3",
//         desc:"Desc 3",
//     },
// ];

//fetch all posts

// function fetchPosts(){
//     console.log("Post is Fetching...");
//     console.log(postsData);
// }

// fetchPosts();

//create post
// function createPost(post,cb)
// {
//push the post into the existing posts
// postsData.push(post);
//     setTimeout(function(){
//         postsData.push(post);
//invoke callback
//         cb();
//     },5000)
// console.log(postsData);
// }

//invoke
// createPost(
//     {
//     title:"Title 4",
//     desc:"Desc 4",
//     },
// function(){
//     console.log("Am a callback, and I will be called after 5s");
// }
// fetchPosts
// );

//----
//promise
//-----

// const userpromise = new Promise((resolve,reject)=>{
//code
//     let user={
//         name:'John',
//         city:"Kumasi",
//     };
//     let isFetched = false;

//     if(isFetched)
//     {
//         resolve(user);
//     }
//     else{
//         reject("Error fetching user.Try again later");
//     }
// });

//Resolving

//userpromise.then(function(valueFromResolve){
//.then() is use to get the value from resolve fn
//     console.log(valueFromResolve);
// }).catch(function(error){
//     console.log(error);
// })

//-----
//Function returning a promise
//-----

// function getUser() {
//   return new Promise((resolve, reject) => {
    //logic goes here
//     let user = {
//       name: "john",
//       city: "Accra",
//     };
//     let isFetched = false;
//     if (isFetched) {
     //resolve
//       resolve(user);
//     } else {
     //reject
//       reject("Error fetching result");
//     }
//   });
// }

// getUser()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//--------
//consuming multiple promises
//--------

//1.promise.all()
//2.promise.race()

//1.Fetch all posts
//2.Fetch all comments associated with a post

//Fetch Post
// const postPromise = new Promise(function(resolve,reject){
//     let isPostFetched = true;
//     let post = {
//         title: "Title 1",
//         desc:"Description",
//     };
//     if(isPostFetched)
//     {
//         resolve(post);
//     }
//     else{
//         reject("error fetching post");
//     }
// });

//Fetch comment
// const commentPromise = new Promise(function(resolve,reject){
//     let commentFetched = true;
//     let comment = {
//         title: "Candy",
//         desc:"Excellent post",
//     };
//     if(commentFetched)
//     {
//         resolve(comment);
//     }
//     else{
//         reject("Error fetching comment");
//     }
// });

//reolve multiple promises(promise.all())
// Promise.all([postPromise,commentPromise]).then((allPromises)=>{
//     console.log(allPromises[0]);
//     console.log(allPromises[1]);
// }).catch((err)=>{
//     console.log(err);
// })


//resolve multiple promises(promise.race())
// Promise.race([postPromise,commentPromise]).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

//------
//Async /Await
//------

function makeApiRequest(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve
            let isFetched = false;
            let user ={
                name: 'Miki',
                age: 20
            }
            if(isFetched){
                resolve(user)
            }
            //reject
            reject('Error fetching user')
        },5000)
    })
}

async function getUser(){
    //make api call to fetch user
    
    try{
        const res = await makeApiRequest();
    }catch(err)
    {
        console.log(err);
    }
}

getUser()





