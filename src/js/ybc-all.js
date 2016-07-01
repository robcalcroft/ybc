/* ** ybc 2016-07-01 - DO NOT EDIT; FILE AUTO GENERATED ** */
$(document).ready(function() {
	// Tooltips
	(function addToolTip() {
		var ttContent = "<ul class='nav-tooltip'>"+
              "<li><a href='/people/jackie'>Marketing</a>"+
              "<li><a href='/mentoringandcoaching'>Mentoring &amp; Coaching</a></li>"+
              "<li><a href='/people/catherine'>Finance &amp; Accounting</a></li>"+
							"<li><a href='/people/elizabeth'>Corporate Financial Planning</a></li>"+
							"<li><a href='/people/john'>Quality, Environment, Health & Safety</a></li>"+
						"</ul>";

		$('#about-nav').tooltipster({
			content: $(ttContent),
			interactive: true,
			iconTouch: true
		})
	})();

	// Show hide nav menu
	$('.nav-show-mobile').click(function() {
		$('#nav').slideToggle();
	});

	if($('#archived-updates, #updates').length > 0) {
		updateRunner($('#archived-updates, #updates')[0]);
	}

});

function updateRunner(el) {
	$.getJSON('http://api.tumblr.com/v2/blog/yorkshirebusinesscollective.tumblr.com/posts/text?api_key=gLvLtO7ag70EkJZtIOWiXUrRX9o58VRddXe96tdGIDmrTzcUQd&callback=?&notes_info=true', function(data) {
		showUpdates(data.response.posts, el);
	});
}

function showUpdates(updates, el) {
	var len = updates.length, d;

	if(el.id === 'updates') {
		d = new Date(updates[0].timestamp * 1000);
		$(el).append('<div class="updates">' + updates[0].body + '<div style="color:gray;">Posted - '+d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()+'</div></div>');
	} else {
		updates = updates.reverse();
		while(len--) {
			if(len === updates.length - 1) {
				continue;
			}
			d = new Date(updates[len].timestamp * 1000);
			$(el).append('<div class="updates">' + updates[len].body + '<div style="color:gray;">Posted - '+d.getDate()+'/'+(d.getMonth()+1)+'/'+d.getFullYear()+'</div></div><br />');
		}
	}
}
