function toggleMenu(){
    const menu =document.querySelector(".menu-links");
    const icon =document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


window.onload = function() {
    // Remove the hash from the URL
    if (window.location.hash) {
      history.replaceState(null, null, window.location.pathname);
    }
  
    // Scroll to the top of the page after removing the hash
    window.scrollTo(0, 0);
  };

  var typed = new Typed(".typing", {
    strings: ["Web Developer", "App Developer" , "AI/ML Enthusiast"],
    typeSpeed: 100, 
    backSpeed: 60, 
    loop: true 
});


// const form = document.getElementById('contactForm');

//   form.addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent default form submission

//     const formData = new FormData(form);

//     fetch(form.action, {
//       method: 'POST',
//       body: formData,
//     })
//     .then(response => {
//       if (response.ok) {
//         alert('Message sent successfully!');
//         form.reset(); // Clear form
//       } else {
//         alert('Something went wrong. Please try again!');
//       }
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       alert('Error sending message.');
//     });
//   });

  // conatct form button script

const form = document.getElementById("contactForm");
const sendBtn = document.querySelector(".send-btn");
const planePath = sendBtn.querySelector(".circle");
const planeIcon = sendBtn.querySelector(".plane-icon");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // VERY IMPORTANT!

  // Start animation
  planePath.classList.add("rotateCircle");
  planeIcon.classList.remove("hide");

  const formData = new FormData(form);

  try {
    const res = await fetch("https://formsubmit.co/ajax/mullamohammedali99@gmail.com", {
      method: "POST",
      body: formData
    });

    if (res.ok) {
      setTimeout(() => {
        planeIcon.classList.add("hide");
        planePath.classList.remove("rotateCircle");
      }, 2750);

      setTimeout(() => {
        sendBtn.classList.add("checked");
        sendBtn.innerHTML = "SENT";
      }, 3000);

      setTimeout(() => {
        sendBtn.innerHTML = `
          <div class="circle">
            <i class="fa-solid fa-paper-plane plane-icon hide"></i>
          </div>
          Send
        `;
        sendBtn.classList.remove("checked");
        form.reset(); // Clear form
      }, 4000);
    } else {
      alert("Error sending message.");
    }
  } catch (err) {
    alert("Error occurred. Try again.");
  }
});
