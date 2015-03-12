<?php

/**
 * @file
 * Display Suite Condo Project List configuration.
 */

function ds_condo_project_list() {
  return array(
    'label' => t('Condo Project List'),
    'regions' => array(
      'hero' => t('Hero'),
      'main_title' => t('Title'),
      'price' => t('Price'),
      'details' => t('Details'),
      'meta' => t('Meta'),
    ),
    // Uncomment if you want to include a CSS file for this layout (condo_project_list.css)
    // 'css' => TRUE,
    // Uncomment if you want to include a preview for this layout (condo_project_list.png)
    // 'image' => TRUE,
  );
}
