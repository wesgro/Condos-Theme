<?php
  // global $user;
  // $menu = 'user-menu';
  // if(in_array('Marketer', $user->roles)){
  //   $menu = 'menu-marketer-menu';
  // }
?>
<div<?php print $attributes; ?>>
  <ul>
    <li class="translate"><a href="#" class="chinese"><span class="notranslate">中国</span></a></li>
    <li class="search"><a href="#"><span><i class="icon icon-search-find"></i></span></a></li>
    <li class="user-menu condos">
      <a href="#" class=""><span><i class="ico-moon icon-empty-heart"></i> My List</span></a>
      <?php
        // $menu_depth = 2;
        // $tree = menu_tree_all_data($menu, null, $menu_depth);
        // $output = menu_tree_output($tree);
        // //print_r($output);
        // print drupal_render($output);
      ?>
    </li>
  </ul>
 <!--
 <a class="translate chinese" href="#"><span class="notranslate">中国</span></a>
  <a class="search" href="#"><span><i class="ico-moon icon-search"></i></span></a>
  <?php if(in_array('authenticated user', $user->roles)):?>
    <div class="user-menu">
      <a href="#"><span>My Account</span></a>
      <?php
        //$menu_depth = 2;
        //$tree = menu_tree_all_data('user-menu', null, $menu_depth);
        //$output = menu_tree_output($tree);
        //print drupal_render($output);
      ?>
    </div>
  <?php else:?>
  <a class="condos" href="/favorites"><span><i class="ico-moon icon-empty-heart"></i>My List</span></a>
  <?php endif;?>
-->
  <?php print $content; ?>
</div>
