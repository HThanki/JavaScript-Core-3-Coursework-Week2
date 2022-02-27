fetch("https://xkcd.now.sh/?comic=latest")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let programmerDiv = document.querySelector("#programmer-div");
    let img = document.createElement("img");

    img.src = data.img;

    programmerDiv.append(img);
  })
  .catch((err) => console.log(err));
