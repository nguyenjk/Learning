function hashtable(){
  var ValuePair = function(key, value){
    this.key = key;
    this.value = value;

    this.toString = function() {
        return '[' + this.key + ' - ' + this.value + ']';
    }
  };
  this.put = function(key, value){
    var position = loseloseHashCode(key);

      if (table[position] == undefined) { //{1}
          table[position] = new LinkedList();
      }
      table[position].append(new ValuePair(key, value)); //{2}
  };

  this.get = function(key) {
    var position = loseloseHashCode(key);

    if (table[position] !== undefined){ //{3}

        //iterate linked list to find key/value
        var current = table[position].getHead(); //{4}

        while(current.next){  //{5}
            if (current.element.key === key){ //{6}
                return current.element.value; //{7}
            }
            current = current.next; //{8}
        }

        //check in case first or last element
        if (current.element.key === key){ //{9}
            return current.element.value;
        }
    }
    return undefined; //{10}
  };
  this.remove = function(key){
    var position = loseloseHashCode(key);

    if (table[position] !== undefined){

        var current = table[position].getHead();
        while(current.next){
            if (current.element.key === key){ //{11}
                table[position].remove(current.element); //{12}
                if (table[position].isEmpty()){ //{13}
                    table[position] = undefined; //{14}
                }
                return true; //{15}
            }
            current = current.next;
        }

        //check in case first or last element
        if (current.element.key === key){ //{16}
            table[position].remove(current.element);
            if (table[position].isEmpty()){
                table[position] = undefined;
            }
            return true;
        }
    }

    return false; //{17}
  };
}