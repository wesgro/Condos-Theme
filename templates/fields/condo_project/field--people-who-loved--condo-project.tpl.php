<?php
/**
 * @file field--fences-div.tpl.php
 * Wrap each field value in the <div> element.
 *
 * @see http://developers.whatwg.org/grouping-content.html#the-div-element
 */
//print_r($variables);
$flags = flag_get_counts('node',$variables['element']['#object']->nid);
?>
<div class="field-container <?php print $classes; ?>">
  <div class="inner">
<?php if ($element['#label_display'] == 'inline'): ?>
  <span class="field-label"<?php print $title_attributes; ?>>
    <?php print $label; ?>:
  </span>
<?php elseif ($element['#label_display'] == 'above'): ?>
  <h4 class="field-label"<?php print $title_attributes; ?>>
    <?php print $label; ?>
  </h4>
<?php endif; ?>

<?php foreach ($items as $delta => $item): ?>
  <div class="field-item"<?php print $attributes; ?>>
    <?php if(isset($flags['condo_flag']) && $flags['condo_flag'] > 0):
      $person = ($flags['condo_flag'] > 1)?'people':'person';
      $loved = ($flags['condo_flag'] > 1)?'love':'loves';
    ?>
      <?php echo $flags['condo_flag']; ?> <?php echo $person;?> <?php echo $loved;?> this
    <?php else:?>
      Give it some love
    <?php endif;?>
  </div>
<?php endforeach; ?>
  </div>
</div>
