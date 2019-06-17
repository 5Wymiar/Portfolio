
function scroll(element){   
    var ele = document.getElementById("attention");   
    window.scrollTo(ele.offsetLeft,ele.offsetTop); 
    document.getElementById("attention").scrollIntoView({
        behavior: 'smooth'
      });
    }

