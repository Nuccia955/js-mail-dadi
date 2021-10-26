/* TASK MAIL CHECK */
//1. create an array with at least 3 mail address and store in a variable
const emailList = ['cicciopasticcio@gmail.com', 'tiziocaio@hotmail.com', 'pincopallino@gmail.com'];

//2. add event click on button Log In
const btnLogIn = document.querySelector('.access');
btnLogIn.addEventListener('click', function() {
    //3. select in html user input of mail address
    const userEmailInput = document.getElementById('mail');
    const userEmail = userEmailInput.value.trim().toLowerCase();

    if (userEmail === '') { //alert for <empty string>
        alert('Error. Plase type a valid address')
    }
    //4. compare user input with the list
    else { 
        let userFound = false;
        const feedback = document.getElementById('feedback');
        for(let i = 0; i < emailList.length; i++) {
            //5. if user input is an array's element do access, else don't.
            if (userEmail === emailList[i]) {
                userFound = true;
                break;
            }
        }
        //6. Print feedback in html document 
        if (userFound === true) {
            feedback.innerHTML = ': Access succeeded';
        }
        else {
            feedback.innerHTML = ': Access denied';
        }  
    }
})