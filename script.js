window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
  
    if (verticalScrollPx > 500) {
      document.getElementsByClassName(headerr).style.backgroundColor = '#f00f64e3';
    } else {
      document.getElementsByClassName(headerr).style.backgroundColor = 'transparent';
    }
  });