/* VND, KRW, IDR, and EUR. Converter*/

function CurrencyConverter(amount, firstCurrency, secondCurrency) {
    if (isNaN(amount)) {
        alert('Please enter a correct input!');
    }
    const formattedCurrency = secondCurrency.toLowerCase();
    let amountnum = parseFloat(amount);
    if (firstCurrency === 'vnd') {
        switch (formattedCurrency) {
            case 'usd':
                return addFormattingToMoney(amount / 23216);
                break;
            case 'krw':
                return addFormattingToMoney(amount / 19.653);
                break;
            case 'idr':
                return addFormattingToMoney(amount / 1.617);
                break;
            default:
                return 'Currency not found or the First Currency Unit is duplicated with the Second Currency Unit. Please check!';
        }
    } if (firstCurrency === 'usd') {
        switch (formattedCurrency) {
            case 'vnd':
                return addFormattingToMoney(amount * 23216);
                break;
            case 'krw':
                return addFormattingToMoney(amount * 1187);
                break;
            case 'idr':
                return addFormattingToMoney(amount * 14419);
                break;
            default:
                return 'Currency not found or the First Currency Unit is duplicated with the Second Currency Unit. Please check!';
        }
    } if (firstCurrency === 'krw') {
        switch (formattedCurrency) {
            case 'vnd':
                return addFormattingToMoney(amount * 19.653);
                break;
            case 'usd':
                return addFormattingToMoney(amount / 1187);
                break;
            case 'idr':
                return addFormattingToMoney(amount * 12.130);
                break;
            default:
                return 'Currency not found or the First Currency Unit is duplicated with the Second Currency Unit. Please check!';
        }
    } else if (firstCurrency === "idr") {
        switch (formattedCurrency) {
            case 'vnd':
                return addFormattingToMoney(amount * 1.617);
                break;
            case 'usd':
                return addFormattingToMoney(amount / 14419);
                break;
            case 'krw':
                return addFormattingToMoney(amount / 12.130);
                break;
            default:
                return 'Currency not found or the First Currency Unit is duplicated with the Second Currency Unit. Please check!';
        }
    }
}

function addFormattingToMoney(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function FinalMessage(amountIn, amountOut, firstUnit, secondUnit) {
    formattedfirstUnit = firstUnit.toUpperCase();
    formattedsecondUnit = secondUnit.toUpperCase();
    return console.log(`${amountIn} ${formattedfirstUnit} is equivalent to ${amountOut} ${formattedsecondUnit}`);
}

function FormattingToMoney(amount) {
    return amount.replace(/\d(?=(\d{3})+\.)/g, '$&,');
}


let firstCurrency = prompt('Which currency do you want to convert from?');
let secondCurrency = prompt('Which currency do you want to convert to?');
let amountInput = prompt('Please enter the amount value: ');

let amountOutput = CurrencyConverter(amountInput, firstCurrency, secondCurrency);
FinalMessage(amountInput, amountOutput, firstCurrency, secondCurrency)

