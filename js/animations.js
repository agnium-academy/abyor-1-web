init = function(){
      jarallax = new Jarallax();
      
      jarallax.setDefault('h2, #p1, #p2, #p3, #p4, #p5', {opacity:'0'});
      jarallax.setDefault('#p1, #p2, #p3, #p4, #p5', {marginLeft:'-1000px'});
      jarallax.addAnimation('.planet2',[{progress: "0%", top:"70%"}, {progress: "100%", top: "40%"}]);
      jarallax.addAnimation('.planet1',[{progress: "0%", top:"90%"}, {progress: "100%", top: "10%"}]);
      jarallax.addAnimation('.planet0',[{progress: "0%", top:"0%"}, {progress: "100%", top: "-10%"}]);
      
      jarallax.addAnimation('#head1',[{progress: "0%", left:"-800px"}, {progress: "10%", left: "100px"}]);
      jarallax.addAnimation('#head1',[{progress: "10%", left:"100px"}, {progress: "30%", left: "150px"}]);
      jarallax.addAnimation('#head1',[{progress: "0%", opacity:"1"}, {progress: "20%", opacity:"1"}]);
      jarallax.addAnimation('#head1',[{progress: "20%", opacity:"1"}, {progress: "30%", opacity:"0"}]);
      
      jarallax.addAnimation('#head2',[{progress: "20%", left:"-800px"}, {progress: "30%", left: "100px"}]);
      jarallax.addAnimation('#head2',[{progress: "30%", left:"100px"}, {progress: "60%", left: "150px"}]);
      jarallax.addAnimation('#head2',[{progress: "20%", opacity:"1"}, {progress: "50%", opacity:"1"}]);
      jarallax.addAnimation('#head2',[{progress: "50%", opacity:"1"}, {progress: "60%", opacity:"0"}]);
      
      jarallax.addAnimation('#head3',[{progress: "50%", left:"-800px"}, {progress: "60%", left: "100px"}]);
      jarallax.addAnimation('#head3',[{progress: "60%", left:"100px"}, {progress: "80%", left: "150px"}]);
      jarallax.addAnimation('#head3',[{progress: "50%", opacity:"1"}, {progress: "80%", opacity:"1"}]);
      jarallax.addAnimation('#head3',[{progress: "80%", opacity:"1"}, {progress: "90%", opacity:"0"}]);

      jarallax.addAnimation('#head4',[{progress: "80%", left:"-800px"}, {progress: "90%", left: "100px"}]);
      jarallax.addAnimation('#head4',[{progress: "90%", left:"100px"}, {progress: "100%", left: "150px"}]);
      jarallax.addAnimation('#head4',[{progress: "80%", opacity:"1"}, {progress: "100%", opacity:"1"}]);
      
      jarallax.addAnimation('#p1',[{progress: "5%", opacity:"0"}, {progress: "10%", opacity:"1"}]);
      jarallax.addAnimation('#p1',[{progress: "10%", opacity:"1"}, {progress: "20%"}]);
      jarallax.addAnimation('#p1',[{progress: "20%", opacity:"1"}, {progress: "30%", opacity:"0"}]);
      jarallax.addAnimation('#p1',[{progress: "5%", marginLeft:"0"}, {progress: "30%"}]);
      
      jarallax.addAnimation('#p2',[{progress: "35%", opacity:"0"}, {progress: "40%", opacity:"1"}]);
      jarallax.addAnimation('#p2',[{progress: "40%", opacity:"1"}, {progress: "50%"}]);
      jarallax.addAnimation('#p2',[{progress: "50%", opacity:"1"}, {progress: "60%", opacity:"0"}]);     
      jarallax.addAnimation('#p2',[{progress: "35%", marginLeft:"0"}, {progress: "60%"}]);
      
      jarallax.addAnimation('#p3',[{progress: "65%", opacity:"0"}, {progress: "70%", opacity:"1"}]);
      jarallax.addAnimation('#p3',[{progress: "70%", opacity:"1"}, {progress: "90%"}]);
      jarallax.addAnimation('#p3',[{progress: "65%", marginLeft:"0"}, {progress: "90%"}]);

    }
