---
layout: post
title: OralVision Resources
description: Links to all OralVision project information
image: assets/images/pic11.jpg
nav-menu: false
---

# OralVision Project Information

Explore our comprehensive resources about OralVision, the deep learning-powered diagnostic device revolutionizing oral health care in underserved communities.

<div class="box">
<p><strong>OralVision</strong>: Utilizing deep learning to revolutionize oral diagnostics in underserved communities. Our innovative device captures high-resolution images of the oral cavity and analyzes them in real-time using advanced machine learning algorithms.</p>
</div>

## Key Topics

{% for post in site.posts %}
<div class="row">
	<div class="12u$">
		<h3>{{ post.title }}</h3>
		<p>{{ post.description }}</p>
		<ul class="actions">
			<li><a href="{{ post.url | relative_url }}" class="button special">Read More</a></li>
		</ul>
	</div>
</div>
{% endfor %}

<hr class="major" />

## Quick Navigation

<ul class="actions">
	<li><a href="{{ '/info/about' | relative_url }}" class="button">About OralVision</a></li>
	<li><a href="{{ '/info/solution' | relative_url }}" class="button special">Our Solution</a></li>
	<li><a href="{{ '/info/goals' | relative_url }}" class="button">Goals & Strategy</a></li>
</ul>
