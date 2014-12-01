/*function OnVal(){
var Username= #{'Username'};
var password = #{'password'};
}*/

jQuery(document).ready(function ($){ // Abonne le callback à exécuter lorsque tout le DOM est chargé
function OnReady(){
    $("form1").submit(OnVal); // Abonne un callback à l'évènement "submit" du formulaire
}
function OnVal(){
//alert("Hello");
   var $this = $(this); // L'objet jQuery du formulaire
/*var Username = $('#Username').val();
var password = $('#password').val();*/
  $.ajax({
url: $this.attr('/'), // Le nom du fichier indiqué dans le formulaire
type: $this.attr('POST'), // La méthode indiquée dans le formulaire (get ou post)
data: $this.serialize(), // Je sérialise les données (j'envoie toutes les valeurs présentes dans le formulaire)
success: function(html) { // Je récupère la réponse du fichier PHP
            alert(html); // J'affiche cette réponse
            }
  });
}

});
