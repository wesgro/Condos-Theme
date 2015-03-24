<?php

/**
 * @file
 * Omega's implementation to display a block.
 *
 * Available variables:
 * - $block->subject: Block title.
 * - $content: Block content.
 * - $block->module: Module that generated the block.
 * - $block->delta: An ID for the block, unique within each module.
 * - $block->region: The block region embedding the current block.
 * - $classes: String of classes that can be used to style contextually through
 *   CSS. It can be manipulated through the variable $classes_array from
 *   preprocess functions. The default values can be one or more of the
 *   following:
 *   - block: The current template type, i.e., "theming hook".
 *   - block-[module]: The module generating the block. For example, the user
 *     module is responsible for handling the default user navigation block. In
 *     that case the class would be 'block-user'.
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 *
 * Helper variables:
 * - $classes_array: Array of html class attribute values. It is flattened
 *   into a string within the variable $classes.
 * - $block_zebra: Outputs 'odd' and 'even' dependent on each block region.
 * - $zebra: Same output as $block_zebra but independent of any block region.
 * - $block_id: Counter dependent on each block region.
 * - $id: Same output as $block_id but independent of any block region.
 * - $is_front: Flags true when presented in the front page.
 * - $logged_in: Flags true when the current user is a logged-in member.
 * - $is_admin: Flags true when the current user is an administrator.
 * - $block_html_id: A valid HTML ID and guaranteed unique.
 *
 * @see template_preprocess()
 * @see template_preprocess_block()
 * @see template_process()
 *
 * @ingroup themeable
 */
 //get views filters block
// $view = views_get_view('condos');
// $display_id = 'page_1';
// $view->set_display($display_id);
// $view->init_handlers();
// $form_state = array(
//   'view' => $view,
//   'display' => $view->display_handler->display,
//   'exposed_form_plugin' => $view->display_handler->get_plugin('exposed_form'),
//   'method' => 'get',
//   'rerender' => TRUE,
//   'no_redirect' => TRUE,
// );
//$form = drupal_build_form('views_exposed_form', $form_state);
$view = views_get_page_view();
$currentDisplay = $view->current_display;
$urlPrefix ='';
if($currentDisplay === 'page_2'){
  $urlPrefix = '/condo-search/';
}
$townClass = "";
$townhouse = "?townhomes=1";
$moveInClass="";
$moveIn = "?completed=100";
$price = $urlPrefix."?sort_bef_combine=field_price_value%20ASC";
$priceDir = "asc";
$lovedText = "Least";
$loved = $urlPrefix."?sort_bef_combine=count%20ASC";
$lovedDir = "asc";
if(isset($_GET['townhomes']) && $_GET['townhomes'] === '1'){
  $townhouse = "?townhomes=0";
  $townClass = "selected";
}
if(isset($_GET['completed']) && $_GET['completed'] === '100'){
  $moveIn = "?completed=0";
  $moveInClass = "selected";
}
if(isset($_GET['sort_bef_combine']) && $_GET['sort_bef_combine'] === 'field_price_value DESC'){
  $price = $urlPrefix."?sort_bef_combine=field_price_value%20ASC";
  $priceDir = "asc selected";
 
}
if(isset($_GET['sort_bef_combine']) && $_GET['sort_bef_combine'] === 'field_price_value ASC'){
  $price = $urlPrefix."?sort_bef_combine=field_price_value%20DESC";
  $priceDir = "desc selected";
}
if(isset($_GET['sort_bef_combine']) && $_GET['sort_bef_combine'] === 'count DESC'){
  $loved = $urlPrefix."?sort_bef_combine=count%20ASC";
  $lovedDir = "asc selected";
   $lovedText = "Least";
}
if(isset($_GET['sort_bef_combine']) && $_GET['sort_bef_combine'] === 'count ASC'){
  $loved = $urlPrefix."?sort_bef_combine=count%20DESC";
  $lovedDir = "desc selected";
  $lovedText = "Most";
}

?>
<div<?php print $attributes; ?>>
  <div<?php print $content_attributes; ?>>
    <?php
    //print drupal_render($form);
    ?>
    <div class="filter"><a class="loved <?php echo $lovedDir;?>" href="<?php echo $loved;?>"><?php echo $lovedText;?></a></div>
    <div class="filter"><a class="price <?php echo $priceDir;?>" href="<?php echo $price;?>">Sort Prices</a></div>
    <div class="filter"><a class="movein <?php echo $moveInClass;?>" href="<?php echo $moveIn;?>">Move In Today</a></div>
    <div class="filter"><a class="townhouse <?php echo $townClass;?>" href="<?php echo $townhouse;?>">Town Houses</a></div>
  </div>
</div>
