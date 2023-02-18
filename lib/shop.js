// Find the credits purchase button
const creditsButton = document.querySelector('button[data-bs-target="#purchaseCreditsModal"]');

// Get the number of credits and calculate the price in dollars
const credits = parseInt(creditsButton.innerText.match(/\d+/)[0]);
const creditsPriceInDollars = credits / 100;
const creditsFormattedPrice = creditsPriceInDollars.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

// Update the credits button to include the price in dollars
const creditsButtonTitle = `Purchase for ${credits} <i class="fas fa-money-bill-1-wave text-lg lh-1 ms-1"></i> Credits (${creditsFormattedPrice})`;
creditsButton.innerHTML = creditsButtonTitle;

// Find the bits purchase button
const bitsButton = document.querySelector('button[data-bs-target="#purchaseBitsModal"]');

// Get the number of bits and calculate the price in dollars
const bits = parseInt(bitsButton.innerText.match(/\d+/)[0]);
const bitsPriceInDollars = bits / 1500;
const bitsFormattedPrice = bitsPriceInDollars.toLocaleString('en-US', {style: 'currency', currency: 'USD'});

// Update the bits button to include the price in dollars
const bitsButtonTitle = `Purchase for ${bits} <i class="fas fa-coins text-lg lh-1 ms-1"></i> Bits (${bitsFormattedPrice})`;
bitsButton.innerHTML = bitsButtonTitle;
