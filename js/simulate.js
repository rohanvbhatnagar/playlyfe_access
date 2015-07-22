
  function simulator()
  {
    console.log("jbajk");
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange= function() {
      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        document.getElementById('simulate').innerHTML=xmlhttp.responseText;
        
      }
    } 

    xmlhttp.open("POST","simulate.php",true);
    xmlhttp.send();
  }
