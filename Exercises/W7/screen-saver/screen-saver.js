/**
 * Draws a screen saver
 *
 * Dependencies: Install with Yarn
 *
 * Tutorial at: https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial
 */

const vertSource = require('./shaders/screen-saver.vert');

function main() {
	const canvas = document.getElementById('screen');

	/**
	 * @type {WebGLRenderingContext}
	 */
	const gl = canvas.getContext('webgl');

	if (gl === null) {
		alert('Unable to initialize WebGL. Your browser or machine may not support it.');
		return;
	}

	gl.clearColor(0, 0, 0, 1);
	gl.clear(gl.COLOR_BUFFER_BIT);
}

window.onload = main;
