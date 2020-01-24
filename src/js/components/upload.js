const inputElement = document.querySelector('.upload-input');
const fileList = document.querySelector('.upload-file-list');
const header = document.querySelector('.upload-header');
const info = document.querySelector('.upload-info');
const size = document.querySelector('.upload-size');
const sizeNum = document.querySelector('.upload-size-num');
const sizeBytes = document.querySelector('.upload-size-bytes');
var fileArray = [];
if(inputElement)
		fileArray = Array.from(inputElement.files);


let dropbox;

dropbox = document.querySelector('.br-upload');
if(dropbox){
		dropbox.addEventListener("dragenter", drag, false);
		dropbox.addEventListener("dragover", drag, false);
		dropbox.addEventListener("drop", drop, false);
}

if(inputElement)
		inputElement.addEventListener("change", handleFiles, false);

function handleFiles(files) {

   
  newFiles = !files.length ? Array.from(inputElement.files) : Array.from(files);
  fileArray = fileArray.concat(newFiles);

  info.style.display = 'none';
  header.innerHTML = 'Arquivos Selecionados';
  updateFileList();
}

function updateFileList () {

  if (!fileArray.length) {
    fileList.innerHTML = "";
    info.style.display = '';
    header.innerHTML = 'Arraste e solte o(s) arquivo(s) do seu computador';
  } else {
    fileList.innerHTML = "";
    const list = document.createElement("ul");
    fileList.appendChild(list);
    for (let i = 0; i < fileArray.length; i++) {
      const li = document.createElement("li");
      list.appendChild(li);
      
      const info = document.createElement("span");
      info.innerHTML = fileArray[i].name ;
      li.appendChild(info);
      
      const del = document.createElement("div");
      del.addEventListener("click", function(){removeFile(i, event)}, false);
      del.className = 'del';
      const img = document.createElement("i");
      img.className = 'fa fa-times';
      del.appendChild(img);
      li.appendChild(del);
    }
  }
  updateSize();
}

function removeFile(index, e) {

  e.stopPropagation();
  e.preventDefault();
  fileArray.splice(index,1);
  updateFileList();
}

function updateSize() {

  let nBytes = 0,
      oFiles = fileArray, 
      nFiles = oFiles.length;
  for (let nFileId = 0; nFileId < nFiles; nFileId++) {
    nBytes += oFiles[nFileId].size;
  }
  
  let sOutput = nBytes + " bytes";
  for (let aMultiples = ["KB", "MB", "GB", "TB"], nMultiple = 0, nApprox = nBytes / 1024; nApprox > 1; nApprox /= 1024, nMultiple++) {
    sOutput = nApprox.toFixed(3) + " " + aMultiples[nMultiple] ;
  }

  size.style.visibility = nFiles>0 ? "visible" : "hidden";
  sizeNum.innerHTML = nFiles;
  sizeBytes.innerHTML = sOutput;
}

function drag(e) {
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
