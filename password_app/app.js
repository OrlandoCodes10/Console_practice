const password = prompt("please enter a new password");

// Password must be 6+ characters
if (password.length >=6) {
    console.log("LONG ENOUGH PASSWORD")
} else {
    console.log("PASSWOrD tOO SHORT! Must be 6+ characters")
}

//Password cannot include space

if (password.indexOf(' ') === -1) {
    console.log("Good job! NO space!")
} else {
    console.log("Can't put space")
}