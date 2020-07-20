import  React, {Component} from "react"

import Carousel from 'react-bootstrap/Carousel'


const Home = (props) => (
    <>

    {/* ======= Header ======= */}
    <header id="header">
      <div className="container">
        <div id="logo" className="pull-left">
       {/*   <a href="index.html"><img src="assets/img/logo-nav.png" alt="" /></a>*/}
          {/* Uncomment below if you prefer to use a text image */}
          <h1><a href="#hero">UniVote</a></h1>
        </div>
        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
	    <li><a href="#contact">Request a Demo</a></li>
	    <li><a className="btn btn-full scrollto" href="#contact">Request a Demo</a></li>
  	    <li><a className="btn btn-full scrollto" href="#about">Signup</a></li>
            {/*<li><a href="#portfolio"></a></li>*/}
           {/* <li><a href="#team">Team</a></li>*/}
            {/*<li className="menu-has-children"><a href>Drop Down</a>
              <ul>
                <li><a href="#">Drop Down 1</a></li>
                <li className="menu-has-children"><a href="#">Drop Down 2</a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
                <li><a href="#">Drop Down 3</a></li>
                <li><a href="#">Drop Down 4</a></li>
                <li><a href="#">Drop Down 5</a></li>
              </ul>
            </li>*/}
            
          </ul>
        </nav>
        {/* #nav-menu-container */}
        <nav className="nav social-nav pull-right d-none d-lg-inline">
          <a href="#"><i className="fa fa-twitter" /></a> <a href="#"><i className="fa fa-facebook" /></a> <a href="#"><i className="fa fa-linkedin" /></a> <a href="#"><i className="fa fa-envelope" /></a>
        </nav>
      </div>
    </header>{/* End Header */}



    {/* ======= Hero Section ======= */}
    <section className="hero">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <a className="hero-brand" href="index.html" title="Home"><img max-width="80" alt="Univote Logo" src="assets/img/logo.png" /></a>
          </div>
        </div>
        <div className="col-md-12">
          <h1>
           UNIVOTE is a Decentralized Online voting system
          </h1>
          <p className="tagline">
           Your voters deserve a secure, and transparent way to vote, accessible from any device and backed by blockchain.
          </p>
          	
        </div>
      </div>
    </section>{/* End Hero */}




    <main id="main">
      {/* ======= About Section ======= */}
      <section className="about" id="about">
        <div className="container text-center">
          <h2>
            UNIVOTE FEATURES
          </h2>
          <p>
            UNIVOTE is based on blockchain technology, which makes voting 100% secure and immutable. Voter anonymity is guaranteed by transparent crypto algorithms.
          </p>

         {/* <div className="row stats-row">
            <div className="stats-col text-center col-md-3 col-sm-6">
              <div className="circle">
                <span className="stats-no" data-toggle="counter-up">3</span> Elections Casted
              </div>
            </div>
        
            <div className="stats-col text-center col-md-3 col-sm-6">
              <div className="circle">
                <span className="stats-no" data-toggle="counter-up">1,463</span> Hours Of Support
              </div>
            </div>
     
          </div>*/}
        </div>
      </section>{/* End About Section */}

  {/* ======= Features Section ======= */}
      <section className="features" id="features">
        <div className="container">
          <div className="row">
            <div className="feature-col col-lg-4 col-xs-12">
              <div className="card card-block text-center">
                <div>
                  <div className="feature-icon">
                    <span className="fa fa-rocket" />
                  </div>
                </div>
                <div>
                                 <h3>
                    Transparent & Immutable
                  </h3>
                  <p>
                    One of the main characteristics of blockchain technology is its transparency. Vote's casted are stored on an Immutable ledger, distributed across millions of computers called peers
                  </p>
                   </div>
              </div>
            </div>
            <div className="feature-col col-lg-4 col-xs-12">
              <div className="card card-block text-center">
                <div>
                  <div className="feature-icon">
                    <span className="fa fa-envelope" />
                  </div>
                </div>
                <div>
                  <h3>
                    Voter Anonymity & Security
                  </h3>
                  <p>
                  Voter anonymity is guaranteed by the power of the ethereum powered smart contract, votes are secured and cannot get missing
                  </p>
                </div>
              </div>
            </div>
            <div className="feature-col col-lg-4 col-xs-12">
              <div className="card card-block text-center">
                <div>
                  <div className="feature-icon">
                    <span className="fa fa-bell" />
                  </div>
                </div>
                <div>
                  <h3>
                   Easy to organize, easy to vote
                  </h3>
                  <p>
                   With UNIVOTE, creating an election is intuitive, easy and fast. Letus handle all the coding. Voting can be conducted on the go on a smartphone or tablet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        

        </div>
      </section>{/* End Features Section */}
      {/* ======= Call to Action Section ======= */}


      {/* ======= Welcome Section ======= */}
      <section className="welcome text-center">
        <h2>Backed by Blockchain</h2>
        <p>
        UNIVOTE is based on blockchain technology, which makes voting 100% secure and immutable. Voter anonymity is guaranteed by transparent crypto algorithms.
        </p>
 

 {/* ======= @Mega/@Goody Change this image to show that it works on both mobile and desktop well ======= */}
        <img alt="Univote - A perfect theme" className="gadgets-img hidden-md-down" src="assets/img/gadgets.png" />
      </section>{/* End Welcome Section */}
          <section className="cta">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-sm-12 text-lg-left text-center">
              <h2>
                Your full solution
              </h2>
<div class="univotefeatures"> 
<ul>
  <li> Univote offers your voters the chance to Vote on your phone, desktop, tablet with ease</li>
  <li>Our security measures protect you, your votes, and your data against risk.</li>
  <li>Eliminate the risk of double voting and voter fraud. Closed voting events enable trustworthy decision making.</li>
  <li> Prove the integrity of your vote. Our robust auditing tools let you demonstrate an accountable voting process.</li>
</ul> 
</div>   
<div class="button-wrapper">
  <a class="button cta-button" href="#contact">I need more features</a>
</div>
	
            </div>
            </div>
	</div>        
</section>

{/* End Call to Action Section */}

{/* @Goodness/@Mega Add App Screenshots here*/}
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/img/blockchain.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Mobile and Desktop Ready</h3>
      <p>Blockchain on mobile</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/img/blockchain.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Plane & simple</h3>
      <p>Simple interface for easy voting</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="assets/img/vote.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Vote</h3>
      <p>Cast Your Vote.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


      {/* ======= Portfolio Section ======= 
      <section className="portfolio" id="portfolio">
        <div className="container text-center">
          <h2>
            Portfolio
          </h2>
          <p>
            Voluptua scripserit per ad, laudem viderer sit ex. Ex alia corrumpit voluptatibus usu, sed unum convenire id. Ut cum nisl moderatius, Per nihil dicant commodo an.
          </p>
        </div>
        <div className="portfolio-grid">
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="assets/img/porf-1.jpg" className="venobox" data-gall="portfolioGallery"><img alt="" src="assets/img/porf-1.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">
                        The Dude Rockin'
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="assets/img/porf-2.jpg" className="venobox" data-gall="portfolioGallery"><img alt="" src="assets/img/porf-2.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">
                        The Dude Rockin'
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="assets/img/porf-3.jpg" className="venobox" data-gall="portfolioGallery"><img alt="" src="assets/img/porf-3.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">
                        The Dude Rockin'
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="assets/img/porf-4.jpg" className="venobox" data-gall="portfolioGallery"><img alt="" src="assets/img/porf-4.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">
                        The Dude Rockin'
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="assets/img/porf-5.jpg" className="venobox" data-gall="portfolioGallery"><img alt="" src="assets/img/porf-5.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">
                        The Dude Rockin'
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="assets/img/porf-6.jpg" className="venobox" data-gall="portfolioGallery"><img alt="" src="assets/img/porf-6.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">
                        The Dude Rockin'
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="assets/img/porf-7.jpg" className="venobox" data-gall="portfolioGallery"><img alt="" src="assets/img/porf-7.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">
                        The Dude Rockin'
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12">
              <div className="card card-block">
                <a href="assets/img/porf-8.jpg" className="venobox" data-gall="portfolioGallery"><img alt="" src="assets/img/porf-8.jpg" />
                  <div className="portfolio-over">
                    <div>
                      <h3 className="card-title">
                        The Dude Rockin'
                      </h3>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Portfolio Section */}
      {/* ======= Team Section ======= 
      <section className="team" id="team">
        <div className="container">
          <h2 className="text-center">
            Meet our team
          </h2>
          <div className="row">
            <div className="col-sm-3 col-xs-6">
              <div className="card card-block">
                <a href="#"><img alt="" className="team-img" src="assets/img/team-1.jpg" />
                  <div className="card-title-wrap">
                    <span className="card-title">Sergio Fez</span> <span className="card-text">Art Director</span>
                  </div>
                </a><div className="team-over"><a href="#">
                    <h4 className="hidden-md-down">
                      Connect with me
                    </h4>
                  </a><nav className="social-nav"><a href="#">
                    </a><a href="#"><i className="fa fa-twitter" /></a> <a href="#"><i className="fa fa-facebook" /></a> <a href="#"><i className="fa fa-linkedin" /></a> <a href="#"><i className="fa fa-envelope" /></a>
                  </nav>
                  <p>
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="card card-block">
                <a href="#"><img alt="" className="team-img" src="assets/img/team-2.jpg" />
                  <div className="card-title-wrap">
                    <span className="card-title">Sergio Fez</span> <span className="card-text">Art Director</span>
                  </div>
                </a><div className="team-over"><a href="#">
                    <h4 className="hidden-md-down">
                      Connect with me
                    </h4>
                  </a><nav className="social-nav"><a href="#">
                    </a><a href="#"><i className="fa fa-twitter" /></a> <a href="#"><i className="fa fa-facebook" /></a> <a href="#"><i className="fa fa-linkedin" /></a> <a href="#"><i className="fa fa-envelope" /></a>
                  </nav>
                  <p>
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="card card-block">
                <a href="#"><img alt="" className="team-img" src="assets/img/team-3.jpg" />
                  <div className="card-title-wrap">
                    <span className="card-title">Sergio Fez</span> <span className="card-text">Art Director</span>
                  </div>
                </a><div className="team-over"><a href="#">
                    <h4 className="hidden-md-down">
                      Connect with me
                    </h4>
                  </a><nav className="social-nav"><a href="#">
                    </a><a href="#"><i className="fa fa-twitter" /></a> <a href="#"><i className="fa fa-facebook" /></a> <a href="#"><i className="fa fa-linkedin" /></a> <a href="#"><i className="fa fa-envelope" /></a>
                  </nav>
                  <p>
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 col-xs-6">
              <div className="card card-block">
                <a href="#"><img alt="" className="team-img" src="assets/img/team-4.jpg" />
                  <div className="card-title-wrap">
                    <span className="card-title">Sergio Fez</span> <span className="card-text">Art Director</span>
                  </div>
                </a><div className="team-over"><a href="#">
                    <h4 className="hidden-md-down">
                      Connect with me
                    </h4>
                  </a><nav className="social-nav"><a href="#">
                    </a><a href="#"><i className="fa fa-twitter" /></a> <a href="#"><i className="fa fa-facebook" /></a> <a href="#"><i className="fa fa-linkedin" /></a> <a href="#"><i className="fa fa-envelope" /></a>
                  </nav>
                  <p>
                    Lorem ipsum dolor sit amet, eu sed suas eruditi honestatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Team Section */}
      {/* ======= Contact Section ======= */}
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="section-title">Contact Us</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3 col-md-4">
              <div className="info">
                <div>
                  <i className="fa fa-map-marker" />
                  <p>Millionaires Qtrs,<br />Jos Plateau, Nigeria</p>
                </div>
                <div>
                  <i className="fa fa-envelope" />
                  <p>info@univote.live</p>
                </div>
                <div>
                  <i className="fa fa-phone" />
                  <p>+234 5589 55488 55s</p>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-8">
              <div className="form">
                <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                  <div className="form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                    <div className="validate" />
                  </div>
                  <div className="form-group">
                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                    <div className="validate" />
                  </div>
                  <div className="form-group">
                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                    <div className="validate" />
                  </div>
                  <div className="form-group">
                    <textarea className="form-control" name="message" rows={5} data-rule="required" data-msg="Please write something for us" placeholder="Message" defaultValue={""} />
                    <div className="validate" />
                  </div>
                  <div className="mb-3">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">Your message has been sent. Thank you!we will contact you soon </div>
                  </div>
                  <div className="text-center"><button type="submit">Send Message</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>{/* End Contact Section */}
    </main>{/* End #main */}
    {/* ======= Footer ======= */}
    <footer className="site-footer">
      <div className="bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xs-12 text-lg-left text-center">
              <p className="copyright-text">
                © Copyright <strong>Univote</strong>. All Rights Reserved
              </p>
               {/* <div className="credits">
                {/*
          All the links in the footer should remain intact.
          You can delete the links only if you purchased the pro version.
          Licensing information: https://bootstrapmade.com/license/
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Bell
       
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>  */}

            </div>
            <div className="col-lg-6 col-xs-12 text-lg-right text-center">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="list-inline-item">
                  <a href="#about">About</a>
                </li>
                <li className="list-inline-item">
                  <a href="#features">Features</a>
                </li>

                  {/*<li className="list-inline-item">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="list-inline-item">
                  <a href="#team">Team</a>
                </li>
                <li className="list-inline-item">
                  <a href="#contact">Contact</a>  
                </li>*/}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>{/* End Footer */}
<script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
    <a className="scrolltop" href="#"><span className="fa fa-angle-up" /></a>
</>  

)
export default Home 

