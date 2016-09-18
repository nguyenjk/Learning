function priorityQueue(){
  var items = [];

  var queueElement = function(element, priority){
    this.element = element;
    this.priority = priority;
  }
  var enqueue = function(element, priority){
    var item = new queueElement(element,priority);
    if(this.isItemsEmpty()){
      items.push(item);
    }
    else{

      // this is not simple way. just like merge sort. we need to have merge sort first.
      var midItem = Math.floor(items.length / 2);
      if(midItem > 0 && midItem.priority < priority){
        enqueue(items.slice(0, Math.floor(items.length/2)));
      }else{
        //case element priority is less than the right item priority
        if(items[Math.floor(items.length/2)+1].priority > priority){
          enqueue(items.slice(Math.floor(items.length/2)+1))
        }else{

        }
      }
    }

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