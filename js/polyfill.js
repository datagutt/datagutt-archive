if(!this.Document && !this.HTMLDocument){
	this.Document = this.HTMLDocument = document.constructor = (new Function('return function Document() {}')());
this.Document.prototype = document;
}else if(HTMLDocument && typeof Document == 'undefined'){
	this.Document = this.HTMLDocument;
}