<?php


if ( is_search() ) {
	global $wp_query;


	if ( $wp_query->found_posts ) {


		echo get_template_part('template-parts/resultsearch');



		$archive_subtitle = sprintf(
		/* translators: %s: Number of search results. */
			_n(
				'We found %s result for your search.',
				'We found %s results for your search.',
				$wp_query->found_posts,
				'plinfo'
			),
			number_format_i18n( $wp_query->found_posts )
		);
	} else {
		$archive_subtitle = __( 'Результатов нет', 'plinfo' );
	}
}

else {


get_header();
?>


		
<section id="work" class="category">
            <div class="work_hear">
                <div class="wrapper">
				<h3>Последние опубликованные статьи в разделе "Работа"</h3>
                
                


                    <div class="container work_hear">



                        <?php
                        global $post;


                        $myposts = get_posts( array(
                            'category_name' => 'rabota',
							'posts_per_page' => 10,
                        ) );

                        foreach( $myposts as $post ){
                            setup_postdata( $post );?>
                            <div class="working">
                                
                                <a href="<?php the_permalink(); ?>" class="workingLayer">
                                    <h3><?php the_title(); ?></h3>
                                </a>
                                <?php the_post_thumbnail(); ?>
                                <h5><?php the_title(); ?></h5>
                                
                            </div>
                        <?php }

                        wp_reset_postdata(); // сбрасываем переменную $post
                        ?>


                    </div>

                </div>
            </div>
        </section>



<section id="work" class="category">
            <div class="work_hear">
                <div class="wrapper">
				<h3>Последние опубликованные статьи в разделе "Семья"</h3>
                    <div class="container work_hear">



                        <?php
                        global $post;


                        $myposts = get_posts( array(
                            'category_name' => 'semya',
							'posts_per_page' => 5,
                        ) );

                        foreach( $myposts as $post ){
                            setup_postdata( $post );?>
                            <div class="working">
                                
                                <a href="<?php the_permalink(); ?>" class="workingLayer">
                                    <h3><?php the_title(); ?></h3>
                                </a>
                                <?php the_post_thumbnail(); ?>
                                <h5><?php the_title(); ?></h5>
                            </div>
                        <?php }

                        wp_reset_postdata(); // сбрасываем переменную $post
                        ?>


                    </div>

                </div>
            </div>
        </section>




		
<section id="work" class="category">
            <div class="work_hear">
                <div class="wrapper">
				<h3>Последние опубликованные статьи в разделе "Дети"</h3>
                    <div class="container work_hear">



                        <?php
                        global $post;


                        $myposts = get_posts( array(
                            'category_name' => 'deti',
							'posts_per_page' => 10,
                        ) );

                        foreach( $myposts as $post ){
                            setup_postdata( $post );?>
                            <div class="working">
                                
                                <a href="<?php the_permalink(); ?>" class="workingLayer">
                                    <h3><?php the_title(); ?></h3>
                                </a>
                                <?php the_post_thumbnail(); ?>
                                <h5><?php the_title(); ?></h5>
                            </div>
                        <?php }

                        wp_reset_postdata(); // сбрасываем переменную $post
                        ?>


                    </div>

                </div>
            </div>
        </section>

	
		<section id="work" class="category">
            <div class="work_hear">
                <div class="wrapper">
				<h3>Последние опубликованные статьи в разделе "Жизнь"</h3>
                    <div class="container work_hear">



                        <?php
                        global $post;


                        $myposts = get_posts( array(
                            'category_name' => 'zhizn',
							'posts_per_page' => 5,
                        ) );

                        foreach( $myposts as $post ){
                            setup_postdata( $post );?>
                            <div class="working">
                                
                                <a href="<?php the_permalink(); ?>" class="workingLayer">
                                    <h3><?php the_title(); ?></h3>
                                </a>
                                <?php the_post_thumbnail(); ?>
                                <h5><?php the_title(); ?></h5>
                            </div>
                        <?php }

                        wp_reset_postdata(); // сбрасываем переменную $post
                        ?>


                    </div>

                </div>
            </div>
        </section>




		
		<section id="work" class="category">
            <div class="work_hear">
                <div class="wrapper">
						<h3>Последние опубликованные статьи в разделе "Другие темы"</h3>			
                   
                    <div class="container work_hear">


                        <?php
                        global $post;


                        $myposts = get_posts( array(
                            'category_name' => 'drugie-voprosy',
							'posts_per_page' => 10,
                        ) );

                        foreach( $myposts as $post ){
                            setup_postdata( $post );?>
                            <div class="working">
                                
                                <a href="<?php the_permalink(); ?>" class="workingLayer">
                                    <h3><?php the_title(); ?></h3>
                                </a>
                                <?php the_post_thumbnail(); ?>
                                <h5><?php the_title(); ?></h5>
                            </div>
                        <?php }

                        wp_reset_postdata(); // сбрасываем переменную $post
                        ?>


                    </div>

                </div>
            </div>
        </section>






<?php




get_template_part('template-parts/mainindex');

}
get_footer();

?>


<style>
	.category .working:hover {
		flex-grow: 0!important;
		color: #1c2274;
		transform: scale(1.1);
		transition: .03s;
	}
	
	
	.wrapper {
		background: none;
	}
	.wrapper h3 {
		text-align: center;
	}
	section {
		padding-top: 50px;
	}
	.category .working img {
    	height: 150px;
    	width: 100%;
    	-o-object-fit: cover;
    	object-fit: cover;
		border-radius: 10px 10px 0px 0px;
	}
	
	.category .working {
		/* background-color: #5be0fd; */
		background: linear-gradient(rgb(251, 251, 255), rgb(193, 235, 232));
		border-radius: 10px;
		margin-top: 15px;
		color: #161736;
	}
	.category .working h5 {
		font-size: 18px;
		margin: 10px 10px;
	}
</style>



