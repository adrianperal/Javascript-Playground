(function() {
    'use strict';
  
    /* Variables */
    
    const someVariable = 'some value';
  
    /* Functions */
  
    function init() {
      console.log('Initializing...');
      someFunction();
    }
  
    function someFunction() {
      console.log(`The value of someVariable is: ${someVariable}`);
    }
  
    /* Events */
  
    window.addEventListener('load', init);
  
  })();
  