/* ** ybc 2015-03-16 - DO NOT EDIT; FILE AUTO GENERATED ** */
$(document).ready(function() {
	// Tooltips
	(function addToolTip() {
		var ttContent = "<ul class='nav-tooltip'>"+
							"<li><a href='/ybc/build/people/mal'>Credit</a></li>"+
							"<li><a href='/ybc/build/people/catherine'>Finance</a></li>"+
							"<li><a href='/ybc/build/people/jackie'>Marketing</a>"+
							"<li><a href='/ybc/build/people/john'>Quality, Environment, Health & Safety</a></li>"+
							"<li><a href='/ybc/build/people/cath'>Leadership and Staff Development</a></li>"+
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
	})
})