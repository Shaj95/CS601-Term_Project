function validateForm(){
    var firstName = document.getElementById("firstName");
    if (firstName.value.length < 2){
        alert("Sorry: first name should be atleast two characters");
        firstName.focus();
        return false;
    }

    var lastName = document.getElementById("lastName");
    if (lastName.value.length < 2){
        alert("Sorry: last name should be atleast two characters");
        lastName.focus();
        return false;
    }

    var email = document.getElementById("email");
    if (email.value != "jhmlogic@bu.edu"){
        alert("Sorry: please make sure the email is in the form: jhmlogic@bu.edu");
        email.focus();
        return false;
    }
    var message = document.getElementById("message");
    if (message.value.length < 30){
        alert("Sorry: Please enter a message of at least 30 characters before you submit");
        message.focus();
        return false;
    }

    else {
        return true;
    }
}