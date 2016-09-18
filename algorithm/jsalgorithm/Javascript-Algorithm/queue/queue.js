function queue(){
  var items = [];
  var enqueue = function(item){
    items.push(item);
  }
  var dequeue = function(){
    return items.shift();
  }

  var front = function(){
    return items.pop();
  }

  var isItemsEmpty = function(){
    return items.length === 0;
  }

  var clearItems = function(){
    items = [];
  }

  var sizeItems = function(){
    return items.length;
  }

  return {
    enqueue : enqueue,
    dequeue : dequeue,
    front : front,
    isEmpty : isItemsEmpty,
    clear : clearItems,
    size : sizeItems
  }

}