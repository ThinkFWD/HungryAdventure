import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
//++++++ Imported Actions
import { fetchDestinations } from '../actions/destinationsAction';
import { getBudget } from '../actions/budgetAction';
import { PageHeader } from 'react-bootstrap';
import { saveSearchQuery } from '../actions/saveSearchQueryAction';
import { reset } from '../actions/resetState'
import { getGoogleData } from '../actions/userLocationAction'


// import { userLocation } from './userLocationAction'
//Reducer for react inputs
import { combineReducers } from 'redux';
//Imported Component
import Search from './searchForm';
import Auth from './FacebookAuth';
import UserLocationTrigger from './UserLocationTrigger'

// Charts
import DonutChart from 'react-donut-chart';



class Layout extends React.Component {
  constructor (props){
    super(props);
  }


  componentWillMount() {
    this.props.reset();
  }

  getLocation = () => {
     let options = {
     enableHighAccuracy: true,
     timeout: 5000,
     maximumAge: 0
   };
   const success = (pos) => {
     let crd = pos.coords;

     this.props.getGoogleData({
       latitude: crd.latitude,
       longitude: crd.longitude
     })
   };

   const error = (err) => {
     console.warn(`ERROR(${err.code}): ${err.message}`);
   };

   navigator.geolocation.getCurrentPosition(success, error, options)
 }

  submit = (values) => {
  this.getLocation()
  let saveQueryObj = {
    email: this.props.email || 'none',
    budget: values.Budget,
    startDate: values.departDate,
    endDate: values.arrivalDate,
  }
    values.cityId = this.props.airportCode.airportCode;
    this.props.getBudget(values);
    this.props.history.push(`/flights?Budget=${values.Budget}&departDate=${values.departDate}&arrivalDate=${values.arrivalDate}`);
    this.props.fetchDestinations(values)
      .then(() =>{
        this.props.saveSearchQuery(saveQueryObj);
      })
  }

  render () {
     return (
      <div>
      <header>
      <Auth />
        <section id="search">
          <div className="header-content">
            <div className="header-content-inner">
              <br></br>
              <h1 id="homeHeading">HUNGRY ADVENTURE</h1><font size="8px">Beta</font>
              <hr></hr>
              <center>
                <Search onSubmit={this.submit} />
              </center>
            </div>
          </div>
        </section>
      </header>

    <section className="bg-primary" id="about">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                  <h2 className="section-heading">Ready for an Adventure?</h2>
                  <hr className="light"></hr>
                  <p className="text-faded">Do you have a budget and a timeframe you're thinking about traveling but don't know where to go or what your options are? We have you covered! Our site provides a one-stop experience for all your travel
                  needs.</p>
                <a href="#" className="page-scroll btn btn-default btn-xl sr-button" style={{ borderRadius: '4px', backgroundColor: 'white' }}>Let's Get Started!</a>
                </div>
            </div>
        </div>
    </section>

    <section id="services">
        <div className="container services">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">What We Do</h2>
                    <hr className="primary"></hr>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-diamond text-primary sr-icons"></i>
                        <h3>Aggregate</h3>
                        <p className="text-muted">We aggregate Skyscanner, Airbnb, Yelp, Google, Weather and more..</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-paper-plane text-primary sr-icons"></i>
                        <h3>Destinations</h3>
                        <p className="text-muted">We generate options for you!</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-newspaper-o text-primary sr-icons"></i>
                        <h3>Stay and Play </h3>
                        <p className="text-muted">We present affordable and fun options!</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                    <div className="service-box">
                        <i className="fa fa-4x fa-heart text-primary sr-icons"></i>
                        <h3>Story</h3>
                        <p className="text-muted">You assemble a custom itinary and story</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="no-padding" id="locations">
        <div className="container-fluid">
            <div className="row no-gutter popup-gallery">
                <div className="col-lg-4 col-sm-6">
                    <a href="../../assets/8.jpg" className="portfolio-box" target="_blank">
                        <img src="../../assets/8.jpg" className="img-responsive headImg" alt=""></img>
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                              <h3>Rio de Janeiro, Brazil</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="../../assets/asakusaTempleTokyo.jpg" className="portfolio-box" target="_blank">
                        <img src="../../assets/asakusaTempleTokyo.jpg" className="img-responsive headImg" alt=""></img>
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                              <h3>Tokyo, Japan</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="../../assets/dubrovnikCrotia.jpg" className="portfolio-box" target="_blank">
                        <img src="../../assets/dubrovnikCrotia.jpg" className="img-responsive headImg" alt=""></img>
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                              <h3>Dubrovnik, Crotia</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="../../assets/paris.jpg" className="portfolio-box" target="_blank">
                        <img src="../../assets/paris.jpg" className="img-responsive headImg" alt=""></img>
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                              <h3>Paris, France</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="../../assets/pyramidGiza.jpg" className="portfolio-box" target="_blank">
                        <img src="../../assets/pyramidGiza.jpg" className="img-responsive headImg" alt=""></img>
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                              <h3>Al Haram, Egypt</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4 col-sm-6">
                    <a href="../../assets/tajMahal.jpg" className="portfolio-box" target="_blank">
                        <img src="../../assets/tajMahal.jpg" className="img-responsive headImg" alt=""></img>
                        <div className="portfolio-box-caption">
                            <div className="portfolio-box-caption-content">
                              <h3>Agra, India</h3>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

     <aside className="bg-dark">
        <div className="container text-center">
            <div className="call-to-action">
                <h2>Powered By</h2>
                  <div>
                    <div>
                      <img src="http://patrickcoombe.com/wp-content/uploads/2015/09/new-google-logo-2015.png" height="75" width="200"></img>
                      <img src="https://darksky.net/images/darkskylogo.png" height="75" width="75"></img>
                      <img src="http://www.riadkniza.com/images/press/frommers.png" height="85" width="180" style={{objectFit: "cover"}}></img>
                      <img src="http://www.photos.apo-opa.com/plog-content/images/apo/logos/airbnb.png" height="75" width="175"></img>
                      <img src="http://www.freeiconspng.com/uploads/facebook-logo-29.png" height="85" width="125"></img>
                      <img src="https://s3-media2.fl.yelpcdn.com/assets/srv0/styleguide/1ea40efd80f5/assets/img/brand_guidelines/yelp_fullcolor.png" height="75" width="125"></img>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Skyscanner_Logo_New.png" height="65" width="220"></img>
                      <img src="https://travelmassive.com/blog/wp-content/uploads/2014/08/viator.png" width="180" />
                  </div>
                </div>
            </div>
        </div>
    </aside>

    <section id="contact">
        <div className="container">
             <div className="container text-center">
                 <div className="call-to-action">
                     <h2>Development Team</h2>
                     <br></br>
                     <br></br>
                       <div>
                         <div>
                           <div className="col-sm-3">
                           <a href="http://michaeljchan.com" target="_blank">
                             <img className="profilePicture img-circle" src="http://michaeljchan.com/image/profile.PNG" height="65" width="65"></img>
                           </a>
                             <h4>Michael Chan</h4>
                             <h5>Product owner</h5>
                             <h5>Software Engineer</h5>
                           <p>
                             <a href="http://github.com/ThinkFWD" target="_blank">
                               <img className="gitIcon" src="https://image.flaticon.com/icons/svg/23/23957.svg" height="40" width="40"></img>
                             </a>
                             <a href="https://www.linkedin.com/in/mikethikfwd/">
                               <img className="linkedIcon" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" height="40" width="40"></img>
                             </a>
                           </p>
                           </div>
                           <div className="col-sm-3">
                           <a href="https://github.com/supreme38" target="_blank">
                             <img className="profilePicture img-circle" src="https://avatars2.githubusercontent.com/u/14501778?v=3&s=460" height="65" width="65"></img>
                           </a>
                             <h4>Vincent Liu</h4>
                             <h5>Scrum master</h5>
                             <h5>Software Engineer</h5>
                           <p>
                             <a href="https://github.com/supreme38" target="_blank">
                               <img className="gitIcon" src="https://image.flaticon.com/icons/svg/23/23957.svg" height="40" width="40"></img>
                             </a>
                             <a href="https://www.linkedin.com/in/vincent38" target="_blank">
                               <img className="linkedIcon" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" height="40" width="40"></img>
                             </a>
                           </p>
                         </div>
                         <div className="col-sm-3">
                           <a href="https://www.github.com/camdunne" target="_blank">
                             <img className="profilePicture img-circle" src="https://avatars1.githubusercontent.com/u/22266951?v=3&s=460" height="65" width="65"></img>
                           </a>
                             <h4>Cameron Dunne</h4>
                             <h5>Software Engineer</h5>
                             <br></br>
                           <p>
                             <a href="https://www.github.com/camdunne" target="_blank">
                               <img className="gitIcon" src="https://image.flaticon.com/icons/svg/23/23957.svg" height="40" width="40"></img>
                             </a>
                             <a href="https://www.linkedin.com/in/camerondunne" target="_blank">
                               <img className="linkedIcon" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" height="40" width="40"></img>
                             </a>
                           </p>
                         </div>
                         <div className="col-sm-3">
                           <a href="https://github.com/xbryan813x" target="_blank">
                             <img className="profilePicture img-circle" src="https://avatars1.githubusercontent.com/u/15056067?v=3&s=460" height="65" width="65"></img>
                           </a>
                             <h4>Bryam Pacheco</h4>
                             <h5>Software Engineer</h5>
                             <br></br>
                           <p>
                             <a href="https://github.com/xbryan813x" target="_blank">
                               <img className="gitIcon" src="https://image.flaticon.com/icons/svg/23/23957.svg" height="40" width="40"></img>
                             </a>
                             <a href="https://www.linkedin.com/in/bryan-pacheco-807a80107/" target="_blank">
                               <img className="linkedIcon" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-512.png" height="40" width="40"></img>
                             </a>
                           </p>
                         </div>
                       </div>
                     </div>
                 </div>
             </div>
        </div>
    </section>
     <aside className="bg-dark">
       <div className="container text-center">
           <div className="call-to-action">
               <h6>© 2017 Hungry Adventure All rights reserved. |
                 <a className="githubLink" href="https://github.com/hungry-adventure" target="_blank"> Hungry Adventure GitHub</a>
               </h6>

           </div>
       </div>
     </aside>
    </div>
    );
  }
}



//Connects to store
const mapStateToProps = ({destinations, budget, profile, form, airportCode}) => ({
 destinations: destinations.destinations,
 budget,
 ...profile,
 form,
 airportCode,
})

export default connect(mapStateToProps, { fetchDestinations, getBudget, saveSearchQuery, reset, getGoogleData })(Layout);
