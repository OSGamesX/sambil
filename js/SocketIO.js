
function SocketIO() {

	var playerInfo;

	var socket = io( 'http://Sambil.32x.io' /* 'http://Sambil-stage.herokuapp.com' */ );

	function joinGame( id, pass, name ) {

		playerInfo = {

			id, pass, name

		};

		setInterval( function() {

			charaAnim.getPlayerState( playerInfo );

			socket.emit( 'playerInfo', playerInfo );

		}, 300 );

	};

	function onPlayerUpdates( handler ) {
		socket.on( 'playerInfo', handler );
	};

	function onPlayerDisconnects( handler ) {
		socket.on( 'playerLeft', handler );
	};

	return {
		joinGame,
		onPlayerUpdates,
		onPlayerDisconnects
	};

};
