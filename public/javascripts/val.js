function OnVal(){
  $ajax{
        type: $(this).attr("method"), // Récupère la méthode d'envoi du formulaire, ici "POST"
        url: $(this).attr("/"), // Récupère l'url du script qui reçoit la requête, ici "add.php"
        data: $(this).serialize(), // Fabrique la "query string" contenant les deux nombres
        success: OnSuccess // Callback qui récupère la réponse du serveur
        }

  }

$('#signup-username').val()
 password: $('#signup-password').val()
 firstname: $('#signup-firstname').val()
 lastname: $('#signup-lastname').val()
 email: $('#signup-email').val()
 
