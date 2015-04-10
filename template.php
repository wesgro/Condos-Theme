<?php
/**
  * hey, you should show up on live now
  */
/**
 * Helper function to find and render a block.
 */
function leap_render_block_content($module, $delta) {
  $output = '';
  if ($block = block_load($module, $delta)) {
    if ($build = module_invoke($module, 'block_view', $delta)) {
      $delta = str_replace('-', '_', $delta);
      drupal_alter(array('block_view', "block_view_{$module}_{$delta}"), $build, $block);

      if (!empty($build['content'])) {
        return is_array($build['content']) ? render($build['content']) : $build['content'];
      }
    }
  }
  return $output;
}
/**
 * @file
 * Template overrides as well as (pre-)process and alter hooks for the
 * Condos Vancouver theme.
 */
 
 function leap_get_city_regions(){
   $vocabulary = taxonomy_vocabulary_machine_name_load('Location');
   $terms = entity_load('taxonomy_term', FALSE, array('vid' => $vocabulary->vid));
   return $terms;
 }

/**
* force regions to appear even if they don't contain blocks
*/
function condos_page_alter(&$page) {
  $regions = array('header','meta','content_header');
  //kpr($page);
  foreach($regions as $region){
    if ( !isset($page[$region]) || empty($page[$region])) {
        $page[$region] = array(
            '#region' => $region,
            '#weight' => '-10',
            '#theme_wrappers' => array('region'));
    }
  }
}

function leap_circle_maker($element){
  $field = field_get_items('node', $element['#object'], $element['#field_name']);
  $output = field_view_value('node', $element['#object'], $element['#field_name'], $field[0]);
  //krumo($field[0]);
  $percent = (isset($field[0]['safe_value']))?'100':$field[0]['value'];
  ?>
  <div class="stat">
    <input class="knob" data-thickness=".25" value="<?php echo $percent;?>" data-width="222" data-height="222" data-bgColor="#e3e2e2" data-inputColor="#666666" data-font="lato"  data-fgColor="#ffcc33" data-readOnly="true" data-min="0" data-max="100" data-fontWeight="400" data-angleOffset="180" data-endVal="<?php echo $percent;?>"/>
    <div class="description">
      <?php echo render($output);?>
    </div>
  </div>
  <?php
}
function leap_project_icons($icon, $classes, $element, $label, $items, $title_attributes, $attributes, $address = false){
  $container = ($address === true)?'address':'div';
  ?>
  <div class="field-container <?php print $classes; ?>">
    <div class="inner">

  <?php if ($element['#label_display'] == 'inline'): ?>
    <span class="field-label"<?php print $title_attributes; ?>>
        <?php if($icon && $element['#view_mode'] === 'full'):?>
          <img src="/<?php echo drupal_get_path('theme', 'condos').'/assets/img/icons/'.$icon;?>" alt="icon" height="27" />
        <?php endif;?>
      <?php print $label; ?>:
    </span>
  <?php elseif ($element['#label_display'] == 'above'): ?>
    <h4 class="field-label"<?php print $title_attributes; ?>>
      <?php print $label; ?>
    </h4>
  <?php endif; ?>
  
  <?php foreach ($items as $delta => $item): ?>
    <<?php echo $container;?> class="field-item"<?php print $attributes; ?>>
      <?php print render($item); ?>
    </<?php echo $container;?>>
  <?php endforeach; ?>
    </div>
  </div>
  <?php
}
function condos_form_alter(&$form, &$form_state, $form_id) {
  if ($form_id == 'search_block_form') {
    $form['search_block_form']['#title'] = t('Search'); // Change the text on the label element
    $form['search_block_form']['#title_display'] = 'invisible'; // Toggle label visibilty
    $form['search_block_form']['#size'] = 40;  // define size of the textfield
    //$form['search_block_form']['#default_value'] = t('Search'); // Set a default value for the textfield
    $form['actions']['submit']['#prefix'] = '<button type="submit" class="search">';
    $form['actions']['submit']['#suffix'] = '</button>';
    $form['actions']['submit']['#value'] = ''; // Change the text on the submit button
    $form['actions']['close'] = array(
      '#prefix' => '<button type="submit" class="close">',
      '#suffix' => '</button>',
      '#markup' => '<span>' . t('Close') . '</span>',
      "#executes_submit_callback" => FALSE,
      "#limit_validation_errors" => array()
    );
    /*
$form['actions']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/images/search-button.png');
    // Add extra attributes to the text box
    $form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Search';}";
    $form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Search') {this.value = '';}";
    // Prevent user from searching the default text
    $form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Search'){ alert('Please enter a search'); return false; }";
*/
    // Alternative (HTML5) placeholder attribute instead of using the javascript
    $form['search_block_form']['#attributes']['placeholder'] = t('Search');
  }

  if($form_id === 'user_login'){
    $form['#validate'][] = 'leap_custom_login_val';
  }
}


function leap_custom_login_val($form, &$form_state) {
  //die('dieing');
  $form = form_get_error($form['name']) . form_get_error($form['pass']);
  if($form != '') {
    $_GET['destination'] = 'user/login';
    drupal_goto('user/login');    
  }
  //drupal_goto('user/login'); 
}