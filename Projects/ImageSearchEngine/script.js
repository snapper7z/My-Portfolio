let input = document.querySelector(".search-box input");
let btn = document.querySelector(".btn button");
let images = document.querySelector(".images");
let load = document.querySelector("#load");




const accessKey = "qvUqZ5uqU-n0Mvj2nDu5TPdjeHYOQszHwBZjv3e0jFc";
let page=1;
let keyword="";

function download(imgurl){
    fetch(imgurl).then(res=>res.blob()).then(file=>{
        let a=document.createElement("a")
        a.href=URL.createObjectURL(file)
        a.download=new Date().getTime()
        a.click()

    }).catch(()=>alert("Download Failed"))
}

async function getResponse() {
    keyword=input.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    let response = await fetch (url);
    let data = await response.json();
    let results = data.results;
    // console.log(results)
    if(page==1)
    {
        images.innerHTML = ""                  // for removing first search
    }
    load.style.display="block"

    results.map((result) =>{
        let li = document.createElement("li")
        li.classList.add("image")
        let html = `<img src="${result.urls.small}" alt="img" class="photo">
                <div class="details">
                    <div class="user">
                        <img src="camera.svg" alt="img">
                        <span>${result.description}</span>
                    </div>
                    <div class="download" onclick=download('${result.urls.small}')>
                        <img src="download.svg" alt="img">
                    </div>
                </div>`

                li.innerHTML = html
                images.appendChild(li);

    })
}

input.addEventListener("keyup",(e)=>{
 page=1;
 if(e.key=="Enter"){
 getResponse()
 }
})


btn.addEventListener("click",()=>{
    page=1;
    getResponse();
})

load.addEventListener("click",()=>{
    page++;
    getResponse();
})


