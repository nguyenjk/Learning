function set(){
  /* functionality
  add(value): This adds a new item to the set.
  remove(value): This removes the value from the set.
  has(value): This returns true if the value exists in the set and false otherwise.
  clear(): This removes all the items from the set.
  size(): This returns how many elements the set contains. It is similar to the length property of the array.
  values(): This returns an array of all the values of the set.
  */
  var items = [];

  this.add = function(value){
    if(items.indexOf(value) < 0){
      items.push(value);
      return true;
    }
    else{
      return false;
    }
  }

  this.remove = function(value){
    if(items.indexOf(value) > 0){
      items.splice(item.indexOf(value),1);
      return true;
    }
    else{
      return false;
    }
  }

  this.has = function(value){
    if(items.indexOf(value) > 0){
      return true;
    }
    return false;
  }

  this.clear = function(){
    items = [];
  }

  this.size = function(){
    return items.length;
  }

  this.values = function(){
    return items;
  }

  this.getType = function(){
    return 'set';
  }

  this.union = function(newSet){
    var  unionSet = new Set();

    if(newSet.getType() !== this.getType()){
      return null;
    }

    var currentSet = this.values();
    foreach(item in currentSet){
      unionSet.add(currentSet[item]);
    }

    var newSetValue = newSet.values();
    foreach(item in newSetValue){
      unionSet.add(newSetValue[items]);
    }

    return unionSet;
  }

  this.intersection = function(newSet){
    var  intersetSet = new Set();

    if(newSet.getType() !== this.getType()){
      return null;
    }

    var currentSet = this.values();
    foreach(item in currentSet){
      if(newset.has(currentSet[item])){
        intersetSet.add(currentSet[item]);
      }
    }

    return intersetSet;
  }
  this.different = function(newSet){
    var  different = new Set();

    if(newSet.getType() !== this.getType()){
      return null;
    }

    var currentSet = this.values();
    foreach(item in currentSet){
      if(!newset.has(currentSet[item])){
        different.add(currentSet[item]);
      }
    }

    return different;
  }

  this.subset = function(newSet){

    if(newSet.getType() !== this.getType()){
      return null;
    }

    if(this.size() > newSet.size()){
      return false;
    }

    var currentSet = this.values();
    foreach(item in currentSet){
      if(!newset.has(currentSet[item])){
        return false;
      }
    }

    return true;
  }
}