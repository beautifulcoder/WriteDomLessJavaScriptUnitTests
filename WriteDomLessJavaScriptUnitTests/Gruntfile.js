module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        simplemocha: {
            all: {
                src: ['Scripts/spec/**/*.js'],
                options: {
                    ui: 'bdd',
                    reporter: 'spec'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-simple-mocha');
    grunt.registerTask('default', ['simplemocha']);
};
