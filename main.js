(() => {
  function pixelArtCreator() {
    const data = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0,
      //new
      0, 0, 0, 1, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 1, 0, 0, 0,
      //new
      0, 0, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 1, 0, 0, 0,
      //new
      0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 3, 2, 2, 2, 3, 2, 1, 2, 2, 1, 0, 0, 0,
      //new
      0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 2, 1, 0, 0, 0,
      //new
      0, 0, 1, 1, 3, 3, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0, 0, 0,
      //new
      0, 0, 1, 1, 3, 0, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 3, 1, 1, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 3, 1, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 1, 3, 1, 1, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 3, 3, 1, 3, 3, 3, 1, 1, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 3, 3, 3, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 1, 1, 1, 2, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0,
      //new
      0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0,
      //new
    ];
    const svgSize = 1000;
    const pixelSize = 1000 / 24;
    const gridSize = 24 * 24;
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", svgSize);
    svg.setAttribute("height", svgSize);
    svg.setAttribute("fill", "#17E7B6");
    // const svgHead = `<svg xmlns="http://www.w3.org/2000/svg" width="${svgSize}" height="${svgSize}" viewBox="0 0 ${svgSize} ${svgSize}">`
    // const pixel = `<rect width="${pixelSize}" height="${pixelSize}" fill="${pixelColor}" />`;
    // const svgFoot =  `</svg>`;
    // const svg = svgHead + pixel + svgFoot;
    let y = 0;
    let x = 0;
    for (let a = 0; a < gridSize; ++a) {
      let pixelColor = "#17E7B6";
      let skinColor = "#58544E";
      let secondarySkinColor = "#E3C8A1";
      console.log(x, y);
      if (data[a]) {
        switch (data[a]) {
          case 1:
            pixelColor = "#000";
            break;
          case 2:
            pixelColor = skinColor;
            break;
          case 3:
            pixelColor = secondarySkinColor;
            break;
        }
      }
      const pixel = createPixel(x * pixelSize, y, pixelSize, pixelColor);
      svg.appendChild(pixel);

      x++;
      if (x >= 24) {
        x = 0;
        y += pixelSize;
      }
    }
    document.body.appendChild(svg);
  }
  function randomNumber(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function createPixel(x, y, pixelSize, color) {
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    var svgNS = svg.namespaceURI;
    var rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", pixelSize);
    rect.setAttribute("height", pixelSize);
    rect.setAttribute("fill", color);
    return rect;
  }
  document.addEventListener("DOMContentLoaded", () => pixelArtCreator());
})();
