var set = function(item){
  var items = [];
  var size = 0;

  return {
    isEmpty: function(){
      return (size === 0);
    },

    contains: function(item){
      for (var i = items.length - 1; i >= 0; i--) {
        if (items[i] === item) {
          return true;
        }
      }
      return false;
    },

    containsAt: function(item){
      for (var i = items.length - 1; i >= 0; i--) {
        if (items[i] === item) {
          return i;
        }
      }
      return -1;
    },

    add: function(item){
      if (this.contains(item)) {
        return;
      }
      items[size] = item;
      size++;
      return;
    },

    remove: function(item) {
      if(this.contains(item)) {
        delete items[this.containsAt(item)];
        size--;
      }
      return;
    },

    size: function(){
      return size;
    },

    returnSet: function(){
      return items;
    }

  };
};

// var empty = new set();
// empty.isEmpty();

// var one = new set();
// one.add('1');
// one.isEmpty();

// var many= new set();
// many.add('1');
// many.add('2');
// many.add('2');
// many.returnSet();
// many.size();
// many.contains('2');
// many.contains('3');
// many.isEmpty();
