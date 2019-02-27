var dropZone = document.getElementById('dropZone');

var it = document.getElementsByClassName("holder");
var counter = 0;

// Optional.   Show the copy icon when dragging over.  Seems to only work for chrome.
dropZone.addEventListener('dragover', function (e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
});

// Get file data on drop
dropZone.addEventListener('drop', function (e) {
    e.stopPropagation();
    e.preventDefault();
    var files = e.dataTransfer.files; // Array of all files

    for (var i = 0, file; file = files[i]; i++) {
        if (file.type.match(/image.*/)) {
            var reader = new FileReader();

            reader.onload = function (e2) {
                if (counter > 2) counter = 0;
                // finished reading file data.
                //var img = document.createElement('img');
                var img = it[counter];
                img.src = e2.target.result;
                counter++;

                //document.body.appendChild(img);
            }

            reader.readAsDataURL(file); // start reading the file data.
        }
    }

    //dropZone.className = "dropZone2";
});

$(document).ready(function () {
    //const elem = document.querySelector('img.holder');
    const inputs = [].slice.call(document.querySelectorAll('#heightMod'));

    inputs.forEach(input => input.addEventListener('change', handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
    console.log(1);

    function handleUpdate(e) {
        console.log(2);
        if (this.type === 'color') {
            elem.style.setProperty('--elem-color', this.value)
        } else {
            console.log(3);
            //elem.style.setProperty('--img-height', this.value + 'px')
            document.documentElement.style.setProperty('--img-height', this.value + '%');
        }
    }

})