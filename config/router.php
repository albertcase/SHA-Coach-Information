<?php

$routers = array();
$routers['/'] = array('CoachBundle\Site', 'index');
$routers['/card'] = array('CoachBundle\Site', 'card', array('1'));
$routers['/card2'] = array('CoachBundle\Site', 'card', array('2'));
$routers['/card3'] = array('CoachBundle\Site', 'card', array('3'));
$routers['/card/%'] = array('CoachBundle\Site', 'card');
$routers['/callback'] = array('CoachBundle\Api', 'callback');
$routers['/api/submit'] = array('CoachBundle\Api', 'submit');