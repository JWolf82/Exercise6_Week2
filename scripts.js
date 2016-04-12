var viewForm = document.getElementById("viewForm")
var theForm = document.getElementById("updateForm")

viewForm.addEventListener('click', function(){
    if(theForm.style.display == "none"){
    theForm.style.display = "inherit"
    viewForm.innerHTML = "Hide Form"
    }
    else {
    theForm.style.display = "none"
    viewForm.innerHTML = "View Form"
    }
})


var nameInput = function(){
    document.getElementById("name1").innerHTML = nameData.value
}

document.getElementById("submitButton").addEventListener('click',nameInput)

var bioInput = function(){
    document.getElementById("bio1").innerHTML = bioData.value
}

document.getElementById("submitButton").addEventListener('click',bioInput)

var bookInput = function(){
    document.getElementById("book1").innerHTML = bookData.value
}

document.getElementById("submitButton").addEventListener('click',bookInput)

var jsInput = function(){
    document.getElementById("jsLibrary1").innerHTML = jsData.value
}

document.getElementById("submitButton").addEventListener('click',jsInput)