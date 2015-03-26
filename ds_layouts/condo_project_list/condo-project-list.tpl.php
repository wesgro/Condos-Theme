<?php
/**
 * @file
 * Display Suite Condo Project List template.
 *
 * Available variables:
 *
 * Layout:
 * - $classes: String of classes that can be used to style this layout.
 * - $contextual_links: Renderable array of contextual links.
 * - $layout_wrapper: wrapper surrounding the layout.
 *
 * Regions:
 *
 * - $hero: Rendered content for the "Hero" region.
 * - $hero_classes: String of classes that can be used to style the "Hero" region.
 *
 * - $title: Rendered content for the "Title" region.
 * - $title_classes: String of classes that can be used to style the "Title" region.
 *
 * - $price: Rendered content for the "Price" region.
 * - $price_classes: String of classes that can be used to style the "Price" region.
 *
 * - $details: Rendered content for the "Details" region.
 * - $details_classes: String of classes that can be used to style the "Details" region.
 *
 * - $meta: Rendered content for the "Meta" region.
 * - $meta_classes: String of classes that can be used to style the "Meta" region.
 */
?>
<<?php print $layout_wrapper; print $layout_attributes; ?> class="<?php print $classes;?> clearfix">

  <!-- Needed to activate contextual links -->
  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

    <<?php print $hero_wrapper; ?> class="ds-region ds-hero<?php print $hero_classes; ?>">
      <?php print $hero; ?>
    </<?php print $hero_wrapper; ?>>

    <<?php print $main_title_wrapper; ?> class="ds-region ds-title<?php print $main_title_classes; ?>">
      <?php print $main_title; ?>
    </<?php print $main_title_wrapper; ?>>

    <<?php print $price_wrapper; ?> class="ds-region ds-price<?php print $price_classes; ?>">
      <?php print $price; ?>
    </<?php print $price_wrapper; ?>>

    <<?php print $details_wrapper; ?> class="ds-region ds-details<?php print $details_classes; ?>">
      <div class="vertical-align">
        <?php print $details; ?>
      </div>
    </<?php print $details_wrapper; ?>>

    <<?php print $meta_wrapper; ?> class="ds-region ds-meta<?php print $meta_classes; ?>">
      <?php print $meta; ?>
      
    </<?php print $meta_wrapper; ?>>

</<?php print $layout_wrapper ?>>

<!-- Needed to activate display suite support on forms -->
<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
