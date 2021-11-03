let categorie = document.getElementById('cat');
let liste = document.getElementById('liste-matiere');

categorie.addEventListener('click', function(){
    this.children(liste).css('display', 'block')
})

categorie.addEventListener('click', function(){
    this.children(liste).css('display', 'none')
})