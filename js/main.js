/* TASK MAIL CHECK */
//1. create an array with 3 mail address and store in a variable
const emailList = ['cicciopasticcio@gmail.com', 'tiziocaio@hotmail.com', 'pincopallino@gmail.com'];
console.log(emailList);

//2. add event click on button Log In
const btnLogIn = document.querySelector('.access');
console.log(btnLogIn);
btnLogIn.addEventListener('click', function() {
    //3. select in html user input of mail address
    const userEmailInput = document.getElementById('mail');
    const userEmail = userEmailInput.value.trim().toLowerCase();
    console.log(userEmail);

    //4. compare with the list
    if (userEmail === '') {
        alert('Error. Plase type a valid address')
    }
    //5. if user input is an array's element do access, else don't.
    else {
        let userFound = false;
        const feedback = document.getElementById('feedback');
        for(let i = 0; i < emailList.length; i++) {
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