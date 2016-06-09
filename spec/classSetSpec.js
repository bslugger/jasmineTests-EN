describe('testing methods for the created Set class', function(){
var empty = new set();
var one = new set();
var many= new set();

  beforeEach(function(){
    one.add('1');
    many.add('1');
    many.add('2');
  });

  it('should determine if the instantiated class is empty or not', function(){
    expect(empty.isEmpty()).toBe(true);
    expect(one.isEmpty()).toBe(false);
    expect(many.isEmpty()).toBe(false);
  });

  it('should return the length of our set', function(){
    expect(empty.size()).toBe(0);
    expect(one.size()).toBe(1);
    expect(many.size()).toBeGreaterThan(1);
  });

  it('should add a unique item to the set', function(){
    // This tests the add method first
    spyOn(one, 'add');
    one.add('2');
    expect(one.add).toHaveBeenCalled();

    // now we test that duplicate items are not entered
    many.add('2');
    expect(many.size()).toEqual(2);
  });

  it('should return true if an item is contained in the set', function(){
    expect(many.contains('2')).toBe(true);
    expect(many.contains('3')).toBe(false);
  });

  it('should return the index of the item contained in the set', function(){
    expect(many.containsAt('2')).toBe(1);
    expect(many.containsAt('3')).toBe(-1);
  });

  it('should remove an item from the set', function(){
    many.remove('2');
    expect(many.size()).toEqual(1);
  });

  it('should return the array', function(){
    expect(empty.returnSet()).toEqual([]);
    expect(one.returnSet()).toEqual(['1']);
    expect(many.returnSet()).toEqual(['1', '2']);
  });

});