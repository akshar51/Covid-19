# 🌍 COVID-19 Country Stats Dashboard

## 📋 Overview
This web-based application allows users to select a country and view up-to-date COVID-19 statistics, including the total confirmed cases, deaths, and last updated information. It fetches real-time data from a publicly available API and provides a seamless, interactive experience.

**Live Demo:** [COVID-19 Dashboard](https://covid-19-murex-sigma.vercel.app/)

---

## 🛠 Technologies Used

- **HTML**: Basic structure for the webpage, including the dropdown for selecting countries and areas to display the stats.
- **CSS**: Used to style the page, including animations, hover effects, and custom transitions.
- **JavaScript**: Handles the interaction and fetches real-time COVID-19 data from an external API.

---

## 🌐 Project Structure

1. **HTML**:
   - **`index.html`**: Contains the structure of the page, including:
     - A dropdown to select countries.
     - A section to display the country name, confirmed cases, deaths, and the last updated date.
   - **External Resources**: Bootstrap for responsive layout and basic UI components.

2. **CSS**:
   - **`style.css`**: Provides custom styles, animations, and transitions:
     - `@keyframes` for smooth animations (fade-in for content and input focus effects).
     - Interactive styles for the stats container (`#stats`) including hover effects.

3. **JavaScript**:
   - **`script.js`**: Contains the logic to fetch and display data from the COVID API:
     - Fetches a list of countries and their ISO codes.
     - Fetches COVID statistics for the selected country and updates the DOM.
     - Handles errors when API calls fail.

---

## 🚀 Features

- **Dynamic Dropdown**: Fetches and populates a dropdown list with country names.
- **Real-Time Data**: Displays the number of confirmed cases, deaths, and the last updated date for the selected country.
- **Smooth Animations**: Animations for elements fading in and transitioning, making the UI more engaging.
- **Error Handling**: Gracefully handles API errors with a fallback mechanism.

---

## 🔗 External API

This project uses the [COVID-19 API](https://covid-api.com) to fetch live statistics for different countries.

- **Endpoint for countries**: `https://covid-api.com/api/regions`
- **Endpoint for country-specific reports**: `https://covid-api.com/api/reports?iso=<country-iso>`

---

## 📁 File Structure

```plaintext
/ (Root)
├── index.html         # Main HTML structure
├── style.css          # Custom styles and animations
├── script.js          # JavaScript logic for fetching and displaying data
└── README.md          # Project documentation (this file)
