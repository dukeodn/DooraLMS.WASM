window.createBlobUrl = (byteArray) => {
    const blob = new Blob([new Uint8Array(byteArray)], { type: 'application/pdf' });
    return URL.createObjectURL(blob);
};