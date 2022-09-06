// ==UserScript==
// @name				Better Spectrum
// @version				0.0.3
// @author				Baarn
// @homepage			https://github.com/Baarn/better-spectrum
// @update_url			https://raw.githubusercontent.com/Baarn/better-spectrum/main/better-spectrum.js
// @include				http://robertsspaceindustries.com/spectrum/community/*
// @include				https://robertsspaceindustries.com/spectrum/community/*
// @resource			REMOTE_CSS https://raw.githubusercontent.com/Baarn/better-spectrum/main/css/spectrum.css
// @grant				GM_getResourceText
// @grant				GM_addStyle
// ==/UserScript==

// load external css 
GM_addStyle (GM_getResourceText ("REMOTE_CSS"));
