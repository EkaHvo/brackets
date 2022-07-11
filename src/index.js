module.exports = function check(str, bracketsConfig) {
  let totallArray = [];
  let count = true;

  for(let i = 0; i < str.length; i++){
    for(let x = 0; x < bracketsConfig.length; x++){

      let lastElem = totallArray[totallArray.length-1];
      let currentElem = str[i];
      let closeElem = bracketsConfig[x][1];
      let openElem = bracketsConfig[x][0];

      if (currentElem === closeElem){
        if(closeElem === openElem){
          isEqualElementClose(currentElem, lastElem);
        }else{
          isNotEqualElementClose(lastElem,openElem);
        }
      } else {
        isOpen(currentElem,openElem);
      }
    }
    if(count === false){
      break;
    }
  }

  function isOpen(currentElem, openElem){
    if(currentElem === openElem){
      totallArray.push(currentElem);
    }
  }

  function isNotEqualElementClose(lastElem,openElem){
    if(totallArray == 0){
      count = false;
    }
    if(lastElem !== openElem){
      count = false;
    } else {
      totallArray.pop(lastElem);
    }
  }

  function isEqualElementClose(currentElem, lastElem){
    if(totallArray != 0){
      if(lastElem === currentElem){
        totallArray.pop(lastElem);
      }else{
        totallArray.push(currentElem);
      }
    } else{
      totallArray.push(currentElem);
    }
  }

  if(totallArray == 0 && count === true){
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
