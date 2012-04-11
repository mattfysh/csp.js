/* 

Benchmarks for the different solvers... 

Look at jQuery to see how they benchmark without function call overhead.
*/

require(
  
  ['csp', 'benchmarker'],
  
  function(csp, benchmarker) {
    
    var setup = function() {
      
      this.p = csp.DiscreteProblem();
      
      this.p.addVariable("a", [1,2,3]);
      this.p.addVariable("b", [4,5,6]);
      this.p.addVariable("c", [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]);
      
      this.p.addConstraint(
        ["a", "b"],
        function(a, b) { return a*2 === b; }
      );
      
      this.p.addConstraint(
        ["b", "c"],
        function(b, c) { return b*2 === c; }
      );
      
    }
    
    benchmarker.measure_longrunning(
      "DiscreteProblem.getSolution 3 vars 2 consts"
      100,
      {
        setup: setup,
        test: function() {
          var sol = this.p.getSolution();
        
        }
      })

      benchmarker.measure_longrunning(
        "DiscreteProblem.getSolutions 3 vars 2 consts"
        100,
        {
          setup: setup,
          test: function() {
            var allSoln = this.p.getSolutions();
          }
        })
      
      
    
    
  }
);