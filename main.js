(() => {
  const svgSize = 1000;
  const pixelSize = 1000 / 24;
  const gridSize = 24 * 24;
  const clothesColor = getClothesColor();
  const skinColor = getSkinColor();
  const backgroundColor = getBackgroundColor();
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
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
    0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0,
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
  const accessories = [
    [],
    [[3, 9, 6]],
    [
      [8, 22, 6],
      [9, 23, 6],
      [14, 22, 6],
      [13, 23, 6],
    ],
  ];
  const mouth = [
    [
      [10, 14, 1],
      [11, 14, 1],
      [12, 14, 1],
      [13, 14, 1],
      [14, 14, 1],
      [15, 14, 1],
      [16, 14, 1],
      [17, 14, 1],
    ],
    [
      [10, 14, 1],
      [11, 14, 1],
      [12, 14, 1],
      [13, 14, 1],
      [14, 14, 1],
      [15, 14, 1],
      [16, 14, 1],
      [17, 14, 1],
      [11, 15, 1],
      [12, 15, 1],
      [13, 15, 1],
      [14, 15, 1],
      [15, 15, 1],
    ],
    [
      [10, 14, 1],
      [11, 14, 1],
      [12, 14, 1],
      [13, 14, 1],
      [14, 14, 1],
      [15, 14, 1],
      [16, 14, 1],
      [17, 14, 1],
      [11, 15, 1],
      [12, 15, 4],
      [13, 15, 4],
      [14, 15, 4],
      [15, 15, 4],
      [13, 16, 4],
      [14, 16, 4],
      [15, 16, 4],
      [16, 16, 4],
      [16, 17, 4],
      [17, 17, 4],
    ],
  ];
  const clothes = [
    [],
    [
      [8, 22, 5],
      [9, 22, 5],
      [10, 22, 5],
      [11, 22, 5],
      [12, 22, 5],
      [13, 22, 5],
      [14, 22, 5],
      [7, 23, 5],
      [8, 23, 5],
      [9, 23, 5],
      [10, 23, 5],
      [11, 23, 5],
      [12, 23, 5],
      [13, 23, 5],
      [14, 23, 5],
      [15, 23, 5],
    ],
  ];
  const hat = [
    [],
    [
      [7, 1, 5],
      [8, 1, 5],
      [9, 1, 5],
      [10, 1, 5],
      [11, 1, 5],
      [12, 1, 5],
      [13, 1, 5],
      [6, 2, 5],
      [7, 2, 5],
      [8, 2, 5],
      [9, 2, 5],
      [10, 2, 5],
      [11, 2, 5],
      [12, 2, 5],
      [13, 2, 5],
      [14, 2, 5],
      [9, 3, 5],
      [10, 3, 5],
      [11, 3, 5],
      [12, 3, 5],
      [13, 3, 5],
      [14, 3, 5],
      [15, 3, 5],
    ],
  ];

  const eyes = [
    [
      [11, 6, 3],
      [15, 6, 3],
      [11, 7, 1],
      [15, 7, 1],
    ],
    [
      [10, 6, 3],
      [11, 6, 3],
      [14, 6, 3],
      [15, 6, 3],
      [10, 7, 1],
      [11, 7, 1],
      [14, 7, 1],
      [15, 7, 1],
    ],
    [
      [10, 6, 1],
      [11, 6, 1],
      [14, 6, 1],
      [15, 6, 1],
      [10, 7, 1],
      [11, 7, 1],
      [14, 7, 1],
      [15, 7, 1],
    ],
    [
      [10, 5, 3],
      [11, 5, 3],
      [14, 5, 3],
      [15, 5, 3],
      [10, 6, 1],
      [11, 6, 1],
      [14, 6, 1],
      [15, 6, 1],
      [10, 7, 1],
      [11, 7, 1],
      [14, 7, 1],
      [15, 7, 1],
    ],
    [
      [10, 5, 3],
      [11, 5, 3],
      [14, 5, 3],
      [15, 5, 3],
      [10, 6, 1],
      [11, 6, 1],
      [14, 6, 1],
      [15, 6, 1],
      [10, 7, 3],
      [11, 7, 3],
      [14, 7, 3],
      [15, 7, 3],
    ],
  ];
  function pixelArtCreator() {
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
      let pixelColor = backgroundColor;

      if (data[a]) {
        pixelColor = getColor(data[a]);
      }
      const pixel = createPixel(x * pixelSize, y, pixelSize, pixelColor);
      svg.appendChild(pixel);

      x++;
      if (x >= 24) {
        x = 0;
        y += pixelSize;
      }
    }
    createFeatures();
    document.body.appendChild(svg);
  }
  function createFeatures() {
    const features = [eyes, mouth, clothes, hat, accessories];
    features.forEach((feature) => {
      const selection = feature[randomNumber(0, feature.length - 1)];
      selection.forEach((item) => {
        addFeature(item);
      });
    });
  }
  function addFeature(item) {
    const pixel = createPixel(
      item[0] * pixelSize,
      item[1] * pixelSize,
      pixelSize,
      getColor(item[2])
    );
    svg.appendChild(pixel);
  }
  function getColor(num) {
    let pixelColor = "#17E7B6";
    let secondarySkinColor = "#E3C8A1";
    switch (num) {
      case 1:
        pixelColor = "#000";
        break;
      case 2:
        pixelColor = skinColor;
        break;
      case 3:
        pixelColor = secondarySkinColor;
        break;
      case 4:
        pixelColor = "#E22626";
        break;
      case 5:
        pixelColor = clothesColor;
        break;
      case 6:
        pixelColor = "#FFD926";
        break;
    }
    return pixelColor;
  }
  function randomNumber(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function getClothesColor() {
    const colours = ["#E22626", "#710CC7"];
    return colours[randomNumber(0, colours.length - 1)];
  }
  function getSkinColor() {
    const colours = ["#58544E", "#F8F5CA"];
    return colours[randomNumber(0, colours.length - 1)];
  }
  function getBackgroundColor() {
    const colours = [
      "#EF972C",
      "#17E6B7",
      "3A677D",
      "#CCCDCE",
      "#E4E4A8",
      "#6F5D70",
      "#A2E5F4",
    ];
    return colours[randomNumber(0, colours.length - 1)];
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
