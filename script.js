let prevScrollpos=window.pageYOffset;const header=document.getElementById("header");window.onscroll=function(){let e=window.pageYOffset;prevScrollpos>e?header.classList.remove("header-hidden"):header.classList.add("header-hidden"),prevScrollpos=e};
