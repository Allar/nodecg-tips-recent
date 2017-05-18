'use strict';
var RecentTipper = nodecg.Replicant('RecentTipper');

function setClassVisibility(classname, visible){
    var elements = document.getElementsByClassName(classname);

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = visible ? 'inline' : 'none';
    }
}

nodecg.listenFor('tips-new', 'nodecg-streamtip-service', function(tip) {
    RecentTipper.value = tip.username + ": $" + tip.amount;    
});

var alertBox = document.getElementById('alert');
alertBox.addEventListener('webkitAnimationEnd', function(){
    this.style.webkitAnimationName = '';
}, false);

RecentTipper.on('change', function(newvalue, oldvalue) {
    alertBox.classList.remove('recentTipperAnimDownClass');
    document.getElementById("RecentTipperText").textContent = newvalue;
    setTimeout( () => { alertBox.classList.add('recentTipperAnimDownClass') }, 50);
});