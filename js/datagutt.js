window.datagutt = {
  init: function(){
    var doc = document.documentElement;
    var avatar = document.getElementsByClassName('avatar')[0];
    if(avatar && avatar.className){
      avatar.style.visibility = 'visible';
      avatar.animate('bounceIn');
    }
    this.pizza();
  },
  pizza: function(){
  	cheet('↑ ↑ ↓ ↓ ← → ← → b a', function (){
		var doc = document.documentElement;
    	var homeBackgroundOverlay = document.getElementById('home-background-overlay')[0];
    	if(doc){
    		doc.className += ' pizza';
    		homeBackgroundOverlay.innerHTML = '<marquee><img src="./img/flames.gif"></marquee>';
    	}
  	});
  }
};