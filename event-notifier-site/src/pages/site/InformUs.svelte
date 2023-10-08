<script>
    import { onMount } from "svelte";
    import AddEvent from "../../components/AddEvent.svelte";
    import axios from "axios"
    onMount(()=>{
        axios.get("http://localhost:2000/").then(res =>{ console.log("res",res)}).catch(e=>console.log(e))
    })
    
</script>


<main>
    
    
    <AddEvent />

   
</main>

<style>
    .n{
        background-color: beige;
        height:10vh;
        width:30vw;
        margin:0 auto;
        text-align: center;
        border-radius: 5px;
    }
    /* main {
        background-image: url("./pictures/backgroundMinistry.jpeg");
        height: 80vh;
        margin:0 auto;
        text-align: center;

    } */
    /* }
    input{
        border-radius:4px;
    }
    textarea{
        border-radius:4px;
    }
    p{
        color:red
    }*/




</style>
