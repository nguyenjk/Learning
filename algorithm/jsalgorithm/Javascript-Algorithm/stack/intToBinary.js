function intToBinary (number){
  if(isNaN(number)){
    return undefined;
  }

  var rem, binary='';
  var binaryArray = stack();

  while(number > 0){
    rem = Math.floor(number % 2);
    binaryArray.push(rem);
    number = Math.floor(number /2);
  }

  while(!binaryArray.empty()){
    binary += binaryArray.pop();
  }

  return binary;
}

function baseConverter(number, base){
  var remBase , convertedNumber = '';
  var baseArray = stack();
  var digit = '0123456789ABCDEF';

  while(number > 0){
    remBase = Math.floor(number % base);
    baseArray.push(remBase);
    number = Math.floor(number / base);
  }

  while(!baseArray.empty()){
    convertedNumber += digit[baseArray.pop()];
  }
  return convertedNumber;
}