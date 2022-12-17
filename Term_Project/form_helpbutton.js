window.onload = function() {
    var clickMeButton = document.getElementById('clickme');
    clickMeButton.onclick = youClicked;
}

function youClicked(){
    alert(`Please fill in the boxes below.\nTry submitting before you input any information to see what happens! `);
}

