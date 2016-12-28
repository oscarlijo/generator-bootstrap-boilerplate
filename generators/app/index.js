'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var inquirer = require('inquirer');
var htmlWiring = require("html-wiring");
var fs = require('fs');
var path = require('path');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the shining ' + chalk.red('bootstrap-boilerplate') + ' generator!'
    ));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath(),
      this.destinationPath()
    );
    // this.fs.copy(
    //   this.templatePath('package.json'),
    //   this.destinationPath('package.json')
    // );
  },

  install: function () {
    this.installDependencies();
  }
});
