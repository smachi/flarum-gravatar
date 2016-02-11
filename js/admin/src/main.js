/*
 * This file is part of smachi/flarum-gravatar
 *
 * (c) Salva Machí <salvamb@sispixels.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/extend';
import app from 'flarum/app';

import GravatarSettingsModal from 'smachi/gravatar/components/GravatarSettingsModal';

app.initializers.add('smachi-gravatar', app => {
	app.extensionSettings['smachi-gravatar'] = () => app.modal.show(new GravatarSettingsModal());
});
