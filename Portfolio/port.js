<script>https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.10/typed.js</script>  
    <script> 
    var togglebtn=document.querySelector(".togglebtn")
    var nav=document.querySelector(".navlinks")
    var links=document.querySelector(".navlinks li")
    togglebtn.addEventListener("click", function(){
        this.classList.toggle("click");
        nav.classList.toggle("open");
                               })
        
        var typed=new typed(".input",{
            strings:("Frontend Developer", "Data Scientist","Project Manager"),
            typedspeed:70,
            backspeed: 55,
//            smartbackspace:true,
            loop:true
        }) 
    </script>