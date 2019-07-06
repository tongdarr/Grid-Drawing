/* EventListener for drawing */
$(document).ready(function(){
  var pressedDown = false;
  $(document).on('mousedown', function(){
    pressedDown = true;     // When mouse goes down, set pressedDown to true
  })  
  .mouseup(function() {
    pressedDown = false;    // When mouse goes up, set pressedDown to false
  });
  
  $('.grid').mousedown(function(){
    $(this).css({'backgroundColor': 'black'});
  });
  
  $('.grid').mouseover(function(){
    if(pressedDown) {
      $(this).css({'backgroundColor': 'black'});
    }
  });
});

/* Used to reduce redundant html grid div code by using a nested loop to create the div elements in the container which is a 16x16 grid */
for(let i = 0; i < 16; i++) {
  for(let j = 0; j < 16; j++) {
    let div = document.createElement('button');
    let attr = document.createAttribute('class');
    attr.value = 'grid';
    div.setAttributeNode(attr);     
    document.getElementById('container').appendChild(div);
  }
}

/****** Function is used to clear the board ******/
function clearGrid() {
  let ele = document.getElementsByClassName('grid');
  for(let i = 0; i < ele.length; i++) {
    ele[i].style.backgroundColor = ""; 
  }
}
