
// JavaScript code 

function search_game() { 

    let input = document.getElementById('searchbar').value 

    input=input.toLowerCase(); 

    let x = document.getElementsByClassName('photo');
    let y = document.getElementsByClassName('photo1'); 

      

    for (i = 0; i < x.length; i++) {  

        if (!x[i].innerHTML.toLowerCase().includes(input)) { 

            x[i].style.display="none"; 

        } 

        else { 

            x[i].style.display="list-item";
               
        } 

    } 


    for (i = 0; i < y.length; i++) {  

        if (!y[i].innerHTML.toLowerCase().includes(input)) { 

            y[i].style.display="none"; 

        } 

        else { 

            y[i].style.display="list-item";
               
        } 

    } 

} 