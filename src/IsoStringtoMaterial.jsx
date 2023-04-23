import { MeshLambertMaterial, Texture} from 'three'

export default function StringtoMaterial(nucleotides, backgroundColor, abbr,x,y) {
    // Create a canvas element
    let canvas = document.createElement("canvas");
    let ctx = canvas.getContext("2d");
    const scale = 0.5;

    // Set the canvas size
    canvas.width = 1024 * scale;
    canvas.height = 1024 * scale;

    const NucTextSize = (550 * scale).toString()
    const NucMassNumSize = (300 * scale).toString()

    const widthCenter = canvas.width / 2
    const heightCenter = canvas.height / 2

    const font = ' Monospace'

    // Fill the background with the specified color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the string on the canvas
    ctx.fillStyle = "#000000";
    ctx.height = 2
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    //element Tiles
    ctx.font = 'bold ' + NucTextSize + 'px' + font;
    ctx.fillText(nucleotides, widthCenter + widthCenter/6, heightCenter + heightCenter/10);
    ctx.font = 'bold ' + NucMassNumSize + 'px' + font;
    ctx.fillText(x, widthCenter - widthCenter/2, heightCenter + heightCenter/1.5);
    ctx.font = 'bold ' + NucMassNumSize + 'px' + font;
    ctx.fillText(y, widthCenter, heightCenter - heightCenter/1.5);
    ctx.font = 'bold ' + NucMassNumSize + 'px' + font;
    ctx.fillText(abbr, widthCenter, heightCenter - heightCenter/1.5);

    // Create an image object from the canvas
    let img = new Image();
    img.src = canvas.toDataURL();

    // Create a texture object from the image
    let texture = new Texture(img);
    texture.needsUpdate = true;

    let material = new MeshLambertMaterial({map:texture})
    console.log('StringToMaterial Ran')
    return material;
  }
