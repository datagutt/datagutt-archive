window.datagutt = {
  init: function(){
    var self = this;
    var doc = document.documentElement;
    var avatar = document.getElementsByClassName('avatar')[0];
    var clickCount = 0;
    avatar.onclick = function(){
      if(clickCount >= 3){
        self.pizza();
        clickCount = 0;
      }
    };
    if(avatar && avatar.className){
      avatar.style.visibility = 'visible';
      avatar.animate('bounceIn');
    }
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function (){
      self.pizza();
    });
  },
  pizza: function(){
      var doc = document.documentElement;
      var homeBackgroundOverlay = document.getElementById('home-background-overlay');
      if(doc){
        doc.className += ' pizza';
        for(var i = 0; i < 50; i++){
          homeBackgroundOverlay.innerHTML += '<marquee><img src="./img/lama.gif"></marquee>';
        }
      }
  }
};