<?php

/**
 * Implements hook_preprocess_page().
 */
function condos_preprocess_page(&$vars, $hook) {
  // You can use preprocess hooks to modify the variables before they are passed
  // to the theme function or template file.
  //krumo($vars);
  /**
  * ADD GOOGLE TRANSLATE
  */
  drupal_add_js('//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2', 
  array('type'=>'external',
  'scope' => 'footer',
  'defer' => 'true',
  'weight' => -20,
  'group'=>JS_LIBRARY
  ));
  $block_content = <<<EOT
/* <![CDATA[ */
function googleTranslateElementInit2() {new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element2');}
/* ]]> */
EOT;
  drupal_add_js($block_content,
  array('type'=>'inline',
  'scope' => 'footer',
  'defer' => 'true',
  'weight' => -19,));
  
  if (isset($vars['node']->type)) {
    // If the content type's machine name is "my_machine_name" the file
    // name will be "page--my-machine-name.tpl.php".
    $vars['theme_hook_suggestions'][] = 'page__' . $vars['node']->type;
  }
  /**
  * Add google maps
  */
  $scripts = drupal_add_js();
  if(!isset($scripts['https://maps.googleapis.com/maps/api/js?sensor=true'])) {
    drupal_add_js('//maps.googleapis.com/maps/api/js?key=AIzaSyAz36Gx-Cx_YHwAXfTanlUZTz_KbvX7mOA', 
    array('type'=>'external',
    'scope' => 'footer',
    'weight' => -20,
    'group'=>JS_LIBRARY
    ));
  }
  
  
}
