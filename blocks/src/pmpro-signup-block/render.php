<?php
/**
 * Render the Signup Shortcode block on the frontend.
 */
$output = pmprosus_signup_shortcode( $attributes );
?>
<div <?php echo get_block_wrapper_attributes(); // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>>
	<?php echo $output ; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped ?>
</div>