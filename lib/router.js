Router.configure({
	layoutTemplate: 'player'
});
Router.route('/' , {name: 'playList'});
Router.route('/new', {name: 'addSong'});