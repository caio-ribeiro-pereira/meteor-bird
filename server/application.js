winston = Meteor.npmRequire("winston");
winston.add(winston.transports.File, { 
 filename: "../application.log",
 maxsize: 1024
});