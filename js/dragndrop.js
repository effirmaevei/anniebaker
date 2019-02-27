let dropArea = document.getElementById('drop-area');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);
})

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
};

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
    let dt = e.dataTransfer;
    let files = dt.files;

    handleFiles(files);
}


function handleFiles(files) {
    //files is a FileList, to iterate easier we need an array and ... gives that.
    ([...files]).forEach(uploadFile)
}

function uploadFile(file) {
    let url = 'YOUR URL HERE';
    let formData = new FormData();

    formData.append('file', file);

    fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(() => {
            /* Done. Inform the user */ })
        .catch(() => {
            /* Error. Inform the user */ });
}