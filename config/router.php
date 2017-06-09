<?php

$routers = array();
$routers['/%'] = array('CoachBundle\Site', 'index');
$routers['/callback'] = array('CoachBundle\Api', 'callback');
$routers['/api/submit'] = array('CoachBundle\Api', 'submit');