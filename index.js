document.addEventListener('DOMContentLoaded',() =>{
  
  const post=document.querySelector('#posts');
  const loader=document.createElement('p');
  loader.innerText='Chargement!!';
  post.append(loader)
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(reponse => reponse.json())
  .then(data =>{
    loader.remove()
    data.slice(0,10).forEach(post =>{
      const postElement=document.createElement('div')
      postElement.classList.add('post')
      const postTitle=document.createElement('h2')
      postTitle.innerText=post.title
      postElement.append(postTitle)
      const postBody=document.createElement('p')
      postBody.innerText=post.body
      
      postElement.append(postBody)
      
      posts.append(postElement)
                             
                         
     })
  })
  .catch(error =>{
    loader.innerText='Erreur de chargement'
    console.error('Erreur',error)
    
    
  })
  
});