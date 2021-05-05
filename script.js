function generatorCat() {
    var image = document.createElement("img");
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
    div.appendChild(image);
    const catInput = document.getElementById("cat-count");
    const catCount = parseInt(catInput.value);
    const catNewCount = catCount + 1;
    catInput.value = catNewCount
}