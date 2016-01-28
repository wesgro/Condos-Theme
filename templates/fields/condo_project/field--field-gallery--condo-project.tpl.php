<?php
/**
 * @file field--fences-ul.tpl.php
 * Wrap each field value in the <li> element and all of them in the <ul> element.
 *
 * @see http://developers.whatwg.org/grouping-content.html#the-ul-element
 */
$number = count($items);
$leftOver = 0;
if($number < 9){
  $leftOver = 9 - $number;
}
?>

<?php if ($element['#label_display'] == 'inline'): ?>
  <span class="field-label"<?php print $title_attributes; ?>>
    <?php print $label; ?>:
  </span>
<?php elseif ($element['#label_display'] == 'above'): ?>
  <h3 class="field-label"<?php print $title_attributes; ?>>
    <?php print $label; ?>
  </h3>
<?php endif; ?>
<?php if($number > 0):?>
<ul class="<?php print $classes; ?>"<?php print $attributes; ?>>

  <?php foreach ($items as $delta => $item): ?>
    <li<?php print $item_attributes[$delta]; ?>>
      <?php print render($item); ?>
    </li>
  <?php endforeach; ?>
  <?php for ($i=0; $i<$leftOver;$i++):?>
    <li class="empty">
      <img src="/<?php echo drupal_get_path('theme', variable_get('theme_default', NULL)).'/assets/img/blank.png';?>" alt="blank" />
    </li>
  <?php endfor;?>

</ul>
<?php endif;?>