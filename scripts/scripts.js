document.addEventListener("DOMContentLoaded", initializeApp);
    function initializeApp(){
        displayMeme();
    }




    //YOLO
    async function displayMeme(){
        try{
            const response=await
            fetch("https://api.imgflip.com/get_memes");
            const jsonResponse = await response.json();
            //required
            //jsonResponse is object
            console.log(jsonResponse);
            const meme = jsonResponse.data.memes[3];

            //creating an element and assigning src image and name and width
            const image = document.createElement("img");
            image.src=meme.url;
            image.alt= meme.name;
            image.width=200;

            //grabbing meme which is id and assigning to variable memeContainer, to add image to meme container 
            const memeContainer=
                document.querySelector("#meme");
            memeContainer.appendChild(image);
        }catch (error){
            console.log("promise failed", error);
        }
    }