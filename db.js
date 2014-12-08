 // var levelup = require ('level');
 // var  path = levelup ("/tmp/db");
 // var db = new db();

 //module.exports=db;

//db.open({create_if_missing: true}, path);
// //module.exports =
             db.put(
             pseudo = ('#username'),
             {
                 name      :  username = ('#username'),
                 password  :  password = ('#password'),
                 lastname  :  lastname = ('#lastname'),
                 email     :  email = ('#email'),
             }
           , function (err) {
               db.get(pseudo, function (err, value) {
                 console.log(pseudo, value)
                 db.close()
               })
             }
           )
//
// // Si les identifiants de l utilisateur correspondent à ceux d un utilisateur stocké dans la base de données leveldb,
// // alors le formulaire de login doit disparaitre pour laisser place à un écran d accueil de l utilisateur,
// //  autrement un message doit appairaitre indiquant à l utilisateur que le login/email ou password est incorrecte.
// //  La requete ajax envoie le login(username ou email) et le password,
// // le serveur repond avec soit un object user (sans son password) soit un message de validation et un object user a null.
//         db.get(
//     // 'messages'
//     // if(messages ===)
//     //
//     //
//     // , function(err) {
//     //     if (err) alert(err.message)
//     //   }
//     )
//
//
//     db.del(
// // 'messages', function(err) {
// //     if (err) alert(err.message)
// //
// )
