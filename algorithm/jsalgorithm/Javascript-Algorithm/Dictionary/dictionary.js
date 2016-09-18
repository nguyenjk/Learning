function Dictionary(){
  var items = {};
  /*
    set(key,value): This adds a new item to the dictionary.
    remove(key): This removes the value from the dictionary using the key.
    has(key): This returns true if the key exists in the dictionary and false otherwise.
    get(key): This returns a specific value searched by the key.
    clear(): This removes all the items from the dictionary.
    size(): This returns how many elements the dictionary contains. It is similar to the length property of the array.
    keys(): This returns an array of all the keys the dictionary contains.
    values(): This returns an array of all the values of the dictionary.
  */

  this.has = function(key){
    return key in items;
  }

  this.set = function(key,value){
    items[key] = value;
  }

  this.remove = function(key){
    if(this.has(key)){
      delete items[key];
      return true;
    }
    return false;
  }

  this.get = function(key){
    return this.has(key)? items[key] : undefined;
  }

  this.values = function(){
    var values = [];
    for (var k in items) {
        if (this.has(k)) {
            values.push(items[k]);
        }
    }
    return values;
  }
}