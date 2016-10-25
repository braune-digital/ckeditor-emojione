CKEDITOR.plugins.add( 'emojione', {
	icons: 'emojione',
	requires: 'dialog',
	init: function( editor ) {
		editor.addCommand( 'emojione', new CKEDITOR.dialogCommand( 'emojioneDialog' ) );
		editor.ui.addButton( 'Emojione', {
			label: 'Insert emoji',
			command: 'emojione',
			toolbar: 'insert'
		});
		var pluginDirectory = this.path;
		editor.addContentsCss( pluginDirectory + 'styles/emojione.css' );
		CKEDITOR.dialog.add( 'emojioneDialog', this.path + 'dialogs/emojione.js' );
	}
});

/**
CKEDITOR.config.emojis = [
	':smile:', ':grinning:', ':nerd_face:', ':sunglasses:'
];*/