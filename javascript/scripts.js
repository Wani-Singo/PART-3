const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('navLinks');

if(menuToggle && navLinks){
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}
document.addEventListener('DOMContentLoaded', function (){
    const contactForm = document.getElementById('contactForm');
    const Messagebox = document.getElementById('Messagebox');

    if(contactForm){
        contactForm.addEventListener('submit', function (event){
            event.preventDefault();
            const name = document.getElementById('userName').value.trim();
            const email = document.getElementById('userEmail').value.trim();
            const message = document.getElementById('userMessage').value.trim();
            const age = document.getElementById('userAge').value.trim();
            const activity = document.getElementById('userActivity').value.trim();
            const genderSelected = document.querySelector('input[name=gender]:checked');

        if (Messagebox){
            Messagebox.style.display = 'none';
            Messagebox.className = "";
         }
        if(name=== ""){
            Messagebox.innerText = "Please enter your name.";
            Messagebox.className = "error";
            Messagebox.style.display = 'block';
            return;
        }
        if(email=== ""){
            Messagebox.innerText = "Please enter your email.";
            Messagebox.className = "error";
            Messagebox.style.display = 'block';
            return;
        }else if(!email.includes('@') || !email.includes('.')){
            Messagebox.innerText = "Please enter a valid email address.";
            Messagebox.className = "error";
            Messagebox.style.display = 'block';
            return;
        }
        if(age === ""){
            Messagebox.innerText = "Please enter your age.";
            Messagebox.className = "error";
            Messagebox.style.display = 'block';
            return;
        }
        if(activity === ""){
            Messagebox.innerText = "Please select your favorite activity.";
            Messagebox.className = "error";
            Messagebox.style.display = 'block';
            return;
        }
        if(!genderSelected){
            Messagebox.innerText = "Please select your gender,";
            Messagebox.className = "error";
            Messagebox.style.display = 'block';
            return;
        }
        if(message === ""){
            Messagebox.innerText = "Please enter your message.";
            Messagebox.className = "error";
            Messagebox.style.display = 'block';
            return;
        }
        contactForm.innerHTML ="";
        contactForm.appendChild(Messagebox);
        Messagebox.style.color = '#5C6E58';
        Messagebox.style.backgroundColor = '#C2D1C0';
        Messagebox.innerText = "Thank you, " + name + "! Your message has been received. A response summary will be sent to " + email + " shortly.";
        Messagebox.style.display = 'block';

    const myEmail = "wanisingo@gmail.com";
    const subject = "New Contact Form Submission from " + name;
    const body = "Name: " + name + 
                 "\nEmail: " + email +
                 "\nAge: " + age + 
                 "\nFavorite Activity: " + activity +
                 "\nMessage: " + message;
         window.location.href = "mailto:" + myEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    });
 }
});
 const menuItems =[ 
    "Cappuccino", 
    "Flat White", 
    "Macchiato", 
    "Caffe Mocha", 
    "v60 Specialty Coffee",
    "Iced Latte Matcha", 
    "Lindt Hot Chocolate", 
    "Red Bourbon Specialty Coffee", 
    "Girma Specialty Coffee",
    "Plain Croissant", 
    "Chocolate Croissant", 
    "Burnt Basque Cheesecake", 
    "Swedish Bun", 
    "Darch Choc Tahini Cookie"
 ]
 const suggestionButton = document.getElementById('suggestion-button');
 const suggestionText = document.getElementById('suggestion-text');

 function generateSuggestion(){
    const randomIndex = Math.floor(Math.random() * menuItems.length);
    const suggestion = menuItems[randomIndex];
    suggestionText.innerHTML = "We highly recommend our <b>" + suggestion + "</b>! today!";
 }

 suggestionButton.addEventListener('click', generateSuggestion);