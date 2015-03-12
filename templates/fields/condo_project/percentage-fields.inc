<?php
/**
 * @file field--fences-div.tpl.php
 * Wrap each field value in the <div> element.
 *
 * @see http://developers.whatwg.org/grouping-content.html#the-div-element
 */
 //krumo($element);
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
    <?php if($element['#view_mode'] === 'full'):?>
      <?php leap_circle_maker($element);?>
    <?php else:?>
      <?php print render($item); ?>
    <?php endif;?>
  </div>
<?php endforeach; ?>
  </div>
</div>
