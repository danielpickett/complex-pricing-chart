(function(){
  let columnCount = 0;
  document.querySelectorAll('.table-row').forEach(e => {
    e.classList.add('column-count-' + e.childElementCount);
  });
  document.getElementById('hinderpurple-table').classList.add('column-count-' + columnCount);
})();

function toggleTable(_this) {
  document.querySelectorAll('.table').forEach( el => {
    el.classList.toggle('active');
  });
  document.querySelectorAll('.table-title').forEach( el => {
    el.classList.toggle('active');
  });
}

var tblScrollContainer = document.getElementById('scroll-container');
var tblScrollItem = document.getElementById('scroll-item');
var tblLeftScrollArrow = document.getElementById('scroll-hint-left');
var tblRightScrollArrow = document.getElementById('scroll-hint-right');

setScrollHints()
tblScrollContainer.onscroll = setScrollHints;
window.addEventListener("resize", setScrollHints);


let titleRow = document.querySelectorAll('.table-row.title');

window.onscroll = function() {
  for (let i = 0; i < titleRow.length; i++) {
    if ( titleRow[i].nextElementSibling.getBoundingClientRect().top < titleRow[i].offsetHeight ) {
      titleRow[i].style.top = (titleRow[i].offsetHeight - (titleRow[i].nextElementSibling.getBoundingClientRect().top)) + "px";
      titleRow[i].classList.add('scrolling');
    } else {
      titleRow[i].style.top = "0px";
      titleRow[i].classList.remove('scrolling');
    }
  }
}

function setScrollHints() {
  if (tblScrollItem.scrollWidth - tblScrollContainer.scrollLeft === tblScrollItem.scrollWidth) {
    if (tblLeftScrollArrow.classList.contains('active')) {
      tblLeftScrollArrow.classList.remove('active');
      tblScrollItem.classList.remove('active');
      console.log('Left Arrow Deactivated');
    }
  } else {
    if (!tblLeftScrollArrow.classList.contains('active')) {
      tblLeftScrollArrow.classList.add('active');
      tblScrollItem.classList.add('active');
      console.log('Left Arrow Activated');
    }
  }
  
  if (tblScrollItem.scrollWidth - tblScrollContainer.scrollLeft === tblScrollContainer.clientWidth) {
    if ( tblRightScrollArrow.classList.contains('active') ) {
      tblRightScrollArrow.classList.remove('active');
      console.log('Right Arrow Deactivated');
    }
  } else {
    if (!tblRightScrollArrow.classList.contains('active')) {
      tblRightScrollArrow.classList.add('active');
      console.log('Right Arrow Activated');
    }
  }
}