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


`;