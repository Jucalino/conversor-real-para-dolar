function calcResult() {
    const divResult = document.querySelector('.result');
    const valueUser = document.querySelector('.valueInput').value;
    const valueDolar = valueUser * 5.6;

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    divResult.innerHTML = `O valor em dólar é ${formatter.format(valueDolar)}`;
}