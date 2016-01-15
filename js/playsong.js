
	var audio = new Audio('./audio/christmastime.mp3');
	if (typeof audio.loop == 'boolean')
	{
    audio.loop = true;
	}
	else
	{
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
		}, false);
	}
	audio.play();