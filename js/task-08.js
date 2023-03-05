    //Napisz skrypt zarządzania formularzem logowania.
    //Opracowanie przesyłania formularza form.login-form powinno przebiegać 
    //zgodnie ze zdarzeniem submit.

    //Podczas przesyłania formularza strona nie powinna się restartować.
    // Jeśli w formularzu są nieuzupełnione pola, wprowadź alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
    // Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, zbierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
    // Umieść obiekt z wprowadzonymi danymi do wiersza poleceń i wyczyść wartości pól formularza metodą reset.

//1 variable whole form
//2 two v.
//3 variable arrow
//3a elements????? 
//5  if 
//6 form.addEventListener("submit", variable whole f)


    const loginForm = document.querySelector(".login-form");
    const emailValue = document.querySelector('input[type = "email"]');
    const passwordValue = document.querySelector('input[type = "password"]'); 

    const submitValidResponse = (event) => {
        event.preventDefault(); 
        const {
            elements: {email, password}, 
        } = event.currentTarget; 

     
        if(email.value === "" || password.value === "") {
           return alert("Proszę uzupełnić wszystkie dane");
        } else {

            const loginValue = { email: emailValue.value, password: passwordValue.value }; 
            console.log(loginValue); 
            
        }
            
    } 
    loginForm.addEventListener("submit", submitValidResponse); 
    

