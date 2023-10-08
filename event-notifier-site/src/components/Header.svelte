<script>
  import { Link } from "svelte-navigator";
  
</script>

<nav class="navbar navbar-expand-xl navbar-light bg-light bgcolor-primary" >
  <div class="container-fluid">
    <Link class="navbar-brand " to="#" >
      <img src="./pictures/logo.jpg"  width="50px" alt="MinistryLogo" height="50px" />
      <span>Ministry of Interior</span>
    </Link>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="#navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" to="Contact"><a>ارتباط به ما</a></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="About"><a>در باره ما</a></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="Services"><a>خدمات ما</a></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="MediaCenter"><a>اخبار مهم</a></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="InformUs"><a>به ما اطلاع دهید</a></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" to="Home"><a>صفحه اصلی</a></Link>
        </li>
        
        
        
        
        
        <li >
          <input type="search" class="form-control" id='search' name='search'/>
        </li>
        <li>
          <img
            src="./pictures/sIcon.jpg"
            alt="icon"
            style="height:37px;border-radius:3px;"
          />
        </li>
      </ul>
    </div>
  </div>
</nav>

<style>
  a{
    font-size:20px;
    font-family:sans-serif;
    width:20px;
    margin:5px;
    color: #4b4c4d;
    text-decoration: none;
    padding:10px;
  }
  
  
  a:hover{
    color:darkgrey;
    
    
  }
  
  
</style>
