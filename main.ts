music.play(music.stringPlayable("C5 C5 A A C5 C5 A - ", 120), music.PlaybackMode.LoopingInBackground)
basic.showLeds(`
    # . # # #
    # . . . #
    # . # # #
    # . # . .
    # . # # #
    `)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Funk), music.PlaybackMode.LoopingInBackground)
basic.showLeds(`
    . # # . .
    . # # . .
    # . . # .
    # . . # .
    # # # # .
    `)
music.play(music.stringPlayable("F E F A A F G F ", 120), music.PlaybackMode.LoopingInBackground)
basic.showIcon(IconNames.Giraffe)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.UntilDone)
basic.showLeds(`
    # . # . .
    . # # # #
    . . # . .
    . # . # .
    # . . . #
    `)
music.stopAllSounds()
basic.forever(function () {
	
})
