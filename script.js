var imgs = document.getElementById("imgs").children;
var searchElm = document.getElementById("search-elm");


function tap() {
    var block = document.getElementById("imgs");
    block.style.display = 'none'
    searchElm.style.display = 'flex';
    var search = document.getElementById("search").value.toLowerCase();
    searchElm.innerHTML = '';
    if(search == ''){
        block.style.display = 'flex';
        searchElm.style.display = 'none';
    }
    var j=0;
    for(let i=0;i<imgs.length;i++){
        if(imgs[i].name.toLowerCase().indexOf(`${search}`) != -1){
            var sElm = document.createElement('img');
            sElm.setAttribute("src",imgs[i].src);
            searchElm.appendChild(sElm);
            j++;
        }
    }
    if(j==0){
        alert("no match found");
        block.style.display = 'flex';
        searchElm.style.display = 'none';
    }
}





