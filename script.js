
(function() {
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener)
    }
  
    /**
     * Header fixed top on scroll
     */
    let selectHeader = select('#home')
    if (selectHeader) {
      let headerOffset = selectHeader.offsetTop
      let nextElement = selectHeader.nextElementSibling
      const headerFixed = () => {
        if ((headerOffset - window.scrollY) <= 0) {
          selectHeader.classList.add('fixed-top')
          nextElement.classList.add('scrolled-offset')
        } else {
          selectHeader.classList.remove('fixed-top')
          nextElement.classList.remove('scrolled-offset')
        }
      }
      window.addEventListener('load', headerFixed)
      onscroll(document, headerFixed)
    }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top')
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 100) {
          backtotop.classList.add('active')
        } else {
          backtotop.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleBacktotop)
      onscroll(document, toggleBacktotop)
    }
  
        /**
     * Social Media
     */
    let socialmedia = select('.social-media')
    if (socialmedia) {
      const toggleSocialMedia = () => {
        if (window.scrollY > 500) {
            socialmedia.classList.add('active')
        } else {
            socialmedia.classList.remove('active')
        }
      }
      window.addEventListener('load', toggleSocialMedia)
      onscroll(document, toggleSocialMedia)
    }
   
  })()


// --------for search all pages----

  $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#forsearch *").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });