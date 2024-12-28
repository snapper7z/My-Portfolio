let qrContainer = document.querySelector('#qrContainer')
let qrText = document.querySelector('#qrText')
let genBtn = document.querySelector('#genBtn')
let downloadBtn = document.querySelector('#downloadBtn')
let qrImage  

generateQR = (qrtext) =>{
    qrContainer.innerHTML = ""
    return new QRCode(qrContainer, {
        text: qrtext,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}

downloadQR = () =>{
  qrImage = document.querySelector("#qrContainer img")

  let imgSrc = qrImage.getAttribute('src')
  console.log(imgSrc)
  downloadBtn.setAttribute("href", imgSrc)
}

genBtn.addEventListener("click", (e)=>{
     let text = qrText.value
     if(text.length>0){
        qrcode = generateQR(text)
        qrContainer.classList.add('img-show')
        downloadBtn.classList.add('download-active')
     }  
})

downloadBtn.addEventListener("click", downloadQR)