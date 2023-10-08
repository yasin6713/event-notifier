<script>
    import { onMount } from "svelte";

    onMount(async ()=>{
        let data = await fetch("http://localhost:2000/").then(res=> res.json())
        console.log(data)
    })
    
</script>



<main>
   
</main>

