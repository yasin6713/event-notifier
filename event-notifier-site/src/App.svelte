<script>
  import Footer from "./components/Footer.svelte";
  import { Router, Route } from "svelte-navigator";
  import Blog from "./pages/site/Home.svelte";
  import About from "./pages/site/About.svelte";
  import Contact from "./pages/site/Contact.svelte";
  import Header from "./components/Header.svelte";
  import Services from "./pages/site/Services.svelte";
  import MediaCenter from "./pages/site/MediaCenter.svelte";
  import InformUs from "./pages/site/InformUs.svelte";
    import Home from "./pages/site/Home.svelte";
</script>

<main>
  <Router>
    <Header />
    <div>
      <Route path="Home" component={Home} />
      <Route path="InformUs" component={InformUs} />
      <Route path="MediaCenter" component={MediaCenter} />
      <Route path="Services" component={Services} />
      <Route path="About" component={About} />
      <Route path="Contact" component={Contact} />
    </div>
   
  </Router>


<Footer />

</main>

<style>

</style>
