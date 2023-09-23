<section class="content latest-news" >
    <div class="latest-news-heading">
        <h2>Latest News</h2>
        <a href="#">View All <i class="fa-solid fa-arrow-right"></i></a>
    </div>

    
    <div class="latest-cards">

        <?php foreach ($latestNewsArticles as $article) { ?>
            <div class="latest-card">  

                <div class="img-wrapper">
                    <div class="badge badge1">Careers</div>
                    <img src="images/latest-news/digital-marketing-executive-UmWA.jpg"
                    alt="header image for digital marketing executive opportunity">                            
                </div>
            
                <h4>Digital Marketing Executive</h4>
                <p>Salary Range £28,000 - £34,000 per annum + Bonus Hours 40 hours per week,
                    Mon - Fri Location Wymondh...</p>
                <button class="latest-read-more">READ MORE</button>
                <div class="posted-by">
                    <img src="images/latest-news/james-palmer-1KKg.jpg"
                            alt="Photo of Jim Palmer"
                            class="avatar">
                    <div>
                        <p class="post-author">Posted by Jim Palmer</p>
                        <p class="post-date">16th June 2023</p>
                    </div>                            
                </div>
            </div>
        <?php } ?>
    </div>              
    
    <div class="cards-footer">
        <a href="#">View All <i class="fa-solid fa-arrow-right"></i></a>                
    </div>

</section>