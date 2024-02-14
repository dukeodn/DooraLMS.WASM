window.printPdf = function (blobUrl) {
    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = blobUrl;
    document.body.appendChild(iframe);

    iframe.onload = function () {
        setTimeout(function () {
            iframe.contentWindow.print();
        }, 1000); // PDF 로딩을 위해 약간의 지연 시간 추가
    };
};