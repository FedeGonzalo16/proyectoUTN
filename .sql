/* Comando para la creación de las tablas de la B.D */

create database utnproyecto;

use proyectoUtn;

/* #Tabla para el Sing-In */
CREATE TABLE `utnproyecto`.`signin` (
`idusuario` INT ZEROFILL NOT NULL AUTO_INCREMENT,
`nombreusuario` VARCHAR(90) NOT NULL,
`contraseñausuario` VARCHAR(60) NOT NULL,
PRIMARY KEY (`idusuario`),
UNIQUE INDEX `nombreusuario_UNIQUE` (`nombreusuario` ASC) VISIBLE);

/* #Tabla para el Sign-Up */
CREATE TABLE `utnproyecto`.`signup` (
`iduser` INT ZEROFILL NOT NULL AUTO_INCREMENT,
`nombreuser` VARCHAR(90) NOT NULL,
`emailuser` VARCHAR(70) NOT NULL,
`passworduser` VARCHAR(60) NOT NULL,
PRIMARY KEY (`iduser`),
UNIQUE INDEX `nombreuser_UNIQUE` (`nombreuser` ASC) VISIBLE);

/* #Tabla para el formulario de Contacto */
CREATE TABLE `utnproyecto`.`contacto` (
`idcontacto` INT ZEROFILL NOT NULL AUTO_INCREMENT,
`nombrecontacto` VARCHAR(60) NOT NULL,
`apellidocontacto` VARCHAR(80) NOT NULL,
`emailcontacto` VARCHAR(70) NOT NULL,
`mensajecontacto` VARCHAR(1000) NULL,
PRIMARY KEY (`idcontacto`),
UNIQUE INDEX `emailcontacto_UNIQUE` (`emailcontacto` ASC) VISIBLE);

/* #Algunos usuarios por defecto */
/* Sing in */
INSERT INTO `utnproyecto`.`signin` (`nombreusuario`, `contraseñausuario`) VALUES ('Carlo00', 'viernes13');
INSERT INTO `utnproyecto`.`signin` (`nombreusuario`, `contraseñausuario`) VALUES ('Fifa21', 'campeones01');
/* Sign Up */
INSERT INTO `utnproyecto`.`signup` (`nombreuser`, `emailuser`, `passworduser`) VALUES ('ChrisPaul', 'paul2020@gmailcom', 'albiceleste');
INSERT INTO `utnproyecto`.`signup` (`nombreuser`, `emailuser`, `passworduser`) VALUES ('Messi21', 'tinchoo98@gmail.com', 'mexico86');
/* Contacto */
INSERT INTO `utnproyecto`.`contacto` (`nombrecontacto`, `apellidocontacto`, `emailcontacto`, `mensajecontacto`) VALUES ('María', 'Chávez', 'machagmail.com', 'Buenas tardes, quería consultar si tendrían disponible el 23/8/21 para un cumpleaños de quince; Gracias!');
INSERT INTO `utnproyecto`.`contacto` (`nombrecontacto`, `apellidocontacto`, `emailcontacto`, `mensajecontacto`) VALUES ('Leo', 'Aguero', 'leo3098@gmail.com', 'Hola, me gustaría que me contacten para tener más información sobre el servicio que ofrecen. Saludos!.');

