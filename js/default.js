
for(var i = 1; i <= 100; i++){
  var number = i;
  var message;
  
  //条件内の倍数であったときの処理
  if(number / 3 === 1 || number / 5 === 1){
    
    //5の倍数
    if(number / 3 !== 1){
      message = 'Buzz';
    }else if(number / 5 !== 1){
      //3の倍数
      message = 'Fizz';
    }else{
      //15の倍数
      message = 'Fizz Buzz';
    }
  }else{
    //条件内の倍数でなかった場合の処理
    message = number;
  }
  
  document.write("Number:" + message <br>);
}
