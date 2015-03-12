<?php

/**
 * @file
 * Display Suite Condo Project Comparison configuration.
 */

function ds_condo_project_comparison() {
  return array(
    'label' => t('Condo Project 
    comparison'),
    'regions' => array(
      'hero' => t('Hero'),
      'main_title' => t('Title'),
    ),
    // Uncomment if you want to include a CSS file for this layout (condo_project_list.css)
    // 'css' => TRUE,
    // Uncomment if you want to include a preview for this layout (condo_project_list.png)
    // 'image' => TRUE,
  );
}
