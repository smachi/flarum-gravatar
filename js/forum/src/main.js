/*
 * This file is part of smachi/flarum-gravatar
 *
 * (c) Salva Machí <salvamb@sispixels.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

/*global ColorThief*/

import app from 'flarum/app';
import User from 'flarum/models/User';
import md5 from 'smachi/gravatar/helpers/md5';

app.initializers.add('smachi-gravatar', () =>  {

	User.prototype.avatarUrl = function() {

		if (!this.attribute('avatarUrl')) {

			let profile = 'https://www.gravatar.com/' + md5(this.attribute('email')) + '.json',
				user = this;

			// Check if the user has a gravar profile
			m.request({
				dataType: 'jsonp',
				url: profile,
				deserialize: function(value) {
					return value;
				},
			})
			.then(function(data) {

				// Gravatar found, add it to the user
				user.pushAttributes({
					avatarUrl: 'https://www.gravatar.com/avatar/' + md5(user.attribute('email')) + '.jpg'
				});

			}, function(error) {

				// Load the default avatar saved locally
				let defaultAvatar = app.forum.attribute('default_avatar') || '/extensions/smachi-gravatar/default-avatar.png';

				user.pushAttributes({
					avatarUrl: app.forum.attribute('baseUrl') + defaultAvatar
				});

			});

		}

		return this.attribute('avatarUrl');
	};

	User.prototype.calculateAvatarColor = function() {

		// Avoid the cross-origin error trying to get colors from remote image
		if ( this.attribute('avatarUrl').indexOf( app.forum.attribute('baseUrl') ) === -1 ) {
			return false;
		}

		const image = new Image();
		const user = this;

		image.onload = function() {
			const colorThief = new ColorThief();
			user.avatarColor = colorThief.getColor(this);
			user.freshness = new Date();
			m.redraw();
		};
		image.src = this.avatarUrl();

	};

});