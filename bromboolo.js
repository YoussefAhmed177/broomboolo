function validte() {
    let x = document.getElementById("txt").value
    let y = document.getElementById("tel").value
    let w = document.getElementById("email").value
    let f = document.getElementById("password").value
    let z = document.getElementById("e").value
    let u = document.getElementById("bb")
    if (x === "" || y === "" || w === "" || f === "" || z === "" || e === "") {
        alert(" you must complete all input ")
    }
    else if (w.indexOf("@") === -1 || w.indexOf(".") === -1) {
        alert("Wrong email")
    }
    else if (y.length < 11 || y.length > 16) {
        alert("your number must beetwen 11 and 15")
    }
    else if (f.length < 6 || f.length > 10) {
        alert("your password must beetwen 6 and 10")
    }
    else if (x.length < 5 || x.length > 16) {
        alert("your name must beetwen 5 and 15")
    }
    else {
        let r = document.getElementById("bb")
        r.setAttribute("href", "home.html")
    }
}


  