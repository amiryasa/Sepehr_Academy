import { PixelCrop } from 'react-image-crop'

const TO_RADIANS = Math.PI / 180

export function canvasPreview(
    image,
    canvas,
    crop,
    scale = 1,
    rotate = 0,
) {

    const ctx = canvas.getContext('2d')

    if (!ctx) {
        throw new Error('No 2d context')
    }

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    // devicePixelRatio slightly increases sharpness on retina devices
    // at the expense of slightly slower render times and needing to
    // size the image back down if you want to download/upload and be
    // true to the images natural size.
    const pixelRatio = window.devicePixelRatio
    // const pixelRatio = 1

    const rotateRads = rotate * TO_RADIANS

    if (crop) {
        canvas.width = Math.floor(crop.width * scaleX * pixelRatio)
        canvas.height = Math.floor(crop.height * scaleY * pixelRatio)
    }
    else {
        canvas.width = Math.floor(scaleX * pixelRatio)
        canvas.height = Math.floor(scaleY * pixelRatio)
    }


    ctx.scale(pixelRatio, pixelRatio)
    ctx.imageSmoothingQuality = 'high'


    const centerX = image.naturalWidth / 2
    const centerY = image.naturalHeight / 2

    ctx.save()

    if (crop) {
        const cropX = crop.x * scaleX
        const cropY = crop.y * scaleY
        ctx.translate(-cropX, -cropY)
    }

    // 4) Move the origin to the center of the original position
    ctx.translate(centerX, centerY)
    // 3) Rotate around the origin
    ctx.rotate(rotateRads)
    // 2) Scale the image
    ctx.scale(scale, scale)
    // 1) Move the center of the image to the origin (0,0)
    ctx.translate(-centerX, -centerY)
    ctx.drawImage(
        image,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
        0,
        0,
        image.naturalWidth,
        image.naturalHeight,
    )
    const base64Image = canvas.toDataURL('image/png');
    return (base64Image)
    // ctx.restore()
}
