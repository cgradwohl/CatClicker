var list = document.getElementById('cat-list').getElementsByTagName('li');

// catArray = [] of cat pics
var catArray = mapify(list);

// takes cat pics and places them into the ret []
function mapify(data){
  var ret = [];
  var i;
  var length = data.length;
  for( i=0; i<length; i++ ){
    ret[i] = data[i];
  }
  return ret;
};


//onclick function here :)
var first = 0;
function count(val){
  for( var i=0; i<catArray.length; i++ ){
    var catPic = catArray[i].innerHTML;
    console.log("catPic = ");
    console.log(catPic);
    catPic.addEventListener('click',(function(newVal){
      return function(){
        alert('hello');
      };
    })(val+1));
  };
};
