$(document).ready(function() {
	$('.logos-container .logo').click(function () {
		$('.mac_screen_content .macbook-background').removeClass('allin beaverbrook encore mendocino skinlab');
		
		switch(this.id) {
			case 'allin-logo':
					$('.mac_screen_content .macbook-background').addClass('allin');
					break;
			case 'beaverbrook-logo':
					$('.mac_screen_content .macbook-background').addClass('beaverbrook');
					break;
			case 'encore-logo':
					$('.mac_screen_content .macbook-background').addClass('encore');
					break;
			case 'mendocino-logo':
					$('.mac_screen_content .macbook-background').addClass('mendocino');
					break;
			case 'skinlab-logo':
					$('.mac_screen_content .macbook-background').addClass('skinlab');
					break;
		}
	});

	$('.menulink').click(function() {
		setTimeout(function() {
			removeHash();
		}, 1);
	});

	function removeHash() {
		window.history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
	}
});