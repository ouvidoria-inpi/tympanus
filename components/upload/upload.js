const inputElement = document.querySelector('.upload-input');
const header = document.querySelector('.upload-header');
const info = document.querySelector('.upload-info');


let dropbox;

dropbox = document.querySelector('.br-upload');
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);


inputElement.addEventListener("change", handleFiles, false);

function handleFiles(files) {
  if (!files.length) {
    files = this.files; 
  } 
  inputElement.files = files;
  info.style.visibility = 'hidden';
  header.innerHTML = 'Arquivos Selecionados';
  updateSize();
}

function updateSize() {
    let nBytes = 0,
        oFiles = inputElement.files,
        nFiles = oFiles.length;
    for (let nFileId = 0; nFileId < nFiles; nFileId++) {
      nBytes += oFiles[nFileId].size;
    }
    let sOutput = nBytes + " bytes";
    // optional code for multiples approximation
    for (let aMultiples = ["KB", "MB", "GB", "TB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
      sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] ;
    }
    // end of optional code
    document.getElementById("fileNum").innerHTML = nFiles;
    document.getElementById("fileSize").innerHTML = sOutput;
  }

  function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
  }
  
  function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
  }

  function drop(e) {
    e.stopPropagation();
    e.preventDefault();
  
    const dt = e.dataTransfer;
    const files = dt.files;
  
    handleFiles(files);
  }
  