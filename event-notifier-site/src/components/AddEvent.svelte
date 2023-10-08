<script>

    let values ={firstname:"",lastname:'',provence:'',district:'',email:'',PhoneN:'',description:''}
    let ErrorMessage ={firstname:"firstname",lastname:'lastname',provence:'',district:'',email:'',PhoneN:''}

     let hundleEvent = () =>{
        let valid = true;

        if(values.firstname.trim().length<3){
            ErrorMessage.firstname='your firstname is short!'
            valid = false;
        }
       else if(values.lastname.trim().length<3){
        ErrorMessage.lastname ='your last name is short!'
        valid = false
       }
       else{
        valid = true;
       }


        if(valid){
            console.log('valid',values)
        }
     }
        
    
</script>

<main>
  
        <form action="#" on:submit|preventDefault={hundleEvent} style="max-width:99%;">
            <div class="row" >
                <div class="col-xl-6">
                    <div class="card-body text-black">
                    <h3 class="mb-5 text-uppercase">Event registration!</h3>
        
                    <div class="row">
                        <div class="col-md-6 mb-4">
                        <div class="form-outline">
                            <input type="text"  class="form-control form-control-lg" bind:value={values.firstname} required />
                            <label class="form-label" for="form3Example1m">{ErrorMessage.firstname}</label>
                        </div>
                        </div>
                        <div class="col-md-6 mb-4">
                        <div class="form-outline">
                            <input type="text"  class="form-control form-control-lg" bind:value={values.lastname} required/>
                            <label class="form-label" for="form3Example1n">{ErrorMessage.lastname}</label>
                        </div>
                        </div>
                    </div>
    
        
                    <div class="row">
                        <div class="col-md-6 mb-4">
                        <div class="form-outline">
                            <input type="number"  class="form-control form-control-lg" bind:value={values.PhoneN} required/>
                            <label class="form-label" >PhoneN</label>
                        </div>
                        </div>
                        <div class="col-md-6 mb-4">
                        <div class="form-outline">
                            <input type="email"  class="form-control form-control-lg" bind:value={values.email} required/>
                            <label class="form-label" >Email</label>
                        </div>
                        </div>
                    </div>
    
                    
        
                    <div class="row">
                        <div class="col-md-2 mb-4">
                            <div class="form-outline">
                                <select class="select">
                                    <option value="1">provence</option>
                                    <option value="2">Kabul</option>
                                    <option value="3">Balck</option>
                                    <option value="4">Bamyan</option>
                                </select>
                            </div>
        
                        </div>
                        <div class="col-md-4 mb-4">
                            <div class="form-outline">
                            <input type="email" class="form-control form-control-lg" />
                            <label class="form-label" >destrict</label>
                            </div>
                        </div>
    
    
                        <div class="row">
                            <div class="col">
                                <div class="form-outline">
                                    <button class="btn btn-primary col-lg-12">sumbit Event</button>
                                </div>
                            </div>
                        </div>


                        
    
                        
                    </div>
                </div>
                </div>
    
        </form>


</main>

<style>

</style>