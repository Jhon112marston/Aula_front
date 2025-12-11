

document.getElementById("btnScroll").addEventListener("click", function() {
  document.getElementById("bloco2").scrollIntoView({
      behavior: "smooth"
  });
});


document.getElementById("btnVoltar").addEventListener("click", function() {
  document.getElementById("bloco1").scrollIntoView({
      behavior: "smooth"
  });
});
