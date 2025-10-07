<?php
/**
 * Render the Advanced Levels Page block on the frontend.
 */
$output = pmprosus_signup_shortcode( $attributes );
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php echo $output; ?>
</div>