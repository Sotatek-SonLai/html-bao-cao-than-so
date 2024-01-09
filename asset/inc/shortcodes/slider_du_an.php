<?php

// First register resources with init
function zz_shortcode_resource() {
    wp_register_script("zz-shortcode-jscss-script", plugins_url("source.js", __FILE__), array('jquery'), "1.0", false);
}
add_action( 'init', 'zz_shortcode_resource' );


function slide_da() {
echo "<h2>lskdfjlaskd</h2>";

}