
(function(){
  emailjs.init("service_w1q33tf");
})();

function SendMail(){

  var fullName = document.getElementById("fullName").value.trim();
  var email = document.getElementById("email_id").value.trim();
  var message = document.getElementById("message").value.trim();

  if (fullName === "") {
    alert("Il nome è obbligatorio.");
    return;
}

if (email === "") {
    alert("L'email è obbligatoria.");
    return;
}

if (!validateEmail(email)) {
    alert("Inserisci un'email valida.");
    return;
}

if (message === "") {
    alert("Il messaggio è obbligatorio.");
    return;
}

var params = {
    from_name: fullName,
    email_id: email,
    message: message,
};


emailjs.send("service_w1q33tf","template_8l3o1ob",params)
.then(function(res){
      alert("your message sent successfully"+res.status);
  })
  
  .catch(function(error) {
    alert("Si è verificato un errore durante l'invio del messaggio: " + JSON.stringify(error));
});

}

function validateEmail(email) {
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}









