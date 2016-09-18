function stack(){
  var items = [];
  var pushItem = function(item){
    items.push(item);
  }
  var popItem = function(){
    return items.pop();
  }

  var peekItem = function(){
    return items[this.items.length-1];
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
    push : pushItem,
    pop : popItem,
    peek : peekItem,
    empty : isItemsEmpty,
    clear : clearItems,
    size : sizeItems
  }
}