let containers = document.querySelectorAll('.containing img');
let likeIcons = document.querySelectorAll('.ri-heart-line.icons'); 'icons'
let love = document.querySelector('i')
let p= document.querySelectorAll('.containing p');
let storyContainer = document.querySelector("#stories"); 
let flaglove=0
function handleDoubleClick(image, index) {

    // console.log(image,index)
  let isLiked = false; 

  image.addEventListener('dblclick', function() {

    if(flaglove==0){
        likeIcons[index].style.color = 'red';
        love.style.transform = 'translate(-50%,-50%) scale(1)'
        love.style.opacity = '1'
        setTimeout(function(){      // setTimeout is used delay the execution of the function for some time
        love.style.opacity = 0
         },1000)
        setTimeout(function(){      // setTimeout is used delay the execution of the function for some time
        love.style.transform = 'translate(-50%,-50%) scale(0)'
         },1200)
        flaglove=1;
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
         flaglove=0
         }

    if (!isLiked) {
      likeIcons[index].style.color = 'red';
      p[index].innerText ="101 likes"
      isLiked = true;
    } else {
      likeIcons[index].style.color = 'black';
      p[index].innerText ="100 likes"
      isLiked = false;
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

array =[{dp: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://source.unsplash.com/1600x900/?food"},
{dp: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://source.unsplash.com/1600x900/?sports"},
{dp: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://source.unsplash.com/1600x900/?film"},
{dp: "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://source.unsplash.com/1600x900/?experimental"},
{dp: "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://source.unsplash.com/1600x900/?wallpapers"},
{dp: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story:"https://source.unsplash.com/1600x900/?people"} ]

let temp=""
array.forEach(function(elem,idx){
    
    temp += `<div class="story"> <img id="${idx}" src="${elem.dp}" alt=""> </div>`
})

let storiyan = document.querySelector("#stories")
storiyan.innerHTML =temp;


storiyan.addEventListener("click",function(dets){
    document.querySelector('#fullscreen').style.display='block'
    // array[dets.target.id].story     ---- golden variable
    
    document.querySelector('#fullscreen').style.backgroundImage = `url(${array[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector('#fullscreen').style.display="none";
    },2000)
})





//-------------------------- buttons--------------------------
let emoticons = document.querySelectorAll(".emojies .ri-heart-line.icons, .emojies .ri-bookmark-line.icons"); 

emoticons.forEach(function(icon,idx) {
    // console.log(icon,idx)
  icon.addEventListener("click", function() {
    let currentClass = icon.className;

    if (currentClass.includes("ri-heart-line")) { 

     
        
        
        
        icon.style.color = icon.style.color === 'red' ? 'black' : 'red';
        if(icon.style.color == 'red'){
            
            p[idx/2].innerHTML = "101 likes"
        }else{
            p[idx/2].innerHTML = "100 likes"}
            if(flaglove==0){
            likeIcons[idx/2].style.color = 'red';
                love.style.transform = 'translate(-50%,-50%) scale(1)'
                love.style.opacity = '1'
                setTimeout(function(){      // setTimeout is used delay the execution of the function for some time
                love.style.opacity = 0
                 },1000)
                setTimeout(function(){      // setTimeout is used delay the execution of the function for some time
                love.style.transform = 'translate(-50%,-50%) scale(0)'
                 },1200)
                flaglove=1;
                }
                else{
                likeIcons[idx/2].style.color = 'black';
                 love.style.transform = 'translate(-50%,-50%) scale(1)'
                love.style.opacity = '1'
                setTimeout(function(){      // setTimeout is used delay the execution of the function for some time
                love.style.opacity = 0
                },1000)
                setTimeout(function(){ // setTimeout is used delay the execution of the function for some time
                 love.style.transform = 'translate(-50%,-50%) scale(0)'
                 },1200)
                 flaglove=0
                }
            
        } else if (currentClass.includes("ri-bookmark-line")) { 
            icon.style.borderBottom = icon.style.borderBottom === '2px solid black' ? 'none' : '2px solid black';
        }
    });
});
