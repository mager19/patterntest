/******************************************************
 * PATTERN LAB NODE
 * EDITION-NODE-GULP
 * The gulp wrapper around patternlab-node core, providing tasks to interact with the core library and move supporting frontend assets.
******************************************************/
var gulp         = require('gulp'),
    path         = require('path'),
    browserSync  = require('browser-sync').create(),
    sass         = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify       = require('gulp-uglify'),
    concat       = require('gulp-concat'),
    sourcemaps   = require('gulp-sourcemaps'),
    argv         = require('minimist')(process.argv.slice(2)),
    cleanCSS     = require('gulp-clean-css');

/******************************************************
 * COPY TASKS - stream assets from source to destination
******************************************************/
// JS copy
gulp.task('pl-copy:js', function(){
  return gulp.src('**/*.js', {cwd: path.resolve(paths().source.js)} )
    .pipe(gulp.dest(path.resolve(paths().public.js)));
});

// replace      = require('gulp-replace'),
// gulp.task('copy-clean:js', function(){
//   return gulp.src([
//     '**/scripts.min.js',
//     '**/elements.min.js'
//     ], {
//       cwd: path.resolve(paths().public.js)
//     })
//     .pipe(replace(/\$(\(|\.)/gim, 'jQuery$1'))
//     .pipe(gulp.dest(path.resolve(paths().wordpress)));
// });
// gulp.task('pl-copy:js', gulp.series('copy-public:js', 'copy-clean:js'));
// gulp.task('copy:js', gulp.series('copy-public:js', 'copy-clean:js'));

// Images copy
gulp.task('pl-copy:img', function(){
  return gulp.src('**/*.*',{cwd: path.resolve(paths().source.images)} )
    .pipe(gulp.dest(path.resolve(paths().public.images)));
});

// Favicon copy
gulp.task('pl-copy:favicon', function(){
  return gulp.src('favicon.ico', {cwd: path.resolve(paths().source.root)} )
    .pipe(gulp.dest(path.resolve(paths().public.root)));
});

// Fonts copy
gulp.task('pl-copy:font', function(){
  return gulp.src('*', {cwd: path.resolve(paths().source.fonts)})
    .pipe(gulp.dest(path.resolve(paths().public.fonts)));
});

// SASS Compilation
gulp.task('pl-sass', function(){
  return gulp.src(path.resolve(paths().source.css, '**/!(external-pages).scss'))
    .pipe(sourcemaps.init())
    .pipe(sass({})
    .on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest(path.resolve(paths().source.css)));
});

// SASS Compilation for external pages
gulp.task('pl-external-sass', function(){
  return gulp.src([
      path.resolve(paths().source.css, '**/external-pages.scss'),
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({})
    .on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(concat('external-pages.css'))
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest(path.resolve(paths().source.css)));
});

// SASS Compilation for elements externals
gulp.task('pl-elements-sass', function(){
  return gulp.src([
    path.resolve(paths().source.css, '**/elements.scss'),
    ])
    .pipe(sourcemaps.init())
    .pipe(sass({})
    .on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true
    }))
    .pipe(concat('elements.css'))
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest(path.resolve(paths().source.css)));
});

// JS Uglification and concat
gulp.task('pl-js-script', function() {
  return gulp.src([
    path.resolve(paths().source.js, 'vendor/bootstrap/dist/js/bootstrap.js'),
    path.resolve(paths().source.js, 'vendor/slicknav/jquery.slicknav.js'),
    path.resolve(paths().source.js, 'vendor/accessible-slick/slick/slick.js'),
    path.resolve(paths().source.js, 'vendor/lightgallery/demo/js/lightgallery.js'),
    path.resolve(paths().source.js, 'vendor/lightgallery/demo/js/lg-fullscreen.js'),
    path.resolve(paths().source.js, 'vendor/lightgallery/demo/js/lg-thumbnail.js'),
    path.resolve(paths().source.js, 'vendor/lightgallery/demo/js/lg-video.js'),
    path.resolve(paths().source.js, 'vendor/lightgallery/demo/js/lg-autoplay.js'),
    path.resolve(paths().source.js, 'vendor/lightgallery/demo/js/lg-zoom.js'),
    path.resolve(paths().source.js, 'vendor/lightgallery/demo/js/lg-hash.js'),
    path.resolve(paths().source.js, 'vendor/lightgallery/demo/js/lg-pager.js'),
    path.resolve(paths().source.js, 'vendor/lightgallery/lib/jquery.mousewheel.min.js'),
    path.resolve(paths().source.js, 'main.js'),
    path.resolve(paths().source.js, 'plugins.js'),
    path.resolve(paths().source.js, 'atoms/*.js'),
    path.resolve(paths().source.js, 'molecules/*.js'),
    path.resolve(paths().source.js, 'organisms/*.js'),
    path.resolve(paths().source.js, 'vendor/svgxuse.js'),
    ])
    .pipe(uglify())
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest(path.resolve(paths().source.js)))
});

// JS Uglification and concat
gulp.task('pl-elements-js', function() {
  return gulp.src([
    path.resolve(paths().source.js, 'vendor/slicknav/jquery.slicknav.js'),
    path.resolve(paths().source.js, 'organisms/header.js'),
    path.resolve(paths().source.js, 'organisms/secondary-header.js'),
    path.resolve(paths().source.js, 'vendor/injector-svgxuse.js')
    ])
    .pipe(uglify())
    .pipe(concat('elements.min.js'))
    .pipe(gulp.dest(path.resolve(paths().source.js)));
});

gulp.task('pl-js', gulp.parallel('pl-js-script', 'pl-elements-js'));
// CSS Copy
gulp.task('pl-copy:css', function(){
  return gulp.src(path.resolve(paths().source.css, '*.css'))
    .pipe(gulp.dest(path.resolve(paths().public.css)))
    .pipe(browserSync.stream());
});

// Styleguide Copy everything but css
gulp.task('pl-copy:styleguide', function(){
  return gulp.src(path.resolve(paths().source.styleguide, '**/!(*.css)'))
    .pipe(gulp.dest(path.resolve(paths().public.root)))
    .pipe(browserSync.stream());
});

// Styleguide Copy and flatten css
gulp.task('pl-copy:styleguide-css', function(){
  return gulp.src(path.resolve(paths().source.styleguide, '**/*.css'))
    .pipe(gulp.dest(function(file){
      //flatten anything inside the styleguide into a single output dir per http://stackoverflow.com/a/34317320/1790362
      file.path = path.join(file.base, path.basename(file.path));
      return path.resolve(path.join(paths().public.styleguide, 'css'));
    }))
    .pipe(browserSync.stream());
});

/******************************************************
 * PATTERN LAB CONFIGURATION - API with core library
******************************************************/
//read all paths from our namespaced config file
var config = require('./patternlab-config.json'),
  patternlab = require('patternlab-node')(config);

function paths() {
  return config.paths;
}

function getConfiguredCleanOption() {
  return config.cleanPublic;
}

function build(done) {
  patternlab.build(done, getConfiguredCleanOption());
}

gulp.task('pl-assets', gulp.series(
  gulp.parallel(
    gulp.series('pl-js', 'pl-copy:js'),
    'pl-copy:img',
    'pl-copy:favicon',
    'pl-copy:font',
    gulp.series('pl-elements-sass', 'pl-sass', 'pl-external-sass', 'pl-copy:css', function(done){done();}),
    'pl-copy:styleguide',
    'pl-copy:styleguide-css'
  ),
  function(done){
    done();
  })
);

gulp.task('patternlab:version', function (done) {
  patternlab.version();
  done();
});

gulp.task('patternlab:help', function (done) {
  patternlab.help();
  done();
});

gulp.task('patternlab:patternsonly', function (done) {
  patternlab.patternsonly(done, getConfiguredCleanOption());
});

gulp.task('patternlab:liststarterkits', function (done) {
  patternlab.liststarterkits();
  done();
});

gulp.task('patternlab:loadstarterkit', function (done) {
  patternlab.loadstarterkit(argv.kit, argv.clean);
  done();
});

gulp.task('patternlab:build', gulp.series('pl-assets', build, function(done){
  done();
}));

/******************************************************
 * SERVER AND WATCH TASKS
******************************************************/
// watch task utility functions
function getSupportedTemplateExtensions() {
  var engines = require('./node_modules/patternlab-node/core/lib/pattern_engines');
  return engines.getSupportedFileExtensions();
}
function getTemplateWatches() {
  return getSupportedTemplateExtensions().map(function (dotExtension) {
    return path.resolve(paths().source.patterns, '**/*' + dotExtension);
  });
}

function reload() {
  browserSync.reload();
}

function reloadCSS() {
  browserSync.reload('*.css');
}

function watchCSS() {
  gulp.watch(path.resolve(paths().source.css, '**/*.scss'), { awaitWriteFinish: true }).on('change', gulp.series('pl-sass'));
  gulp.watch(path.resolve(paths().source.css, '**/*.css'), { awaitWriteFinish: true }).on('change', gulp.series('pl-copy:css', reloadCSS));
  gulp.watch(path.resolve(paths().source.styleguide, '**/*.*'), { awaitWriteFinish: true }).on('change', gulp.series('pl-copy:styleguide', 'pl-copy:styleguide-css', reloadCSS));
}
function watch() {
  gulp.watch(path.resolve(paths().source.css, '**/*.scss'), { awaitWriteFinish: true }).on('change', gulp.series('pl-sass'));
  gulp.watch(path.resolve(paths().source.css, '**/*.css'), { awaitWriteFinish: true }).on('change', gulp.series('pl-copy:css', reloadCSS));
  gulp.watch(path.resolve(paths().source.styleguide, '**/*.*'), { awaitWriteFinish: true }).on('change', gulp.series('pl-copy:styleguide', 'pl-copy:styleguide-css', reloadCSS));

  gulp.watch(path.resolve(paths().source.js, '**/*.js'), { awaitWriteFinish: true }).on('change', gulp.series('pl-copy:js', build, reload));

  var patternWatches = [
    path.resolve(paths().source.patterns, '**/*.json'),
    path.resolve(paths().source.patterns, '**/*.md'),
    path.resolve(paths().source.data, '*.json'),
    path.resolve(paths().source.fonts + '/*'),
    path.resolve(paths().source.images + '/*'),
    path.resolve(paths().source.meta, '*'),
    path.resolve(paths().source.annotations + '/*')
  ].concat(getTemplateWatches());

  gulp.watch(patternWatches, { awaitWriteFinish: true }).on('change', gulp.series(build, reload));
}

gulp.task('patternlab:connect', gulp.series(function(done) {
  browserSync.init({
    server: {
      baseDir: path.resolve(paths().public.root)
    },
    snippetOptions: {
      // Ignore all HTML files within the templates folder
      blacklist: ['/index.html', '/', '/?*']
    },
    notify: {
      styles: [
        'display: none',
        'padding: 15px',
        'font-family: sans-serif',
        'position: fixed',
        'font-size: 1em',
        'z-index: 9999',
        'bottom: 0px',
        'right: 0px',
        'border-top-left-radius: 5px',
        'background-color: #1B2032',
        'opacity: 0.4',
        'margin: 0',
        'color: white',
        'text-align: center'
      ]
    }
  }, function(){
    console.log('PATTERN LAB NODE WATCHING FOR CHANGES');
    done();
  });
}));

/******************************************************
 * COMPOUND TASKS
******************************************************/
gulp.task('external-elements', gulp.parallel('pl-elements-js', 'pl-elements-sass'));
gulp.task('update:css', gulp.series('pl-sass', watchCSS));
gulp.task('patternlab:watch', gulp.series('patternlab:build', watch));
gulp.task('patternlab:serve', gulp.series('patternlab:build', 'patternlab:connect', watch));
gulp.task('default', gulp.series('patternlab:serve'));
