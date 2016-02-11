<?php
/*
 * This file is part of smachi/flarum-gravatar
 *
 * (c) Salva Machí <salvamb@sispixels.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Smachi\Gravatar\Listener;

use Flarum\Event\ConfigureClientView;
use Illuminate\Contracts\Events\Dispatcher;


class AddClientAssets {

	/**
	 * @param Dispatcher $events
	 */
	public function subscribe( Dispatcher $events ) {

		$events->listen( ConfigureClientView::class, [ $this, 'addAssets' ] );
	}

	/**
	 * @param ConfigureClientView $event
	 */
	public function addAssets( ConfigureClientView $event ) {

		if ( $event->isForum() ) {
			$event->addAssets( [
				__DIR__ . '/../../js/forum/dist/extension.js'
			] );
			$event->addBootstrapper( 'smachi/gravatar/main' );
		}

		if ( $event->isAdmin() ) {
			$event->addAssets( [
				__DIR__ . '/../../js/admin/dist/extension.js',
			] );
			$event->addBootstrapper( 'smachi/gravatar/main' );
		}

	}
}
