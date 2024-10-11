const fetchUser=()=>{
   return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve({id:1,name:'jhon'});
   },1000);
});

};

const fetchUserPosts = (userId) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { postId: 1, title: 'First Post', userId },
          { postId: 2, title: 'Second Post', userId },
        ]);
      }, 1000); 
    });
  };

const displayuserandpost=async()=>{
    try {
        console.log('Fetching user...');
        const user = await fetchUser();
        console.log('User:', user);
    
        console.log(`Fetching posts for user with ID ${user.id}...`);
        const posts = await fetchUserPosts(user.id);
        console.log('Posts:', posts);
      } catch (error) {
        console.log('Error:', error);
      }
};  
displayuserandpost();