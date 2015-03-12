<?php

/**
 * @file
 * Display Suite Condo Project configuration.
 */

function ds_condo_project() {
  return array(
    'label' => t('Condo Project'),
    'regions' => array(
      'hero' => t('Hero'),
      'navigation' => t('Navigation'),
      'gallery' => t('Gallery'),
      'walkscore' => t('Walkscore'),
      'meta' => t('Meta Info'),
      'sales' => t('Sales'),
      'project_info' => t('Project Info'),
      'why' => t('Why'),
      'contact_info' => t('Contact Info'),
      'floorplans' => t('Floorplans'),
    ),
    // Uncomment if you want to include a CSS file for this layout (condo_project.css)
    // 'css' => TRUE,
    // Uncomment if you want to include a preview for this layout (condo_project.png)
    // 'image' => TRUE,
  );
}
