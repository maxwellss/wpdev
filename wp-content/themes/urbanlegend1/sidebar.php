<div id="sidebar">
<?php
	if (!is_page('About') && !is_page('Portfolio')){	
		get_sidebar('featured');
	}
	if (is_page('About')){
		get_template_part('cform2');
		if ( function_exists('dynamic_sidebar') && dynamic_sidebar('port-page-side') ) :
		endif;
	}
?>
<!-- AddThis Button BEGIN -->
<div class="addthis_toolbox addthis_default_style ">
<a class="addthis_button_preferred_1"></a>
<a class="addthis_button_preferred_2"></a>
<a class="addthis_button_preferred_3"></a>
<a class="addthis_button_preferred_4"></a>
<a class="addthis_button_compact"></a>
<a class="addthis_counter addthis_bubble_style"></a>
</div>
<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4e6c5b311bf04a25"></script>
<!-- AddThis Button END -->
</div>

