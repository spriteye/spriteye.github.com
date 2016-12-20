$(".parallux").parallux();

var headroom  = new Headroom(document.querySelector("header"), {
  tolerance: 5,
  offset : 205,
  classes: {
    initial: "animated",
    pinned: "slideDown",
    unpinned: "slideUp"
  }
});
headroom.init();

document.getElementById('gallery-thumbnails').onclick = function (event) {
  event = event || window.event;
  var target = event.target || event.srcElement,
      link = target.src ? target.parentNode : target,
      options = {index: link, event: event},
      links = this.getElementsByTagName('a');
  blueimp.Gallery(links, options);
};
