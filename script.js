$(document).ready(function() {
    $('#hamburger').click(function() {
        $('#social-media').slideToggle();
    });

    // Funcionalidad del botón de reproducción
    $('#play').click(function() {
        var audio = $('#audio')[0]; 
        var status = $('#status'); // Seleccionamos el elemento del status
        if (audio.paused) {
            audio.play(); 
            $('.play-btn').addClass('hide'); 
            $('.stop-btn').removeClass('hide'); 
            status.text('Reproduciendo...'); // Cambiar a "Reproduciendo"
        } else {
            audio.pause(); 
            $('.play-btn').removeClass('hide'); 
            $('.stop-btn').addClass('hide'); 
            status.text('Pausado...'); // Cambiar a "Pausado"
        }
    });

    // Control de volumen con cambio de color
    $('#range').on('input', function() {
        var audio = $('#audio')[0];
        var currentVolume = $(this).val(); // Valor actual del volumen
        audio.volume = currentVolume / 100; // Establecemos el volumen del audio

        // Si el volumen es mayor o igual a 50%, cambiamos el color
        if (currentVolume >= 50) {
            $('#range').addClass('high-volume'); // Añadimos la clase para color rojo
        } else {
            $('#range').removeClass('high-volume'); // Quitamos la clase para mantener el color original
        }
    });
});
