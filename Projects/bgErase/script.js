let fileInput = document.getElementById("filepicker");
let innerImage = document.querySelector(".inner-upload-image");
let image = null;
let url = null;
let InputImg = document.querySelector("#input-image")
let icon = document.querySelector("#icon");
let span = document.querySelector("span");
// let genImg = document.querySelector("#generatedImg");
let uploadBtn = document.querySelector("#upload-btn");
let originalImg = document.querySelector(".resultImg1 img");
let generatedImg = document.querySelector(".resultImg2 img");
let style2 = document.querySelector(".style2");
let resultPage = document.querySelector(".result");
let loading = document.querySelector("#loading"); 
let downloadBtn = document.querySelector("#download");
let resetBtn = document.querySelector("#reset");



function handleUpload(){
    const ApiKey = "8NR9AXYtFoCdLsLj7iRwGe5h"
     const formdata = new FormData();
     formdata.append("image_file", image)
     formdata.append("size","auto")
     fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: { "X-Api-Key": ApiKey },
        body: formdata,
      })
      .then(function(response){
        return response.blob();
      })
      .then(function(blob){
        loading.style.display="none"
        style2.style.display="none";
        resultPage.style.display="flex";
        url = URL.createObjectURL(blob);
        generatedImg.src = url;
      })
      .catch()

}


innerImage.addEventListener("click", () =>{
    fileInput.click();
});

fileInput.addEventListener("change",()=>{
    image = fileInput.files[0];
    if(!fileInput)return;
    let reader = new FileReader();
    reader.onload=(e)=>{
        console.log(e)
       InputImg.src = `data:${fileInput.type};base64,${e.target.result.split(",")[1]}`
       InputImg.style.display="block"

       icon.style.display="none";
       span.style.display="none";
       originalImg.src = `data:${fileInput.type};base64,${e.target.result.split(",")[1]}`
    }
    reader.readAsDataURL(image);
})

uploadBtn.addEventListener("click",()=>{
    handleUpload();
    loading.style.display="block";
})

function download(){
    fetch(url)
    .then(res => res.blob())
    .then(file=>{
        let a = document.createElement("a");
        a.href = URL.createObjectURL(file)
        a.download = new Date().getTime();
        a.click();
    })
    .catch()
}

downloadBtn.addEventListener("click",()=>{
    download();
})
resetBtn.addEventListener("click",()=>{
    window.location.reload();
})