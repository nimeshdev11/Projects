function storeData(v){
  let txtInput = document.getElementById("txtInput");
  let oldVlaue = txtInput.value;
  let t = oldVlaue.length;
  let lasChar = oldVlaue[t - 1];
  let oprSym = ["+", "-", "*", "/", "."];

  if (oprSym.includes(v)) {
    if (oprSym.includes(lasChar)) {
      let removeLast = oldVlaue.slice(0, -1);
      txtInput.value = removeLast + v;
    } else {
      txtInput.value = oldVlaue + v;
    }
  } else {
    txtInput.value = oldVlaue + v;
  }
}


function calData() {
  let txtInput = document.getElementById("txtInput");
  let oldVlaue = eval(txtInput.value);
  txtInput.value = oldVlaue;
 
}

function clsData() {
  document.getElementById("txtInput").value = "";
}

function sound(){
  var snd = new Audio('Game.wav')//wav is also supported
  snd.play()
}
