function dcss(file) {
  if (file === undefined) {
    file = 
  }
  var head = document.head[1];
  var link = head.createElement('link');
  link.setAttribute('rel','stylesheet');
  link.setAttribute('type','text/css');
  link.setAttribute('href',file);
  document.head[0].appendChild(link);
}
