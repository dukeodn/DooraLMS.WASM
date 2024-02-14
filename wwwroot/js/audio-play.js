function playAudioById(elementId) {
    var audio = document.getElementById(elementId);
    if (audio) {
        audio.play(); // 오디오 재생 시작
    }
}