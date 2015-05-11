<?php
/**
 * @file
 * Display Suite Condo Project template.
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
 * - $navigation: Rendered content for the "Navigation" region.
 * - $navigation_classes: String of classes that can be used to style the "Navigation" region.
 *
 * - $gallery: Rendered content for the "Gallery" region.
 * - $gallery_classes: String of classes that can be used to style the "Gallery" region.
 *
 * - $walkscore: Rendered content for the "Walkscore" region.
 * - $walkscore_classes: String of classes that can be used to style the "Walkscore" region.
 *
 * - $sales: Rendered content for the "Sales" region.
 * - $sales_classes: String of classes that can be used to style the "Sales" region.
 *
 * - $project_info: Rendered content for the "Project Info" region.
 * - $project_info_classes: String of classes that can be used to style the "Project Info" region.
 *
 * - $why: Rendered content for the "Why" region.
 * - $why_classes: String of classes that can be used to style the "Why" region.
 *
 * - $contact_info: Rendered content for the "Contact Info" region.
 * - $contact_info_classes: String of classes that can be used to style the "Contact Info" region.
 *
 * - $floorplans: Rendered content for the "Floorplans" region.
 * - $floorplans_classes: String of classes that can be used to style the "Floorplans" region.
 */
 
 $field = field_get_items('node', $node, 'field_logo_background_colour');
 $output = field_view_value('node', $node, 'field_logo_background_colour', $field[0]);
 $logoBG  = (!empty($output['#markup']))?$output['#markup']:'#f0f0f0';
?>

<<?php print $layout_wrapper; print $layout_attributes; ?> class="<?php print $classes;?> clearfix">

  <!-- Needed to activate contextual links -->
  <?php if (isset($title_suffix['contextual_links'])): ?>
    <?php print render($title_suffix['contextual_links']); ?>
  <?php endif; ?>

    <<?php print $hero_wrapper; ?> class="ds-region ds-hero<?php print $hero_classes; ?>" style="background-color:<?php echo $logoBG;?>;">
      <div class="wrap">
        <?php print $hero; ?>
      </div>
    </<?php print $hero_wrapper; ?>>

    <<?php print $navigation_wrapper; ?> class="ds-region ds-navigation<?php print $navigation_classes; ?>">
      <div class="wrap">
        <?php print $navigation; ?>
      </div>
    </<?php print $navigation_wrapper; ?>>

    <<?php print $gallery_wrapper; ?> class="ds-region ds-gallery<?php print $gallery_classes; ?>">
      <div class="wrap">
      <?php print $gallery; ?>
      </div>
    </<?php print $gallery_wrapper; ?>>

    <<?php print $walkscore_wrapper; ?> class="ds-region ds-walkscore<?php print $walkscore_classes; ?>">
      <div class="wrap">
        <?php print $walkscore; ?>
      </div>
    </<?php print $walkscore_wrapper; ?>>
    
    <<?php print $meta_wrapper; ?> class="ds-region ds-meta<?php print $meta_classes; ?>">
      <div class="wrap">
        <?php print $meta; ?>
      </div>
    </<?php print $meta_wrapper; ?>>
    
    <<?php print $sales_wrapper; ?> class="ds-region ds-sales<?php print $sales_classes; ?>">
      <div class="wrap">
      <?php print $sales; ?>
      </div>
    </<?php print $sales_wrapper; ?>>

    <<?php print $project_info_wrapper; ?> class="ds-region ds-project-info<?php print $project_info_classes; ?>">
    <div class="wrap">
      <h2 class="region-title">Project Information</h2>
      <?php print $project_info; ?>
    </div>
    </<?php print $project_info_wrapper; ?>>

    <<?php print $why_wrapper; ?> class="ds-region ds-why<?php print $why_classes; ?>">
    <div class="wrap">
      <h2 class="region-title">Why you should live here</h2>
      <?php print $why; ?>
    </div>
    </<?php print $why_wrapper; ?>>

    <<?php print $contact_info_wrapper; ?> class="ds-region ds-contact-info<?php print $contact_info_classes; ?>">
    <div class="wrap">
      <?php print $contact_info; ?>
    </div>
    </<?php print $contact_info_wrapper; ?>>

    <<?php print $floorplans_wrapper; ?> class="ds-region ds-floorplans<?php print $floorplans_classes; ?>">
    <div class="wrap">
      <h2 class="region-title">Floor Plans</h2>
      <?php echo views_embed_view('floor_plan_table','block', $node->nid);?>
      <?php print $floorplans; ?>
    </div>
    </<?php print $floorplans_wrapper; ?>>

</<?php print $layout_wrapper ?>>

<!-- Needed to activate display suite support on forms -->
<?php if (!empty($drupal_render_children)): ?>
  <?php print $drupal_render_children ?>
<?php endif; ?>
