console.log('connected');
var petArray =[{
    name: 'Spot',
    text: "Big Baby with pretty spots",
    picture: "./petPage/Spot.jpeg"
    
},
{
    name: 'Bella',
    text: "So cute and loves to play with toys",
    picture: "./petPage/Bella.jpeg"
    
},
{
    name: 'Charlie', 
    text: "Clingy, hates being alone, great for carrying",
    picture: "./petPage/Charlie.jpeg"
},
    
   
{
    name: 'Daisy',
    text: "Very hype most of time, might bit or nibble if you get your fingers too close to mouth",
    picture: "./petPage/Daisy.jpeg"
    
},
{
    name: 'Mike',
    text: "Definitly need to be active and strong for this dog, fun but only with owner",
    picture: "./petPage/buff.jpeg"
    
}
]

var Pets ='';
for (var i = 0; i < petArray.length; i++){
    var title = "<div class='body'<h2>" + petArray[i].name +"</h2>";
    var body = "<p class='text'>"+ petArray[i].text + "</p></div><div id='adddiv'> <button id='add'>Add To Cart</button></div></div>";
    var image ='<div class="dog"><div class="head"><img id="pic" src="./'+ petArray[i].picture + '"></div>';
    var Combine =  image + title + body;
    Pets = Pets + Combine;
}
    console.log(Pets);
    document.getElementById('animals').innerHTML = Pets;
