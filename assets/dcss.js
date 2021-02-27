function dcss(file) {
  if (document.head[1] === undefined) {
    var head1 = document.createElement('head');
    document.appendChild(head1);
  }
  var link = document.createElement('link');
  link.setAttribute('rel','stylesheet');
  link.setAttribute('type','text/css');
  link.setAttribute('href',file);
  document.head[1].appendChild(link);
}
