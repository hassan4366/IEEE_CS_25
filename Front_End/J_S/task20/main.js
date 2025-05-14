let req = new XMLHttpRequest();
req.open("GET", "articles.json");
req.send();
console.log(req);

req.onreadystatechange = function () {
  if (req.readyState === 4 && req.status === 200) {
    let mainData = JSON.parse(this.responseText);

    for (let i = 0; i < mainData.length; i++) {
      let div = document.createElement("div");
      let reponame = document.createTextNode(mainData[i].full_name);
      div.appendChild(reponame);
    }

    //document.body.appendChild(reponame);
    console.log(mainData);
  }
};
