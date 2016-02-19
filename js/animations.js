init = function(){
      jarallax = new Jarallax();
      
      jarallax.setDefault('h2, #p1, #p2, #p3, #p4, #p5', {opacity:'0'});
      jarallax.setDefault('#p1, #p2, #p3, #p4, #p5', {marginLeft:'-1000px'});
      jarallax.addAnimation('.planet2',[{progress: "0%", top:"70%"}, {progress: "100%", top: "40%"}]);
      jarallax.addAnimation('.planet1',[{progress: "52%", top:"100%"}, {progress: "92%", top: "20%"}]);
      jarallax.addAnimation('.planet1',[{progress: "85%", opacity:"1"}, {progress: "92%", opacity:"0"}]);     
      //jarallax.addAnimation('.story1',[{progress: "0%", top:"50%"}, {progress: "100%", top: "-50%"}]);
      jarallax.addAnimation('.planet0',[{progress: "0%", top:"0%"}, {progress: "100%", top: "-10%"}]);
      
      jarallax.addAnimation('#head1',[{progress: "0%", left:"-800px"}, {progress: "10%", left: "100px"}]);
      jarallax.addAnimation('#head1',[{progress: "10%", left:"100px"}, {progress: "47%", left: "150px"}]);
      jarallax.addAnimation('#head1',[{progress: "0%", opacity:"1"}, {progress: "43%", opacity:"1"}]);
      jarallax.addAnimation('#head1',[{progress: "43%", opacity:"1"}, {progress: "47%", opacity:"0"}]);
      
      jarallax.addAnimation('#head2',[{progress: "52%", left:"-800px"}, {progress: "62%", left: "100px"}]);
      jarallax.addAnimation('#head2',[{progress: "62%", left:"100px"}, {progress: "90%", left: "150px"}]);
      jarallax.addAnimation('#head2',[{progress: "52%", opacity:"1"}, {progress: "80%", opacity:"1"}]);
      jarallax.addAnimation('#head2',[{progress: "80%", opacity:"1"}, {progress: "90%", opacity:"0"}]);
      
      jarallax.addAnimation('#head3',[{progress: "45%", left:"-800px"}, {progress: "70%", left: "100px"}]);
      jarallax.addAnimation('#head3',[{progress: "60%", left:"100px"}, {progress: "100%", left: "150px"}]);
      jarallax.addAnimation('#head3',[{progress: "45%", opacity:"1"}, {progress: "100%", opacity:"1"}]);
      
      jarallax.addAnimation('#p1',[{progress: "15%", opacity:"0"}, {progress: "20%", opacity:"1"}]);
      jarallax.addAnimation('#p1',[{progress: "20%", opacity:"1"}, {progress: "25%"}]);
      jarallax.addAnimation('#p1',[{progress: "25%", opacity:"1"}, {progress: "30%", opacity:"0"}]);
      jarallax.addAnimation('#p1',[{progress: "15%", marginLeft:"0"}, {progress: "30%"}]);
      
      jarallax.addAnimation('#p2',[{progress: "33%", opacity:"0"}, {progress: "38%", opacity:"1"}]);
      jarallax.addAnimation('#p2',[{progress: "38%", opacity:"1"}, {progress: "42%"}]);
      jarallax.addAnimation('#p2',[{progress: "42%", opacity:"1"}, {progress: "47%", opacity:"0"}]);     
      jarallax.addAnimation('#p2',[{progress: "33%", marginLeft:"0"}, {progress: "47%"}]);
      
      jarallax.addAnimation('#p3',[{progress: "52%", opacity:"0"}, {progress: "58%", opacity:"1"}]);
      jarallax.addAnimation('#p3',[{progress: "58%", opacity:"1"}, {progress: "72%"}]);
      jarallax.addAnimation('#p2',[{progress: "72%", opacity:"1"}, {progress: "75%", opacity:"0"}]);     
      jarallax.addAnimation('#p3',[{progress: "52%", marginLeft:"0"}, {progress: "75%"}]);

      jarallax.addAnimation('#p4',[{progress: "77%", opacity:"0"}, {progress: "82%", opacity:"1"}]);
      jarallax.addAnimation('#p4',[{progress: "82%", opacity:"1"}, {progress: "86%"}]);
      jarallax.addAnimation('#p4',[{progress: "86%", opacity:"1"}, {progress: "91%", opacity:"0"}]);     
      jarallax.addAnimation('#p4',[{progress: "77%", marginLeft:"0"}, {progress: "91%"}]);

      jarallax.addAnimation('#p5',[{progress: "92%", opacity:"0"}, {progress: "96%", opacity:"1"}]);
      jarallax.addAnimation('#p5',[{progress: "96%", opacity:"1"}, {progress: "100%"}]);
      jarallax.addAnimation('#p5',[{progress: "92%", marginLeft:"0"}, {progress: "100%"}]);

    }
