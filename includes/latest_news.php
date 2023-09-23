<section class="content latest-news" >
    <div class="latest-news-heading">
        <h2>Latest News</h2>
        <a href="#">View All <i class="fa-solid fa-arrow-right"></i></a>
    </div>

    
    <div class="latest-cards">

        <?php foreach ($latestNewsArticles as $article) { ?>
            <div class="latest-card">  

                <div class="img-wrapper">
                    <div class="badge badge1"><?php echo $article['category']; ?></div>
                    <img src="<?php echo $article['main_img']; ?>"
                         alt="<?php echo $article['main_img_desc']; ?>">                            
                </div>            
               
                <h4 style="color: <?php echo COLORS[$article['service']]; ?>;">Digital Marketing Executive</h4>
                <p>Salary Range £28,000 - £34,000 per annum + Bonus Hours 40 hours per week,
                    Mon - Fri Location Wymondh...</p>
                <button class="latest-read-more"
                        style="background-color: <?php echo COLORS[$article['service']]; ?>;">
                               READ MORE</button>
                <div class="posted-by">
                    <img src="<?php echo $article['posted_by_img']; ?>"
                            alt="<?php echo $article['posted_by_desc']; ?>"  
                            class="avatar">
                    <div>
                      
                        <p class="post-author"><?php echo $article['posted_by_name']; ?></p>
                        <p class="post-date"><?php echo dbDateToDisplay($article['posted_by_date']); ?></p>
                    </div>                            
                </div>
            </div>
        <?php } ?>
    </div>              
    
    <div class="cards-footer">
        <a href="#">View All <i class="fa-solid fa-arrow-right"></i></a>                
    </div>

</section>