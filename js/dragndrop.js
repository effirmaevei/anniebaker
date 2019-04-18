//drag and drop behaviour module

$("#download").on("click", DownloadAsImage);


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

//dynamic height module

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

// Image download behaviour

function downloadURI(uri, name) {
    var link = document.createElement("a");

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    clearDynamicLink(link);
}

function DownloadAsImage() {
    var element = $("#dropZone")[0];
    html2canvas(element).then(function (canvas) {
        var myImage = canvas.toDataURL();

        downloadURI(myImage, "Snapshot-" + genTime());
    });
}

function genTime() {
    // get a new date (locale machine date time)
    var date = new Date();
    // get the date as a string
    var n = date.toDateString();
    // get the time as a string
    //var time = date.toLocaleTimeString();
    // find the html element with the id of time
    // set the innerHTML of that element to the date a space the time
    //return (n + ' ' + time);
    return n;
    //Wed Feb 27 2019 3:34:46 PM
}