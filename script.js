let containers = document.querySelectorAll('.containing img');
let likeIcons = document.querySelectorAll('.ri-heart-line.icons'); 'icons'
let love = document.querySelector('i')
let p= document.querySelectorAll('.containing p');
let storyContainer = document.querySelector("#stories"); 
// let flaglove=0
function handleDoubleClick(image, index) {

    // console.log(image,index)
  let isLiked = false; 

  image.addEventListener('dblclick', function() {

    if(!isLiked){
        likeIcons[index].style.color = 'red';
        love.style.transform = 'translate(-50%,-50%) scale(1)'
        love.style.opacity = '1'
        setTimeout(function(){      // setTimeout is used delay the execution of the function for some time
        love.style.opacity = 0
         },1000)
        setTimeout(function(){      // setTimeout is used delay the execution of the function for some time
        love.style.transform = 'translate(-50%,-50%) scale(0)'
         },1200)
         likeIcons[index].style.color = 'red';
         p[index].innerText ="101 likes"
       isLiked=true
        }
        else{
        likeIcons[index].style.color = 'black';
         love.style.transform = 'translate(-50%,-50%) scale(1)'
        love.style.opacity = '1'
        setTimeout(function(){      // setTimeout is used delay the execution of the function for some time
        love.style.opacity = 0
        },1000)
        setTimeout(function(){ // setTimeout is used delay the execution of the function for some time
         love.style.transform = 'translate(-50%,-50%) scale(0)'
         },1200)
         likeIcons[index].style.color = 'black';
         p[index].innerText ="100 likes"
         isLiked=false
         }

   
  });
}

containers.forEach(function(image, index) {
  handleDoubleClick(image, index); // Call the function for each image
});

//-----------------custom curser-----------------------------


let main = document.querySelector('.main')

let crs = document.querySelector('.cursor')

main.addEventListener('mousemove',function(e){

    crs.style.left = e.x +'px'
    crs.style.top =e.y +'px'
})




// stories------------------------------------------------------------------------------


array =[{dp: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1610092396964-68dfbd1d6c4f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {dp: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1473181488821-2d23949a045a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {dp: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {dp: "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {dp: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
  {dp: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} ]

let temp=""
array.forEach(function(elem,idx){
    
    temp += `<div class="story"> <img id="${idx}" src="${elem.dp}" alt=""> </div>`
})

let storiyan = document.querySelector("#stories")
storiyan.innerHTML =temp;


storiyan.addEventListener("click",function(dets){
    document.querySelector('#fullscreen').style.display='block'
    // array[dets.target.id].story     ---- golden variable

    const clickedStory = dets.target.closest('.story');        // to dessapear the redness of the clicked story
  
    
    document.querySelector('#fullscreen').style.backgroundImage = `url(${array[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector('#fullscreen').style.display="none";
        clickedStory.style.border = "none";
    },3000)
})





//-------------------------- buttons--------------------------
let likeEmoticons = document.querySelectorAll(".emojies .ri-heart-line.icons");
let bookmarkEmoticons = document.querySelectorAll(".emojies .ri-bookmark-line.icons");


function handleLike(icon, idx) {
  icon.style.color = icon.style.color === 'red' ? 'black' : 'red';
  p[idx].innerText = icon.style.color === 'red' ? "101 likes" : "100 likes";
  // ... (love animation logic here)
  love.style.transform = 'translate(-50%,-50%) scale(1)'
          love.style.opacity = '1'
          setTimeout(function(){      // setTimeout is used delay the execution of the function for some time
          love.style.opacity = 0
          },1000)
          setTimeout(function(){      // setTimeout is used delay the execution of the function for some time
          love.style.transform = 'translate(-50%,-50%) scale(0)'
          },1200)
                // flaglove=1;
               
          isLiked=true
}

likeEmoticons.forEach(function(icon, idx) {
  icon.addEventListener("click", function() {
      handleLike(icon, idx);
  });
});
bookmarkEmoticons.forEach(function(icon, idx) {
  icon.addEventListener("click", function() {
      icon.style.borderBottom = icon.style.borderBottom === '2px solid black' ? 'none' : '2px solid black';
  });
});


