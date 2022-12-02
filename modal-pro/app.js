var theButton = document.getElementById('theButton');
        var theModal = document.getElementById('theModal');
        var closeButton = document.getElementsByClassName('close')[0];

        closeButton.onclick = function(e) {
            theModal.style.display = "none";
        };

        theButton.onclick = function(e) {
            theModal.style.display = "block";
        }

        window.onclick = function(e) {
            if(event.target == theModal) {
                theModal.style.display = "none";
            }
        }