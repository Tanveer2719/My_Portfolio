const fs = require('fs');
const path = require('path');

const img_dir = path.join(process.cwd(),'/public/Slider_Images');

const image_file_names = fs.readdirSync(img_dir);

const image_path = image_file_names.map(file =>{
    return path.join('/Slider_Images/', file);
});

// save the images in a json file
fs.writeFileSync(path.join(__dirname, 'images.json'), JSON.stringify(image_path, null, 2));


