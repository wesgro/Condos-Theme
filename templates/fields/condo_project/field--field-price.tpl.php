<?php
/**
 * @file field--fences-div.tpl.php
 * Wrap each field value in the <div> element.
 *
 * @see http://developers.whatwg.org/grouping-content.html#the-div-element
 */
if(render($items[0]) === '$0'){
  $label = '';
}
?>
<div class="field-container <?php print $classes; ?>">
  <div class="inner">
<?php if ($element['#label_display'] == 'inline' && render($items[0]) !== '$0'): ?>
  <span class="field-label"<?php print $title_attributes; ?>>
    <?php print $label; ?>
  </span>
<?php elseif ($element['#label_display'] == 'above' && render($items[0]) !== '$0'): ?>
  <h4 class="field-label"<?php print $title_attributes; ?>>
    <?php print $label; ?>
  </h4>
<?php endif; ?>

<?php foreach ($items as $delta => $item): ?>

  <div class="field-item"<?php print $attributes; ?>>
    <?php if(render($item) !== '$0'):?>
      <?php print render($item); ?>
    <?php else:?>
      Price coming soon
    <?php endif;?>
  </div>
<?php endforeach; ?>
  </div>
</div>
