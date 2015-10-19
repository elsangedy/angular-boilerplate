var gulp      = require('gulp');
var $         = require('./$');

// shared streams to gulp tasks
var streams = $.streams = {};

//--

var outputCssDir = $.path.join( $.config.paths.outputDir, 'styles' );

//---

streams.autoprefix = function() {
  return $.autoprefixer( $.config.autoprefixer );
};

//---

streams.less = function() {

  return gulp
    .src( $.config.styles.less.main )
    .pipe( $.if( $.is.debug, $.debug() ) )
    .pipe( $.plumber() )
    .pipe( $.less({ paths: [ $.path.join( $.rootPath, 'src' ) ] }) )
    .pipe( streams.autoprefix() )
    .pipe( $.injectString.prepend( $.config.banner ) )
    .pipe( $.if( $.is.release, $.minifyCss( { processImport: false } ) ) )
    .pipe( gulp.dest( outputCssDir ) )
    .pipe( $.filter( '**/*.css' ) )
    .pipe( $.if( $.browserSync.active, $.reload({stream: true}) ) )
    .on( 'error', $.onError );

};
