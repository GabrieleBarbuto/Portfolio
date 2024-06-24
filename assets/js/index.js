
function SendMail(){
  var params ={
      from_name: document.getElementById("fullName").value , 
      email_id: document.getElementById("email_id").value ,
      message: document.getElementById("message").value , 
  }

emailjs.send("service_w1q33tf","template_8l3o1ob",params)
.then(function(res){
      alert("your message sent successfully"+res.status);
  })
  
}









