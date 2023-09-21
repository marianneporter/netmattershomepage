<?php 
    require_once 'includes/header.php';
    require_once 'includes/carousels/main_carousel.php';   
?>

        
        <main> 

        <?php
        require_once 'includes/services.php';
        require_once 'includes/carousels/partners_carousel.php';
        require_once 'includes/welcome_group.php';
        require_once 'includes/latest_news.php';
        ?>  
    
            <div class="clients-carousel-tooltips">
               
                    <div class="tooltip-wrapper tooltip-1-wrapper">
                        <div class="tooltip">
                            <h3>Black Swan Care Group</h3>
                            <p>Black Swan Care Group own and manage 21 high-quality care and residential
                                homes with a focus on putting the needs of their residents first.
                            </p>
                            <a class="bg-bespoke-software">View Our Case Study &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>               
               
                    <div class="tooltip-wrapper tooltip-2-wrapper">
                        <div class="tooltip">
                            <h3>Xupes</h3>                          
                        </div>
                    </div>                
               
                    <div class="tooltip-wrapper tooltip-3-wrapper">
                        <div class="tooltip">
                            <h3>BEAT</h3>
                            <p>The UK's eating disorder charity founded in 1989.</p>
                        </div>
                    </div>                 
          
                    <div class="tooltip-wrapper tooltip-4-wrapper">
                        <div class="tooltip">
                            <h3>Survey Solutions</h3>                        
                        </div>
                    </div>               
             
                    <div class="tooltip-wrapper tooltip-5-wrapper">
                        <div class="tooltip">
                            <h3>Girl Guiding Anglia</h3>
                            <p>Girl Guiding Anglia is part of Girlguiding, the leading 
                                charity for girls and young women in the UK
                            </p>
                            <a class="bg-it-support">View Our Case Study &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                
                    <div class="tooltip-wrapper tooltip-6-wrapper">
                        <div class="tooltip">
                            <h3>Sweetzy</h3>
                            <p>Sweetzy, are an online sweets retailer, based in Wymondham</p>
                            <a class="bg-marketing">View Our Case Study &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="tooltip-wrapper tooltip-7-wrapper">
                        <div class="tooltip">
                            <h3>Howes Percival</h3>                           
                        </div>
                    </div>              
            
                    <div class="tooltip-wrapper tooltip-8-wrapper">
                        <div class="tooltip">
                            <h3>GDST</h3>
                            <p>The Girls Day School Trust (GDST) is the UK's leading
                                family of 25 independent girls' schools.
                            </p>
                            <a class="bg-marketing">View Our Case Study &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>              
               
                    <div class="tooltip-wrapper tooltip-9-wrapper">
                        <div class="tooltip ashcroft-tooltip">
                            <h3>Ashcroft Partnership LLP</h3>
                            <p>Originally founded in 2006 as Ashcroft Anthony, they became 
                                Ashcroft Partnership LLP in 2020 and are one of the top 
                                chartered accountancy firms in Cambridge, advising 
                                entrpreneurs and families
                            </p>
                            <a class="bg-web-design">View Our Case Study &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>       
               
             
                    <div class="tooltip-wrapper tooltip-10-wrapper">
                        <div class="tooltip">
                            <h3>One traveller</h3>
                            <p>One traveller, founded in 2007, is a leading provider 
                                of solo holidays for over 50s.
                            </p>
                            <a class="bg-web-design">View Our Case Study &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                        </div>                
                    </div>  
                              
                    <div class="tooltip-wrapper tooltip-11-wrapper">
                        <div class="tooltip">
                            <h3>Searles Leisure Resort</h3>
                            <p>Searles Leisure Resort, on the beautiful North Norfolk
                                coast, is an award-winning UK holiday resort for families.
                            </p>
                            <a class="bg-marketing">View Our Case Study &nbsp; <i class="fa-solid fa-arrow-right"></i></a>
                        </div>
                   </div>                  

                   <div class="tooltip-wrapper tooltip-12-wrapper">
                        <div class="tooltip">
                            <h3>Busseys</h3>
                            <p>One of the UK's Leading Ford dealerships.</p>                      
                        </div>
                    </div>     

                    <div class="tooltip-wrapper tooltip-13-wrapper">
                        <div class="tooltip">
                            <h3>Crane Garden Buildings</h3>
                            <p>Leading manufacturer and supplier of high-end garden rooms, 
                               workshops and sheds in the UK.
                            </p> 
                        </div>
                    </div>                         
                    

                        
            </div>

           
            <div class="clients-carousel">   <!-- slick container-->
                <div data-tooltip="1" class="clients-carousel-image clients-carousel-image-1" ></div> 
                <div data-tooltip="2" class="clients-carousel-image clients-carousel-image-2"></div>
                <div data-tooltip="3" class="clients-carousel-image clients-carousel-image-3"></div>
                <div data-tooltip="4" class="clients-carousel-image clients-carousel-image-4"></div>
                <div data-tooltip="5" class="clients-carousel-image clients-carousel-image-5"></div>
                <div data-tooltip="6" class="clients-carousel-image clients-carousel-image-6"></div>
                <div data-tooltip="7" class="clients-carousel-image clients-carousel-image-7"></div>
                <div data-tooltip="8" class="clients-carousel-image clients-carousel-image-8"></div>
                <div data-tooltip="9" class="clients-carousel-image clients-carousel-image-9"></div>
                <div data-tooltip="10" class="clients-carousel-image clients-carousel-image-10"></div>
                <div data-tooltip="11" class="clients-carousel-image clients-carousel-image-11"></div>
                <div data-tooltip="12" class="clients-carousel-image clients-carousel-image-12"></div>
                <div data-tooltip="13" class="clients-carousel-image clients-carousel-image-13"></div>
            </div>           
 

            <section class="contact-form">

                <form action="#" class="form content">
                    <h3>Email Newsletter Sign-Up</h3>
                    <div class="contact-form-data">
                        <div class="form-control text-input">
                            <label for="name">Your Name <span>*</span></label>
                            <input type="text" name="name" id="name">                      
                        </div>    
                        <div class="form-control text-input">
                            <label for="email">Your Email <span>*</span></label>
                            <input type="text" name="email" id="email">                                   
                        </div>    
                        <div class="form-control checkbox-container">
                            <input type="checkbox"  id="marketing-info-check" name="marketing-info">
                            <label for="marketing-info-check"> 
                            <span> Please tick this box if you wish to receive marketing information from us.
                                Please see our <a>Privacy Policy</a> for more information on how 
                                we keep your data safe.</span>
                            </label>                      
                        </div>
                        
                        <div class="contact-form-submit">
                            <button type="submit">
                                Subscribe
                            </button>
                        </div> 
                    </div>
                </form>
            </section>
        </main> 

        <footer>          
            <div class="content footer-grid">

                <div class="footer-grid-item logo">
                    <div class="img-container">
                        <img src="images/nm-logo-white-med.png" alt="netmatters logo">
                    </div>
                </div>

                <div class="footer-grid-item soc-media">  
                    <div class="follow">
                        <h4>FOLLOW US ON:</h4>
                        <div class="footer-icon-block">
                            <i class="fa-brands fa-facebook-f fa-xl"></i>                     
                            <i class="fa-brands fa-linkedin-in fa-xl"></i>
                            <i class="fa-brands fa-twitter fa-xl"></i>
                            <i class="fa-brands fa-instagram fa-xl"></i>
                        </div>
                    </div>
                </div>

            
                <div class="footer-grid-item about">
                    <h4>ABOUT NETMATTERS</h4>
                    <ul>
                        <li>News</li>
                        <li>Our Careers</li>
                        <li>Our Team</li>
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Policy</li>  
                        <li>Data Retention & Disposal Policy</li>
                        <li>CCTV Policy</li>
                        <li>Environmental Policy</li>
                        <li>Terms & Conditions</li>                  
                    </ul>
                </div>

                <div class="footer-grid-item services">
                    <h4>OUR SERVICES</h4>
                    <ul>
                        <li>Bespoke Software</li>
                        <li>IT Support</li>
                        <li>Digital Marketing</li>
                        <li>Telecoms Services</li>
                        <li>Web Design</li>  
                        <li>Cyber Security</li>
                        <li>Developer Training</li> 
                    </ul>
                </div>

                <div class="footer-grid-item industries">
                    <h4>OUR INDUSTRIES</h4>
                    <ul>
                        <li>Financial Services</li>
                        <li>Construction</li>
                        <li>Retail & E-Commerce</li>
                        <li>SME's</li>
                        <li>Healthcare</li>  
                        <li>Education and Training</li> 
                        <li>Travel & Leisure</li> 
                    </ul>
                </div>

                <div class="footer-grid-item locations">
                    <h4>LOCATIONS</h4>
                    <ul>
                        <li>London Office</li>
                        <li>Cambridge Office</li>
                        <li>Wymondham Office</li>
                        <li>Great Yarmouth Office</li> 
                    </ul>
                </div>                 
            
                
            </div>
            
            <div class="copyright-div">  
                <div class="content copyright-text">
                    <p>&copy; Copyright Netmatters 2023.</p>
                    <p>All rights reserved</p>
                    <p>-</p>          
                    <p>Sitemap</p>
                </div> 
            </div> 
        </footer>  

        <div id="content-overlay" ></div>

    </div>

    <div class="mobile-menu">
        <div class="mob-menu-small-screens">
            <h4>Contact Us</h4>
        
            <div class="bespoke-mob-menu">
                <div class="header-nav-icon-wrapper">
                    <i class="fa fa-laptop fa-xl text-bespoke-software" aria-hidden="true"></i> 
                </div>
                <div class="nav-title">
                    <span>Bespoke</span>
                    <span>Software</span>
                </div>    
                <ul>
                    <li>Bespoke Crm</li>
                    <li>Business Automation</li>
                    <li>Software Integrations</li>
                    <li>Mobile App Development</li>
                    <li>Bespoke Databases</li>
                    <li>Sharepoint<br>Development</li>
                    <li>Operational Systems</li>
                    <li>Business Central<br>Implementation</li>
                    <li>Internet of Things (IOT)<br>Software</li>
                    <li>Intranet Development</li>
                    <li>Customer Portal<br>Development</li>
                    <li>Reporting Hub</li>
                </ul>
            </div>
 
            <div class="it-support-mob-menu">
                <div class="header-nav-icon-wrapper">
                    <i class="fa-solid fa-desktop fa-xl text-it-support"></i>
                </div>  
    
                <div class="nav-title">
                    <span>IT</span>
                    <span>Support</span>
                </div>

                <ul>
                    <li>Managed IT Support</li>
                    <li>Business IT Support</li>
                    <li>Office 365 for Business</li>
                    <li>IT Consultancy</li>
                    <li>Cloud Service Provider</li>
                    <li>Data Backup & Disaster<br>Recovery</li>                  
                </ul>
            </div>

            <div class="marketing-mob-menu">
                <div class="header-nav-icon-wrapper">
                    <i class="fa-solid fa-chart-simple fa-xl text-marketing"></i>
                </div>                  
                <div class="nav-title">
                    <span>Digital</span>
                    <span>Marketing</span>
                </div>   
                
                <ul>
                    <li>Search Engine<br>Optimisation (SEO)</li>
                    <li>Pay per click<br>Advertising(PPC)</li>
                    <li>Conversion Rate<br>Optimisation(CRO)</li>
                    <li>Email Marketing</li>
                    <li>Social Media Marketing</li>
                    <li>Content Marketing</li>                   
                </ul>
            </div>

            <div class="telecoms-mob-menu">                
                <div class="header-nav-icon-wrapper">
                    <i class="fa-sharp fa-solid fa-phone-volume fa-xl text-telecoms"></i>
                </div>
            
                <div class="nav-title">
                    <span>Telecoms</span>
                    <span>Services</span>
                </div>

                <ul>
                    <li>Business Mobile</li>
                    <li>Hosted VOIP Provider</li>
                    <li>Business VOIP Systems</li>
                    <li>Business Broadband</li>
                    <li>Leased Lines Provider</li>
                    <li>3CX Systems</li>
                </ul>

            </div>

            <div class="web-design-mob-menu mob-menu-section">
                <div class="header-nav-icon-wrapper">
                    <i class="fa-solid fa-code fa-xl text-web-design"></i>
                </div>

                <div class="nav-title">
                    <span>Web</span>
                    <span>Design</span>
                </div>

                <ul>
                    <li>Bespoke Website Design</li>
                    <li>ECommerce Website<br>Design</li>
                    <li>Pay Monthly Websites</li>
                    <li>Branding & Design</li>
                    <li>Mobile App Development</li>
                    <li>Web Hosting</li>
                </ul>
            </div>

            <div class="cyber-security-mob-menu mob-menu-section">
                <div class="header-nav-icon-wrapper">
                    <i class="fa-solid fa-shield-halved fa-xl text-cyber-security"></i>
                </div>
            
                <div class="nav-title">
                    <span>Cyber</span>
                    <span>Security</span>
                </div>
                
                <ul>
                    <li>Cyber Security<br>Assessment</li>
                    <li>Cyber Security<br>Management</li>
                    <li>Cyber Penetration<br>Testing</li>
                    <li>Cyber Essentials<br>Certification</li>
                    <li>PCI Compliance</li>
                    <li>Hacking Prevention</li>
                </ul> 
            </div>

            <div class="developer-course-mob-menu mob-menu-section">
                <div class="header-nav-icon-wrapper">
                    <i class="fa-solid fa-graduation-cap fa-xl text-dev-training"></i>
                </div>
                
                <div class="nav-title">
                    <span>Developer</span>
                    <span>Course</span>
                </div>   
                
                <ul>
                    <li>Train for a career in <br>Tech</li>
                    <li>Skills Bootcamp</li>
                    <li>Scion Scheme<br>Frequently Asked<br>Questions</li>
                    <li>Scion Collaborators</li>
                </ul>
            </div>
        </div>
        <div class="mob-menu-all-screens">
            <h4>Services</h4>
            <ul>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp; Bespoke Software</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;IT Support</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Digital Marketing</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Telecoms Services</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Web Design</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Cyber Security</li>
            </ul>
            <h4>Our Work</h4>
            <ul>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Case Studies</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Our IT Clients </li>  
            </ul>
            <h4>Our Knowledge</h4>
            <ul>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Technologies</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Industries</li> 
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;News</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Insights</li>
            </ul>
            <h4>Training</h4>
            <ul>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Train for a career in Tech</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Skills Bootcamp</li> 
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;SCS Frequently Asked Questions</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Scion Collaborators</li>
            </ul>
            <h4>Our Company</h4>
            <ul>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Why Choose Us?</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Our Culture</li> 
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Our Team</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Our Careers</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Our Benefits</li>
            </ul>
            <h4>Contact Us</h4>
            <ul>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;London Office</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Cambridge Office</li> 
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Wymondham Office</li>
                <li><i class="fa-solid fa-angles-right"></i>&nbsp;&nbsp;Great Yarmouth Office</li>         
            </ul>       
            <h4>Covid Risk Assessments</h4>
        </div>
 
    </div>

    <div id="cookies-consent" class="cookies-consent">
        <h3>Cookies Policy</h3>
        <p>Our website uses cookies. This helps us provide you with a good 
           experience on our website.  To see what cookies we use and what they do
           and opt-in on non-essential cookies click "change settings",  For a 
           detailed explanation, click on "Privacy Policy" otherwise click
           "Accept Cookies" to enter.
        </p>
        <div class="btn-group">
            <button class="change-settings-btn">Change Settings</button>
            <button class="accept-cookies-btn">Accept Cookies</button>
        </div>

    </div>

    <div class="cookies-overlay" ></div>
  
    <script src="js/jquery-3.7.0.min.js"></script>

    <script src="slick/slick.min.js"></script>

    <script src="js/common.js"></script>
    <script src="js/cookies-consent.js"></script>
    <script src="js/header.js"></script>
    <script src="js/mobile-menu.js"></script>
    <script src="js/carousel.js"></script>  
    <script src="js/partners-carousel.js"></script>
    <script src="js/clients-carousel.js"></script>  
</body>
</html>