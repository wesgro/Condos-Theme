<?php //krumo($element['#object']);?>
<div class="contact-info clearfix">
  <h2 class="region-title">Sales Presentation Centre</h2>
  <?php
    $field = field_get_items('node', $element['#object'], 'field_website_url');
    $output = field_view_value('node', $element['#object'], 'field_website_url', $field[0]);
    $url = render($output);
    
    $field = field_get_items('node', $element['#object'], 'field_phone_number');
    $output = field_view_value('node', $element['#object'], 'field_phone_number', $field[0]);
    $phone = render($output);
    $field = field_get_items('node', $element['#object'], 'field_geo_data');
    $geo = $field[0];
  
    $field = field_get_items('node', $element['#object'], 'field_address');
    $output = field_view_value('node', $element['#object'], 'field_address', $field[0]);
    $address = render($output);
    
    $field = field_get_items('node', $element['#object'], 'field_open_times');
    $output = field_view_value('node', $element['#object'], 'field_open_times', $field[0]);
    $open = render($output);
  ?>
  <div class="col col-1">
  <ul>
    <li><a href="<?php echo $url;?>" target="_blank">Visit Website</a></li>
    <li><a class="map-popup" href="#" data-lat="<?php echo $geo['lat'];?>" data-lng="<?php echo $geo['lon'];?>">View Map</a></li>
    <li><a href="tel:<?php echo $phone;?>"><?php echo $phone;?></a></li>
  </ul>
  </div>
  <div class="col col-2">
    <div class="inner">
      <?php echo $address;?>
      <p><?php echo $open;?></p>
    </div>
  </div>
</div>