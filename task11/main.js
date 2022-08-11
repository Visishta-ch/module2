var username = document.getElementById('name').value.trim();
var usermail = document.getElementById('email').value.trim();
var DetailsObj = {
    name: username,
    email: usermail
    };
document.
        getElementById('my-form').addEventListener('submit',function(e) {
            e.preventDefault();
            var username = document.getElementById('name').value.trim();
            var usermail = document.getElementById('email').value.trim();

            var DetailsObj = {
                name: username,
                email: usermail
              };

              localStorage.setItem('DetailsObj',JSON.stringify(DetailsObj));

              var fetchObj = JSON.parse(localStorage.getItem('DetailsObj',JSON.stringify(DetailsObj))
              );
              console.log(fetchObj);
              
        });
var fetchObj = JSON.parse(localStorage.getItem('DetailsObj',JSON.stringify(DetailsObj))
        );
        console.log(fetchObj);
         



