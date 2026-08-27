(function(){
  function fill(img){
    var id = img.getAttribute("data-img");
    var n = parseInt(img.getAttribute("data-parts"), 10);
    var dir = img.getAttribute("data-dir") || "img/";
    var parts = [];
    var i = 0;
    function next(){
      if(i>=n){ img.src = "data:image/jpeg;base64," + parts.join(""); return; }
      fetch(dir + id + "." + i + ".txt").then(function(r){ return r.text(); }).then(function(t){
        parts.push(t.trim()); i++; next();
      }).catch(function(){ img.alt = "图加载失败"; });
    }
    next();
  }
  document.querySelectorAll("img[data-img]").forEach(fill);
})();
