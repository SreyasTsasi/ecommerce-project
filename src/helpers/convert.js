export function convertToBase64(file) {
    return new Promise((res, rej) => {
        let fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => res(fileReader.result);
        fileReader.onerror = (error) => rej(error);
    })
}