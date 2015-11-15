function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
window.datagutt = {
  init: function(){
    var self = this;
    var doc = document.documentElement;
    var avatar = document.getElementsByClassName('avatar')[0];
    var bg1 = document.getElementsByClassName('bg1')[0];

    var clickCount = 0;
    avatar.onclick = function(){
      if(clickCount >= 3){
        self.glitchBg();
        clickCount = 0;
      }
      clickCount++;
    };
    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function (){
      self.pizza();
    });

    self.glitchAvatar();
  },
  glitchBg: function(fn){
    glitch(document.querySelector('.bg1'), {
      amount: 10,
      complete: function(canvas){
        var hbg = document.getElementById('home-background');
        console.log(hbg);
        canvas.className = 'bg1';
        hbg.replaceChild(canvas, hbg.childNodes[0]);
        if(fn){
          fn();
        }
      }
    });
  },
  glitchAvatar: function(){
    var glitcher = new Glitcher({
        color: {
            red: 1,
            green: 1,
            blue: 1
        },
        stereoscopic: {
            red: 10,
            green: 20,
            blue: 0
        },
        lineOffset: {
            value: 4
        }
    });
    glitcher.glitch('img/avatar.png', function () {
        var hbg = document.getElementsByClassName('avatar')[0];
        console.log(hbg);
        glitcher.canvas.className = 'avatar';
        hbg.replaceChild(glitcher.canvas, hbg.childNodes[1]);
    });

    setInterval(function() {
        glitcher.options = {
            color: {
                red: 1,
                green: 0.8,
                blue: 0.58
            },
            stereoscopic: {
                red: 10 * randomRange(1, 3),
                green: 5 * randomRange(1, 3),
                blue: 30 * randomRange(1, 3)
            },
            lineOffset: {
                value: 5 * randomRange(1, 3),
                lineHeight: 10 * randomRange(1, 3)
            }
        };
        glitcher.process();
    }, 100);
  },
  pizza: function(){
      var doc = document.documentElement;
      var homeBackgroundOverlay = document.getElementById('home-background-overlay');
      if(doc){
        doc.className += ' pizza';
        for(var i = 0; i < 50; i++){
          homeBackgroundOverlay.innerHTML += '<marquee><img src="./img/colorful-3.gif"></marquee>';
        }
      }
  }
};