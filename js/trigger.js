
        function trigger(action_id) {

          xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange= function() {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {


              var data = JSON.parse(xmlhttp.responseText);
              var response = data['events']['local'];
              console.log(response);
              for(var i=0;i<response.length;i++){
                var change = response[i]['changes'];
                for(var j=0;j<change.length;j++ ){
                 document.getElementById('updating').innerHTML = change[j]['delta']['new'];
                 alert("You performed a action:" + action_id);
                 var x = (change[j]['delta']['new'] - change[j]['delta']['old']);
                 switch(change[j]['metric']['type']){

                  case 'point':
                  if(x > 0)
                  {
                    alert("Points gained:" + x);
                    break;

                  }
                  else
                  {
                    alert("Points Loosed:" +  x);
                    break;
                  }
                }
             /*if(action_id == "Comment")
             {
              alert("You are awarded with 20");
             }
             else if(action_id == "Like")
             {
              alert("You are awarded with 5");
             }
             else if(action_id == "Login")
             {
              alert("You are awarded with 10");
             }
             else if(action_id == "Spam")
             {
              alert("You looses 15");
             }
             */
           }

         }
         
       }
     }

     xmlhttp.open("POST","trigger.php",true);
     xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
     xmlhttp.send("action_id=" + action_id);

   }


