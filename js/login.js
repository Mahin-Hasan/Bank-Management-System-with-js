//step:1 add event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // console.log('submit btn working')
    //step:2 get email address inside the email input field
    //always rememebr to use . value to get text from an input field
    const emailField =document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);  // checking email box input working or not
    
    //setp:3 get password
    //3.a.set id on the html element
    //3.b: get the element
    //3.c: get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email,password); // checking typed in email and password box are get or not
    
    //DO NOT Verify email or password in clent side
    //step:4 varify email and password and check whether valid user or not
    if(email==='mahinmtrs@gmail.com'&& password ==='r15v2celica'){
        // console.log('valid user');
        window.location.href = 'bank.html'
    }
    else{
        // console.log('Invalid user');
        alert('Tui Password bhule gesos')
    }



})