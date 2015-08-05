var _ = {
  average: function(array) {
  var result = 0;
    for (var i = 0; i < array.length; i++) {
      result += array[i];
    }
    return result/array.length;
  },

  contains: function(array, element) {
  
  for (var i = 0; i < array.length; i++) {
    if (array[i] === element) {
      return true;
    }
  }
  return false; 
  },

  first: function(array) {
    return array[0];
  },

  last: function(array) {
    return array[array.length-1];
  },

  max: function(array) {
    var check = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] > check) {
        check = array[i];
      }
    }
    return check;
  },

  min: function(array) {
    var check = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] < check) {
        check = array[i];
      }
    }
    return check;
  },

  // shuffle: function(array) {
  //   var output = [];
  //   var shuffler = Math.ceil(Math.random()*array.length);
  //   for (var i = shuffler; i < array.length; i++) {
  //     output.push(array[i]);
  //   }
  //   return output;
  // },

  sample: function(array, n) {
    var output = [];
    if (n === undefined) {
      n = 1;
    }
    for (var i = 0; i < n; i++) {
      var randomNum = Math.floor(Math.random() * n);
      output.push(array[randomNum]);
    }
    return output;
  },

  difference: function(array1, array2) { 
  
    var output = [];
    for (var i = 0; i < array1.length; i++) {
      var check = false;
        for (var j = 0; j < array2.length; j++) {
          if (array1[i] === array2[j]) {
            check = true;
          }
        }
        if (!check) {
          output.push(array1[i]);
        }

    }
    return output;
  },



  indexOf: function(array,value) {
    
    for (var index in array) {
      if (array[index] === value) {
        return index;;
      } 
      else {
        return -1;
      }
    }
  },

  pluck: function(array, property) {
    var output = [];
    for (var i in array) {
      output.push(array[i][property]);
    }
    return output;
  }


}





console.log(_.sample([1, 2, 3, 4, 5, 6]));


