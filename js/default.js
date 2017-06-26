ver answer = parseInt(windw.prompt('FizzBuzzの回数を入力して！'));

for(var i = 1; i <= answer; i++){
  var number = i;
  var decision;
  var flag3 = 0, flag5 = 0;
  var message;
  
  //条件内の数字かどうか判断
  //3の倍数？
  dicision = number;
  do{
    dicision /= 3;
    if(dicsion === 1){
      flag3 = 1;
    }
  }while(dicision <= 1)
    
  //5の倍数？
  dicision = number;
  do{
    dicision /= 5;
    if(dicsion === 1){
      flag5 = 1;
    }
  }while(dicsion <= 1);
  
  //条件内の倍数であったときの処理
  if(flag3 === 1 || flag5 === 1){
    
    //5の倍数
    if(flag3 !== 1){
      message = 'Buzz';
    }else if(flag5 !== 1){
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
  
  document.write("Number:" + message + "\n");
}
