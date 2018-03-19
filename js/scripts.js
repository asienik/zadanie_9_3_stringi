var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.'
var dinosaur = 'triceratops';
var dinozaurUpperCased = dinosaur.toUpperCase();

var textReplace = text.replace('Velociraptor', dinozaurUpperCased);

console.log(textReplace.substr(0, text.length/2));

