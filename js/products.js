console.log('connected');
var productArray =[{
    name: 'Blue Buffalo',
    text: "Great dog food with real meat and veggies.",
    picture: "./productPage/blue.jpg"
    
},
{
    name: 'Meow Mix',
    text: "Cats need good food too",
    picture: "./productPage/meowMix.jpeg"
    
},
{
    name: 'Dog Rope', 
    text: "Play tug of war with your little friend",
    picture: "./productPage/dogRope.jpeg"
},
    
   
{
    name: 'Balls (small, medium, Large)',
    text: "holey balls",
    picture: "./productPage/balls.jpeg"
    
},
{
    name: 'Smile',
    text: "goofy chew toy for any animal with teeth",
    picture: "./productPage/goofyToy.jpeg"
    
},
{
    name: 'Bones',
    text: "Dont let em eat yours",
    picture: "./productPage/dogbone.jpeg"
}
]

var Pets ='';
for (var i = 0; i < productArray.length; i++){
    var title = "<div class='body'<h2>" + productArray[i].name +"</h2>";
    var body = "<p class='text'>"+ productArray[i].text + "</p></div><div id='adddiv'> <button id='add'>Add To Cart</button></div></div>";
    var image ='<div class="dog"><div class="head"><img id="pic" src="./'+ productArray[i].picture + '"></div>';
    var Combine =  image + title + body;
    Pets = Pets + Combine;
}
    console.log(Pets);
    document.getElementById('animals').innerHTML = Pets;
