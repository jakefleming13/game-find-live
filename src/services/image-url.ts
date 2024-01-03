import noImage from '../assets/no-image-placeholder-6f3882e0.webp';

//Function that optimizes the image's size that are being rendered
const getCroppedImageurl = (url: string) =>
{
    if (!url) return noImage;
    
    const target = 'media/';

    const index = url.indexOf(target) + target.length;

    //return the new url of the image
    return (url.slice(0, index) + 'crop/600/400/' + url.slice(index));
}

export default getCroppedImageurl;