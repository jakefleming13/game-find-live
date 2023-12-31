
//Function that optimizes the image's size that are being rendered
const getCroppedImageurl = (url: string) =>
{
    const target = 'media/';

    const index = url.indexOf(target) + target.length;

    //return the new url of the image
    return (url.slice(0, index) + 'crop/600/400/' + url.slice(index));
}

export default getCroppedImageurl;