// Add your code here
function submitData(userName, userEmail) {
    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
    },
    body: JSON.stringify({
        name: `${userName}`,
        email: `${userEmail}`,
    })
};
return fetch("http://localhost:3000/users", configObj)
    .then(res => res.json())  
    .then(body => addNewContact(body.id))

    .catch(alertMessage => {
        alert(`Unauthorized Access`)
        console.log(alertMessage)
        document.body.append(alertMessage)
    })

}

function addNewContact(newID) {
    document.getElementsByTagName("body").innerHTML = newID;
    document.body.append(newID)
}

// function errorMessage(errors) {
//     document.getElementsByTagName("body").innerHTML = errors.message;
//     document.body.append(errors)
// }