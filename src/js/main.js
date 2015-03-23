$(document).ready(function() {
	// Tooltips
	(function addToolTip() {
		var ttContent = "<ul class='nav-tooltip'>"+
							"<li><a href='/people/mal'>Credit</a></li>"+
							"<li><a href='/people/catherine'>Finance</a></li>"+
							"<li><a href='/people/jackie'>Marketing</a>"+
							"<li><a href='/people/john'>Quality, Environment, Health & Safety</a></li>"+
							"<li><a href='/people/cath'>Leadership and Staff Development</a></li>"+
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

});

function updateRunner() {
	if($('#updates').length) {
		IN.API.Raw('companies/9333069/updates?event-type=status-update&format=json').method('GET').result(function(d){showUpdates(d, true, $('#updates'))});
	}
	if($('#archived-updates').length) {
		IN.API.Raw('companies/9333069/updates?event-type=status-update&format=json').method('GET').result(function(d){showUpdates(d, false, $('#archived-updates'))});
	}
}

function showUpdates(updates, first, el) {
	var updatesLen = updates.values.length;
	if (updatesLen === 1 && !first) { el.append('No archived updates') };
	while(updatesLen--) {
		if(!first) { continue; }
		var content = updates.values[updatesLen].updateContent.companyStatusUpdate.share.comment,
			likes = updates.values[updatesLen].likes._total,
			d = new Date(updates.values[updatesLen].timestamp); 
		d = d.getDay()+'/'+(d.getMonth()+1)+'/'+d.getFullYear();;
		el.append('<div class="updates">' + content + '<div style="color:gray;">'+d+' - '+likes+' likes</div></div>');
		if(first) { break; }
	}
}
