<?php

$aliases['dev'] = array(
	'uri'=> 'hiddentalents.ccistaging.com',
	'root' => '/home/staging/subdomains/hiddentalents/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),

	'ssh-options'=>'-p 37241'
);

$aliases['live'] = array(
	'uri'=> 'live.hiddentalents.com',
	'root' => '/home/staging/subdomains/hiddentalents/public_html',
	'remote-host'=> 'host.ccistudios.com',
	'remote-user'=> 'staging',
	'path-aliases'=> array(
		'%files'=> 'sites/default/files',
	),

);

