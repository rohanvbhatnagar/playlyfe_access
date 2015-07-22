
  function create()
  {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange= function() {
      if (xmlhttp.readyState==4 && xmlhttp.status==200) {
        var data=xmlhttp.responseText;
        console.log(data);
      }
    } 

    xmlhttp.open("POST","create_action.php",true);
    var data1=new FormData(document.querySelector("form"));
    console.log(window.data = data1);
    xmlhttp.send(data1);
    return false;
    
  }
