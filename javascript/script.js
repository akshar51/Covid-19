const country = document.getElementById('country');
const status = document.getElementById('stats');
const countryName = document.getElementById('countryName');
const confirmed = document.getElementById('confirmed');
const deaths = document.getElementById('deaths');
const lastUpdated = document.getElementById('lastUpdated');

fetch('https://covid-api.com/api/regions')
    .then(res => res.json())
    .then(data => {
        country.innerHTML = '<option selected disabled>Select a country</option>';
        data.data.forEach(region => {
            if (region.iso && region.name) {
                const option = document.createElement('option');
                option.value = region.iso;
                option.textContent = region.name;
                country.appendChild(option);
            }
        });
    });

country.addEventListener('change', () => {
    const iso = country.value;
    fetch(`https://covid-api.com/api/reports?iso=${iso}`)
        .then(res => res.json())
        .then(data => {
            if (data.data.length > 0) {
                const report = data.data[0];
                countryName.textContent = report.region.name;
                confirmed.textContent = report.confirmed.toLocaleString();
                deaths.textContent = report.deaths.toLocaleString();
                lastUpdated.textContent = report.date;
                status.classList.remove('d-none');
            }
        })
        .catch((error) => {
            console.log(error);
        })
});