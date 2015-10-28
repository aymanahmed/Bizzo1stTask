Template.player.helpers({
  path : function(){
    if(!Session.get('selectedSongPath'))
      return Songs.findOne().path;
    return Session.get('selectedSongPath');
  },
  singer : function(){
  	return Songs.findOne({name:"swan song"}).singer;
  },
  name : function(){
  	return Songs.findOne({name:"swan song"}).name;
  }

});

Template.playList.helpers({
	songs: function(){
		console.log(Songs.find().fetch());
		return Songs.find();
	}
});

Template.playListItem.helpers({
  singer : function(){
  	return this.singer;
  },
  name : function(){
  	return this.name;
  },
  selectedClass : function(){
    var selectedId = this._id;
    if(selectedId == Session.get('selectedSong'))
      return "selected";
  }
});
Template.playListItem.events({
  'click': function(){
    Session.set('selectedSongPath', this.path);
    Session.set('selectedSong', this._id);
  }
})
Template.addSong.events({
  'submit form': function(e){
    e.preventDefault();
    console.log(e.target.songName.value);
  }
})