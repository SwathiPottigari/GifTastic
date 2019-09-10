var userAnimal;
var animalArray=["Cat","Dog"];
var buttonsDiv=$("#buttonsDiv");


// This function is called when a page is loaded
// It creates the buttons for the alredy existing array items
window.onload=function(){
    for(var i=0;i<animalArray.length;i++)
    {
       var newButton=$("<button>");
       newButton.text(animalArray[i]);
       buttonsDiv.append(newButton);
    }
};

// This function is called on click of the Add button
// Functioanlity: To create buttons for the user entered values
$("#submit").click(function(){
    userAnimal=$("#animal").val();    
    addAnimalToList(userAnimal);
    $("#animal").val('');
});

// This function is used to 
function addAnimalToList(animalname){
    var newButton=$("<button>");
       newButton.text(animalname);
       buttonsDiv.append(newButton);
       animalArray.push(animalname);
       console.log(animalArray);
};


