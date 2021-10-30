document.getElementById("root").innerHTML = `

<div class="container">
    <header class="header">
        <a href="#">
            <img src="./img/logo.svg" alt="Logo" class="logo">
        </a>
       <div class="nav-bar">
           <nav>
                <ul class="nav-items">
                    <div><li><a class = "nav-links" href="#">Product</a></li></div>
                    <div><li><a class = "nav-links" href="#">Resources</a></li></div>
                   <div class="menu">
                       <button>Pricing</button>
                    <ul class="nav-sub-menu">
                        <li><a class = "nav-sub-links" href="#">Resources</a></li>  
                        <li><a class = "nav-sub-links" href="#">Resources</a></li>  
                        <li><a class = "nav-sub-links" href="#">Resources</a></li>  
                        <li><a class = "nav-sub-links" href="#">Resources</a></li>  
                    </ul>
                </div>
                </ul>
            </nav>
            <nav>
            <ul class="nav-items">
                <li><a class ="nav-links" href="#">Contact Sales</a></li>
                <li><a class ="nav-links" href="#">Log In</a></li>
                <li><a class="nav-links nav-cta" href="#">Start for Free</a></li>
            </ul>   
            </nav>
       </div>
    </header>
</div>

<section class="section-hero">
    <div class="hero">
        <div class="hero-text-box">
            <h1 class="heading-primary">
                Modern business intelligence for your entire organization
            </h1>
            <p class="heading-text">
                Powerful, easy to use data exploration and visualization platform, powered by open source Apache Superset™
            </p>
            <a href="#" class="nav-links nav-cta-btn">Start for free</a>
        </div>
        <div class="hero-img-box">
            <img src="/img/hp-hero_2x.jpg" alt="" class="hero-img">
        </div>

    </div>
</section>

<section class="section-services">
    <div class="section-text-box">
        <h1 class="heading-primary">
            Turn every team into a data team
        </h1>
        <p class="content-text">
            Preset empowers teams of all skill sets to be data driven, unlocking valuable insights with beautiful and interactive visualizations and dashboards
        </p>
        <a href="#" class="nav-links nav-cta-btn">Learn about Preset Cloud</a>
    </div>
    <div class="info g-2-col">
        <div class="info-text-box">
            <img src="/img/hp-screen1_2x.jpg" class = "info-img" alt="">
            <h2 class="heading-secondary">Zero to dashboard in minutes</h2>
            <p class="info-text">Quickly build and share beautiful, customized, and dynamic dashboards that showcase your data with just a few clicks.</p>
        </div>
        <div class="info-text-box">
            <img src="/img/hp-screen2_2x.jpg" class = "info-img" alt="">
            <h2 class="heading-secondary">Easily explore data no matter your skillset</h2>
            <p class="info-text">Easily explore with our no-code viz builder or run deeper analysis using our state-of-the-art SQL editor.</p>
        </div>
    </div>

    <div class="featured-logos">
       <img src="/img/airbyte_2x.png" alt="" class="logos">
       <img src="/img/alltrails_2x.png" alt="" class="logos">
       <img src="/img/astronomer_2x.png" alt=""class="logos">
       <img src="/img/dandelion_2x.png" alt=""class="logos">
       <img src="/img/darwin__x.png" alt="" class="logos">
       <img src="/img/fumination_2x.png" alt="" class="logos">
       <img src="/img/now_2x.png" alt="" class="logos logo-1x">
       <img src="/img/wavely_2x.png" alt="" class="logos">
    </div>

</section>

<section class="section-products">
    <div class="product-header">
        <h1 class="heading-primary text-white">
            Visualizations for the modern data stack
        </h1>
        <p class="content-text text-white">
            Leverage the investments you have made in your data infrastructure with a lightweight and powerful visualization layer on top. Preset is agnostic to your underlying data architecture and doesn't require an additional ingestion layer.
        </p>
        <div class="img-container">
            <img src="/img/marchitecture-all_2x.png" alt="img-product" class="img-product">
        </div>
       
    </div>

    <p class="sub-heading text-white">
        <em>Build powerful visualizations and dashboards on top of popular databases and SQL engines</em>.
    </p>
</section>

<section class="section-expert">
   <div class="section-text-box">
       <h1 class="heading-primary">Trust the experts</h1>
       <p class="sub-heading">Preset was founded by the original creator of Apache Superset</p>
   </div>
   <div class="card-section">
       <div class="card">
           <img src="/img/superset-logo-horiz_2x.png" alt="" class="logos-1">
           <a href="#" class="nav-links nav_cta">Learn more</a>

       </div>
       <div class="card">
           <p class="sub-heading text-bold">Stay up-to-date with Preset</p>
        <a href="#" class="nav-links nav_cta">Keep in touch</a>
       </div>

       <div class="card">
        <p class="sub-heading text-bold">We believe the future of BI is open source</p>
        <a href="#" class="nav-links nav_cta">Our founder explain why</a>
       </div>
   </div>
   
</section>


`;