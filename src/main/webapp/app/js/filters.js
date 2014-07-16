'use strict';

/* Filters */

angular.module('myApp.filters', []).
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }])
  
  .filter('valueName', [function(version) {
	    return function(value) {
	    	var valueNames = {1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five'};
	        return valueNames[value];
	      }
	    }]);
