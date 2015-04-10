<?php
$regions = leap_get_city_regions();
//krumo($regions);
?>
<ul class="dropdown city-selector selector">
  <li class="top-level">
    <div class="container">
      <b>Where do you want to live?</b> <span class="ico-moon icon-arrow-down"></span>
    </div>
    <ul class="city-selections selections">
      <?php 
        
        foreach($regions as $region):?>
          <?php
            $regionName = str_replace(" ", "-", strtolower($region->name))
          ?>
          <li><a href="/condo-search/<?php echo $regionName;?>" class="notranslate"><?php echo $region->name;?></a></li>
        <?php endforeach;?>
    </ul>
  </li>
</ul>