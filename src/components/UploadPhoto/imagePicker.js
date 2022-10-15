
const compress = async (file, ratio) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    return new Promise((resolve, reject) => {
        fileReader.onload = function (event) {
            const image = new Image();
            image.onload = function () {
                const canvas = document.createElement("canvas");
                const context = canvas.getContext("2d");
                canvas.width = image.width / ratio;
                canvas.height = image.height / ratio;
                if (context != null) {
                    context.drawImage(image,
                        0,
                        0,
                        image.width,
                        image.height,
                        0,
                        0,
                        canvas.width,
                        canvas.height
                    );
                    resolve(canvas.toDataURL(file.type, 0.5)) //quality image 
                }
            }
            if (image != null && event.target != null)
                image.src = event.target.result;
        };
    })
}

const dataURItoBlob = (dataURI) => {
    // convert base64/URLEncoded data component to raw binary data held in a string
    let byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    let ia = new Uint8Array(byteString.length);
    for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
}


const imagePicker = async (file) => {
    if (!file) return;

    var ratio = 1;
    const sizeKB = file.size / 1000;
    if (sizeKB < 400) {
        ratio = 1;
    }
    else if (file.type.includes("png") && sizeKB > 400 && sizeKB < 500) {
        ratio = 5
    }
    else if (file.type.includes("png") && sizeKB > 4000) {
        ratio = 3;
    }
    else
        ratio = sizeCheck(file.size);

    if (ratio > 0) {
        const base64 = await compress(file, ratio);
        return dataURItoBlob(base64);
    } else {
        return file
    }
}
const sizeCheck = (size) => {
    let res = 0;
    const sizeKB = size / 1000; // Bytes to kilobytes
    const list = [
        {
            size: 10000,
            ratio: 2
        },
        {
            size: 2000,
            ratio: 2
        },
        {
            size: 500,
            ratio: 2
        },
        {
            size: 400,
            ratio: 2
        }
    ];

    for (let i = 0; i < list.length; i++) {
        if (list[i].size <= sizeKB) {
            res = list[i].ratio;
            break;
        }
    }

    return res;
}


export default imagePicker;
