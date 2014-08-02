function collision($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
    return false;
  }
  return true;
}

window.setInterval(function() {
    if( collision($('#side-bar'), $('#content'))) {
      document.getElementById('side-bar').style.visibility = 'hidden';
    } else {
      document.getElementById('side-bar').style.visibility = 'visible';
    }
}, 200);

/*
 * Set onLoad()
 */
window.onload = function () {
  var menu = document.getElementById('writing-list');
  menu.addEventListener('click', function() {
    var div = document.getElementById('side-bar-children');
    var attribute = div.style.display;

    if (attribute === 'none') {
      attribute = '';
    } else {
      attribute = 'none';
    }
    div.style.display = attribute;
  }, false);

  // var jonnysSideBar = document.getElementById('jonny-list');
  // jonnysSideBar.addEventListener('click', function() {
  //   var div = document.getElementById('jonnys-side-bar-children');
  //   var attribute = div.style.display;
  //
  //   if (attribute === 'none') {
  //     attribute = '';
  //     console.log('show '+div.id);
  //   } else {
  //     attribute = 'none';
  //     console.log('hide '+div.id);
  //   }
  //   div.style.display = attribute;
  // }, false);
  //
  // var docsSideBar = document.getElementById('docs-list');
  // docsSideBar.addEventListener('click', function() {
  //   var div = document.getElementById('docs-side-bar-children');
  //   var attribute = div.style.display;
  //
  //   if (attribute === 'none') {
  //     attribute = '';
  //     console.log('show '+div.id);
  //   } else {
  //     attribute = 'none';
  //     console.log('hide '+div.id);
  //   }
  //   div.style.display = attribute;
  // }, false);
}
