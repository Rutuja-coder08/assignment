window.onload = function(){
    console.log("inside script js");
     const btnSave = document.getElementById("save")
     const btnCancel = document.getElementById("cancel")
     const txtName= document.getElementById("txtName")
     const txtDOB= document.getElementById("dob")
     const txtGender= document.getElementById("gender")
     const txtPOB= document.getElementById("pob")
     const txtBloodGrp= document.getElementById("bG")
     const txtHeight= document.getElementById("height")
     const txtWeight= document.getElementById("weight")
 
     btnSave.addEventListener("click", event => {
         event.preventDefault();
         fetch("http://localhost:9000/patient/creation",{
             method : "POST",
             body : JSON.stringify({
                 name : txtName.value,
                 dateOfBirth :txtDOB.value,
                 gender : txtGender.value,
                 placeOfBirth : txtPOB.value,
                 bloodGroup : txtBloodGrp.value,
                 height : txtHeight.value,
                 weight : txtWeight.value
             }),
             headers : {
                 "Content-Type" : "application/json"
             }
         })
         .then(response => response.json())
         .then(result => {
             console.log(result);
 
         })
         .catch(console.error)
     })
 
 
    
 
 }