System.register('smachi/gravatar/components/GravatarSettingsModal', ['flarum/components/SettingsModal'], function (_export) {
	/*
  * This file is part of smachi/flarum-envato-login-page
  *
  * (c) Salva Machí <salvamb@sispixels.com>
  *
  * For the full copyright and license information, please view the LICENSE
  * file that was distributed with this source code.
  */

	'use strict';

	var SettingsModal, GravatarSettingsModal;
	return {
		setters: [function (_flarumComponentsSettingsModal) {
			SettingsModal = _flarumComponentsSettingsModal['default'];
		}],
		execute: function () {
			GravatarSettingsModal = (function (_SettingsModal) {
				babelHelpers.inherits(GravatarSettingsModal, _SettingsModal);

				function GravatarSettingsModal() {
					babelHelpers.classCallCheck(this, GravatarSettingsModal);
					babelHelpers.get(Object.getPrototypeOf(GravatarSettingsModal.prototype), 'constructor', this).apply(this, arguments);
				}

				babelHelpers.createClass(GravatarSettingsModal, [{
					key: 'className',
					value: function className() {
						return 'GravatarSettingsModal Modal--small';
					}
				}, {
					key: 'title',
					value: function title() {
						return 'Gravatar Settings';
					}
				}, {
					key: 'form',
					value: function form() {
						return [m(
							'div',
							{ className: 'Form-group' },
							m(
								'label',
								null,
								'Default Avatar'
							),
							m('input', { className: 'FormControl', bidi: this.setting('smachi-gravatar.default_avatar') }),
							'ex:/assets/avatar.png'
						)];
					}
				}]);
				return GravatarSettingsModal;
			})(SettingsModal);

			_export('default', GravatarSettingsModal);
		}
	};
});;
System.register('smachi/gravatar/main', ['flarum/extend', 'flarum/app', 'smachi/gravatar/components/GravatarSettingsModal'], function (_export) {
  /*
   * This file is part of smachi/flarum-gravatar
   *
   * (c) Salva Machí <salvamb@sispixels.com>
   *
   * For the full copyright and license information, please view the LICENSE
   * file that was distributed with this source code.
   */

  'use strict';

  var extend, app, GravatarSettingsModal;
  return {
    setters: [function (_flarumExtend) {
      extend = _flarumExtend.extend;
    }, function (_flarumApp) {
      app = _flarumApp['default'];
    }, function (_smachiGravatarComponentsGravatarSettingsModal) {
      GravatarSettingsModal = _smachiGravatarComponentsGravatarSettingsModal['default'];
    }],
    execute: function () {

      app.initializers.add('smachi-gravatar', function (app) {
        app.extensionSettings['smachi-gravatar'] = function () {
          return app.modal.show(new GravatarSettingsModal());
        };
      });
    }
  };
});