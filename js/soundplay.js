
function _play(soundname) {
    const audio = new Audio()
    audio.src = "https://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/sound/" + soundname + ".wav"
    audio.play()
}

function _compare(firstsound, secondsound) {
    const firstAudio = new Audio()
    firstAudio.src = "https://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/sound/" + firstsound + ".wav"
    firstAudio.play();
    firstAudio.addEventListener('ended', function () {
        const secondAudio = new Audio()
        secondAudio.src = "https://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/sound/" + secondsound + ".wav"
        secondAudio.play();
    })
}