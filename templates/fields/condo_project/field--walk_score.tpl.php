<?php
$field = field_get_items('node', $element['#object'], 'field_address');
$output = field_view_value('node', $element['#object'], 'field_address', $field[0]);
//krumo($output);?>
<script type='text/javascript'>
var ws_wsid = 'e8a0d08041ff44888bcf155c737b29ab';
var ws_address = '<?php echo "{$output['#address']['thoroughfare']} {$output['#address']['locality']} {$output['#address']['administrative_area']}";?>';
var ws_width = '100%';
var ws_height = '360';
var ws_layout = 'none';
var ws_commute = 'true';
var ws_transit_score = 'true';
var ws_map_modules = "street_view,walkability";
</script><style type='text/css'>#ws-walkscore-tile{position:relative;text-align:left}#ws-walkscore-tile *{float:none;}#ws-footer a,#ws-footer a:link{margin-right:6px;white-space:nowrap;padding:0;color:#000;font-weight:bold;text-decoration:none}#ws-footer a:hover{color:#777;text-decoration:none}#ws-footer a:active{color:#b14900}</style><div id='ws-walkscore-tile'><div id='ws-footer' style='position:absolute;top:426px;left:8px;width:588px'></div></div><script type='text/javascript' src='//www.walkscore.com/tile/show-walkscore-tile.php'></script>