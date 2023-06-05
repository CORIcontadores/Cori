var loginForm = document.getElementById('loginForm');
var registerForm = document.getElementById('registerForm');
var loginToggle = document.getElementById('log');
var registerToggle = document.getElementById('register');
var client=document.getElementById('client');
var conta=document.getElementById('conta');
var s=document.getElementsByClassName('s');
var filled=document.querySelectorAll('fill');
var inputXML = document.getElementById("xmlCedProf");
var usuario={};



loginToggle.addEventListener('click', function() {
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
});

registerToggle.addEventListener('click', function() {
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});
client.addEventListener('click', function () {
    upCert.style.display = 'none';
    document.getElementById('universityInput').hidden=true;
    document.getElementById('dateTermInput').hidden=true;
    document.getElementById('nameCInput').hidden=true;
    document.getElementById('curpInput').hidden=true;
    document.getElementById('stateInput').hidden=true;
})
conta.addEventListener('click', function () {
    upCert.style.display = 'block';
    document.getElementById('universityInput').hidden=false;
    document.getElementById('dateTermInput').hidden=false;
    document.getElementById('nameCInput').hidden=false;
    document.getElementById('curpInput').hidden=false;
    document.getElementById('stateInput').hidden=false;
    filled.forEach(element => {
        element.disabled = true;
      });
})
 const guardarDatos=(campo)=>{
    usuario;
}
inputXML.addEventListener('input',()=>{
    var archivo = document.getElementById("xmlCedProf").files[0];
    var lector = new FileReader();
  
    lector.onload = function (evento) {
      var contenidoXml = evento.target.result;
      var texto = contenidoXml.toString();
      //console.log(texto);
      let n=texto.split(`"`);
      console.log(n);
      let lnp=document.getElementById('lastNameInput1').value=n[71];
      guardarDatos('apellidoPaterno',lnp);
      let lnm=document.getElementById('lastNameInput2').value=n[73];
      guardarDatos('apellidoPaterno',lnm);
      let np=document.getElementById('nameInput').value=n[69];
      guardarDatos('apellidoPaterno',np);
      let ui=document.getElementById('universityInput').value=n[53];
      guardarDatos('apellidoPaterno',ui);
      let dtt=document.getElementById('dateTermInput').value=n[61];
      guardarDatos('apellidoPaterno',dtt);
      let nc=document.getElementById('nameCInput').value=n[57];
      guardarDatos('apellidoPaterno',nc);
      let curp=document.getElementById('curpInput').value=n[67];
      guardarDatos('apellidoPaterno',curp);
      let state=document.getElementById('stateInput').value=n[93];
      guardarDatos('apellidoPaterno',state);
      let email=document.getElementById('emailInput').value=n[75];
      guardarDatos('apellidoPaterno',email);
      let cedule=document.getElementById('ceduleInput').value=n[7];
      guardarDatos('apellidoPaterno',cedule);
    };
  
    lector.readAsText(archivo);
});

