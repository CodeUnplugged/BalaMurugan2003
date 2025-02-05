import React from 'react'


const AI = props => {
	return (
		<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1024 1024"
  width="200px"
  height="200px"
>
  <title>Realistic Microphone Icon</title>

  <!-- White circular background -->
  <circle cx="512" cy="512" r="500" fill="white" />

  <!-- Microphone body -->
  <ellipse cx="512" cy="360" rx="110" ry="160" fill="black" />
  <rect x="490" y="360" width="40" height="320" rx="10" fill="black" />

  <!-- Microphone grille -->
  <circle cx="512" cy="280" r="100" fill="#333" />
  <line x1="450" y1="280" x2="570" y2="280" stroke="#999" stroke-width="10" />
  <line x1="485" y1="230" x2="540" y2="330" stroke="#999" stroke-width="8" />
  <line x1="485" y1="330" x2="540" y2="230" stroke="#999" stroke-width="8" />

  <!-- Braces around mic -->
  <path
    d="M220 500 L300 400 M220 500 L300 600"
    stroke="#FF6700"
    stroke-width="35"
    stroke-linecap="round"
  />
  <path
    d="M804 500 L724 400 M804 500 L724 600"
    stroke="#FF6700"
    stroke-width="35"
    stroke-linecap="round"
  />
</svg>

	)
}

AI.propTypes = {}

export default AI
