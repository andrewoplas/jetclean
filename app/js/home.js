$(function() {
  // Typewriter
  new Typewriter('#typewriter', {
    strings: [
      'skjorter',
      'jakkesæt',
      'vintertøj',
      'rensetøj',
      'vasketøj',
      'sengetøj',
    ],
    autoStart: true,
    loop: true,
  });

  // Initialize Flickity
  if (xs) {
    $('#reviews-carousel').flickity({
      freeScroll: false,
      cellAlign: 'center',
      prevNextButtons: false,
    });
  } else {
    $('#reviews-carousel').flickity({
      freeScroll: true,
      cellAlign: 0.2,
    });
  }

  // Initialize Glider (Handle)
  $('#we-handle-content-glide').flickity({
    freeScroll: false,
    cellAlign: 'center',
    prevNextButtons: false,
  });
});
