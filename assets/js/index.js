
/*
const slides = document.querySelectorAll('.slide');
        let currentIndex = 0;
      
        function showSlide(index) {
          slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
          });
        }
      
        function nextSlide() {
          currentIndex = (currentIndex + 1) % slides.length;
          showSlide(currentIndex);
        }
      
        function prevSlide() {
          currentIndex = (currentIndex - 1 + slides.length) % slides.length;
          showSlide(currentIndex);
        }

        function showSlide(index) {
          slides.forEach((slide, i) => {
          slide.style.transform = `translateX(-${100 * index}%)`;
  });
}*/



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









