/*
togetherjs-chrome-extension
Copyright(c) 2014 Pedro Fuentes <code@pedrofuent.es>
MIT Licensed
*/
if(typeof TogetherJS !== "function" && (!!window.location.hash.match(/(.*)&togetherjs=(.*)/) || (typeof sessionStorage['togetherjs-session.status'] !== "undefined" && sessionStorage['togetherjs-session.status'].indexOf('"running":true') !== -1))) {
  var script = document.createElement('script');

  script.id = 'togetherjs_file';
  script.src = 'https://togetherjs.com/togetherjs-min.js';

  document.body.appendChild(script);
} else if (typeof sessionStorage['togetherjs-session.status'] !== "undefined" && sessionStorage['togetherjs-session.status'].indexOf('"running":false') > 0){
  delete sessionStorage['togetherjs-session.status'];
  delete sessionStorage['togetherjs-session.peerCache'];
}