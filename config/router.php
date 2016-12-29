<?php

$routers = array();
$routers['/'] = array('CoachBundle\Site', 'index');
$routers['/card'] = array('CoachBundle\Site', 'card');
$routers['/card2'] = array('CoachBundle\Site', 'card2');
$routers['/card3'] = array('CoachBundle\Site', 'card3');
$routers['/callback'] = array('CoachBundle\Api', 'callback');
$routers['/api/submit'] = array('CoachBundle\Api', 'submit');