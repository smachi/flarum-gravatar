<?php
/*
 * This file is part of smachi/flarum-gravatar
 *
 * (c) Salva Machí <salvamb@sispixels.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

use Smachi\Gravatar\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return function (Dispatcher $events) {
	$events->subscribe(Listener\AddClientAssets::class);
};