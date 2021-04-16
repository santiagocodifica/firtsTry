
function startThis(){
    ren.capturer.start();
  }
  function recordThis(){
    ren.capturer.capture(ren.myRender);
  }
  function endThis(){
    //ren.capturer.save();
    ren.capturer.stop();
  }
  
  function changeSize(){
    show.resizeCanvas(showRes,showRes);
  }
  
  function copyAll(){
    show.copy(ren.canvas,0,0,res,res,0,0,showRes,showRes);
  }
  
 function hidCanvas(){
    ren.canvas.hide();
  }