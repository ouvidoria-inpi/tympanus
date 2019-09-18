const inputElement = document.querySelector('.upload-input');
const fileList = document.querySelector('.upload-file-list');
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
  info.style.display = 'none';
  header.innerHTML = 'Arquivos Selecionados';
  updateSize();
  
  if (!files.length) {
    fileList.innerHTML = "<p>Sem arquivos selecionados!</p>";
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < files.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);
      
      const info = document.createElement("span");
      info.innerHTML = files[i].name ;
      li.appendChild(info);
      
      const img = document.createElement("i");
      img.className = 'fa fa-times';
      li.appendChild(img);
      
    }
  }
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
  