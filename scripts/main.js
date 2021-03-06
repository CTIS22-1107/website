const ROOT = '/website'; // https://github.com/COMP501-1107/website
document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('nav').innerHTML = `
		<ul>
			<li><a href="${ROOT}/index.html">Home page</a></li>
		</ul>
		<ul>
			<li><a href="${ROOT}/misc/team-formation.html">Team Formation</a></li>
		</ul>
		<ul>
			<li><a href="${ROOT}/misc/topic.html">Technology/Topic</a></li>
		</ul>
		<ul>
			<li><a href="${ROOT}/misc/opportunities.html">Opportunities</a></li>
			<li><a href="${ROOT}/misc/risks.html">Risks</a></li>
			<li><a href="${ROOT}/misc/choices.html">Choices</a></li>
		</ul>
		<ul>
			<li><a href="${ROOT}/misc/ethics.html">Ethical Reflections</a></li>
		</ul>
		<ul>
			<li><a href="${ROOT}/misc/references.html">References</a></li>
		</ul>
		<!--
		<ul>
			<li><a href="${ROOT}/misc/process.html">Process Support</a></li>
			<li><a href="${ROOT}/misc/rubric.html">Assessment Rubric</a></li>
			<li><a href="${ROOT}/misc/portfolio.html">Project Portfolio</a></li>
		</ul>
		-->
	`;
	document.querySelector('footer').innerHTML = `
        <hr>
		<span>Group 1107 &ndash; Nate, Kishan, Blake</span>
		<br>
		<a href="https://github.com/CTIS22-1107/website">Hosted on GitHub</a>
    `;
});
