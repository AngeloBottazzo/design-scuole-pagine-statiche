function accordion(){$(".accordion-header").toggleClass("accordion-inactive"),$(".accordion-content").toggleClass("accordion-closed"),$(".accordion-header").click(function(){$(this).is(".accordion-inactive")&&$(".accordion-active").toggleClass("accordion-active accordion-inactive").next().slideToggle().toggleClass("accordion-open"),$(this).toggleClass("accordion-active accordion-inactive"),$(this).next().slideToggle().toggleClass("accordion-open")}),$(".accordion-header").keydown(function(o){13==o.which&&(o.preventDefault(),$(this).is(".accordion-inactive")&&$(".accordion-active").toggleClass("accordion-active accordion-inactive").next().slideToggle().toggleClass("accordion-open"),$(this).toggleClass("accordion-active accordion-inactive"),$(this).next().slideToggle().toggleClass("accordion-open"))})}