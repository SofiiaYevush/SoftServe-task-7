const dropDownCountry = document.getElementById('country');
const dropDownCities = document.getElementById('cities');
const addText = document.getElementById('text');

function updateText() {
    const selectedCountry = dropDownCountry.options[dropDownCountry.selectedIndex].text;
    const selectedCity = dropDownCities.options[dropDownCities.selectedIndex].text;
    addText.textContent = `${selectedCountry}, ${selectedCity}`;
}

dropDownCountry.addEventListener('click', function() {
    const selectedCountryValue = dropDownCountry.value;
    dropDownCities.innerHTML = '';
    const previouslySelectedCity = dropDownCities.value;

    if (selectedCountryValue === 'ger') {
        dropDownCities.innerHTML += `
                                    <option value="berlin">Berlin</option>
                                    <option value="hamburg">Hamburg</option>
                                    <option value="dresden">Dresden</option>`;                           
    } else if (selectedCountryValue === 'usa') {
        dropDownCities.innerHTML += `
                                    <option value="new-york">New-York</option>
                                    <option value="washington">Washington</option>
                                    <option value="boston">Boston</option>
                                    <option value="chicago">Chicago</option>`;
    } else if (selectedCountryValue === 'ukr') {
        dropDownCities.innerHTML += `
                                    <option value="lviv">Lviv</option>
                                    <option value="odesa">Odesa</option>
                                    <option value="kyiv">Kyiv</option>
                                    <option value="rivne">Rivne</option>`;                       
    }   

    dropDownCities.value = previouslySelectedCity || dropDownCities.options[0].value;

    updateText()
});

dropDownCities.addEventListener('change', function() {
    updateText()
});