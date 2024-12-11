function submitGift() {
    const giftInput = document.getElementById('presentInput').value;
    const displayGift = document.getElementById('displayGift');

    if (giftInput.trim()) {
        displayGift.textContent = `You will get a ${giftInput} asap (text me)`;
        document.getElementById('giftOptions').style.display = 'none';
    } else {
        alert('Please enter a gift or choose an option kate lol');
    }
}

function showOptions() {
    const giftOptions = document.getElementById('giftOptions');
    giftOptions.style.display = 'block';
    document.getElementById('displayGift').textContent = '';
}
