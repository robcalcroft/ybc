$(document).ready(function() {
	(function addToolTip() {
		var ttContent = "<ul class='nav-tooltip'>"+
							"<li><a href='/ybc/build/people/mal'>Mal Peacock</a></li>"+
							"<li><a href='/ybc/build/people/catherine'>Catherine Wainwright</a></li>"+
							"<li><a href='/ybc/build/people/jackie'>Jackie Wilson</a>"+
							"<li><a href='/ybc/build/people/john'>John Wilson</a></li>"+
							"<li><a href='/ybc/build/people/cath'>Cath Winfield</a></li>"+
						"</ul>";

		$('#about-nav').tooltipster({
			content: $(ttContent),
			interactive: true,
			iconTouch: true
		})
	})();
})