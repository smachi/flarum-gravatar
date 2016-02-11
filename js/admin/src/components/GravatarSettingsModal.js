/*
 * This file is part of smachi/flarum-envato-login-page
 *
 * (c) Salva Machí <salvamb@sispixels.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import SettingsModal from 'flarum/components/SettingsModal';

export default class GravatarSettingsModal extends SettingsModal {
	className() {
		return 'GravatarSettingsModal Modal--small';
	}

	title() {
		return 'Gravatar Settings';
	}

	form() {
		return [
			<div className="Form-group">
				<label>Default Avatar</label>
				<input className="FormControl" bidi={this.setting('smachi-gravatar.default_avatar')}/>
				ex:/assets/avatar.png
			</div>
		];
	}
}
