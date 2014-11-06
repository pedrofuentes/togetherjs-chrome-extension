/*
togetherjs-chrome-extension
Copyright(c) 2014 Pedro Fuentes <code@pedrofuent.es>
MIT Licensed
*/
if(!document.getElementById('togetherjs_file')) {
  var config = document.createElement('script');
  var script = document.createElement('script');

  config.text = 'TogetherJSConfig_autoStart = true; TogetherJSConfig_suppressJoinConfirmation = true;';

  script.id = 'togetherjs_file';
  script.src = 'https://togetherjs.com/togetherjs-min.js';

  document.body.appendChild(config);
  document.body.appendChild(script);
} else {
  var reload = document.createElement('script');

  reload.id = 'togetherjs_reload';
  reload.text = 'TogetherJS(); var reloadNode = document.getElementById(\'togetherjs_reload\'); reloadNode.parentNode.removeChild(reloadNode);';
  
  document.body.appendChild(reload);
}