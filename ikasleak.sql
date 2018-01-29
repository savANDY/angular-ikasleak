-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-12-2017 a las 08:43:24
-- Versión del servidor: 10.1.26-MariaDB
-- Versión de PHP: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `ikasleak`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `editar_ikasle` (IN `p_id` INT, IN `p_nombre` VARCHAR(40), IN `p_apellido1` VARCHAR(40), IN `p_apellido2` VARCHAR(40), IN `p_ciclo` VARCHAR(40), IN `p_curso` VARCHAR(20))  NO SQL
BEGIN
UPDATE `ikasle` SET `nombre` = p_nombre, `apellido1` = p_apellido1, `apellido2` = p_apellido2, `ciclo` = p_ciclo, `curso` = p_curso WHERE `ikasle`.`id` = p_id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `insertar_ikasle` (IN `p_nombre` VARCHAR(40), IN `p_apellido1` VARCHAR(40), IN `p_apellido2` VARCHAR(40), IN `p_ciclo` VARCHAR(40), IN `p_curso` VARCHAR(20))  NO SQL
BEGIN
INSERT INTO ikasle(nombre, apellido1, apellido2, ciclo, curso) VALUES (p_nombre, p_apellido1, p_apellido2, p_ciclo, p_curso);
SELECT * FROM ikasle WHERE id = (SELECT max(id) FROM ikasle);
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `seleccionar_por_id` (IN `p_id` INT)  NO SQL
SELECT * FROM ikasle WHERE id = p_id$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ikasle`
--

CREATE TABLE `ikasle` (
  `id` int(11) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `apellido1` varchar(40) NOT NULL,
  `apellido2` varchar(40) NOT NULL,
  `ciclo` varchar(40) NOT NULL,
  `curso` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `ikasle`
--

INSERT INTO `ikasle` (`id`, `nombre`, `apellido1`, `apellido2`, `ciclo`, `curso`) VALUES
(1, 'ANA', 'ANSOLA', 'BARTET', 'APLICACIONES WEB', 'primero'),
(2, 'SARA', 'ANSUATEGI', 'ETXABE', 'APLICACIONES WEB', 'segundo'),
(3, 'ENEKO', 'ARRIETA', 'GABIOLA', 'APLICACIONES WEB', 'primero'),
(4, 'MIREN', 'BALZATEGI', 'ZUMELAGA', 'CUIDADOS AUX ENF', 'primero'),
(5, 'ASIER', 'ETXEANDIA', 'RASIER', 'SOLDADURA', 'primero'),
(43, 'kkkkk', 'kkk', 'kkk', 'kkk', 'primero'),
(44, 'gg', 'gg', 'gg', 'gg', 'primero'),
(45, 'qq', 'qq', 'qq', 'qq', 'primero'),
(46, 'asd', 'asd', 'asd', 'asd', 'primero'),
(47, 'qqq', 'qqq', 'qqq', 'qqq', 'primero'),
(48, 'hhh', 'hhh', 'hhh', 'hh', 'primero'),
(49, 'ggg', 'gg', 'g', 'g', 'primero'),
(50, 'asd', 'asd', 'asd', 'asd', 'primero'),
(51, 'lll', 'll', 'll', 'll', 'primero'),
(52, 'kkkkkkkk', 'kkkkkk', 'kk', 'kk', 'primero'),
(53, 'hhh', 'hh', 'h', 'h', 'primero'),
(54, 'jj', 'j', 'j', 'j', 'primero'),
(55, 'gggggggggg', 'gggggggggg', 'ggggggggggggggggg', 'gggggggggg', 'primero'),
(56, 'yy', 'y', 'y', 'y', 'primero'),
(57, 'asd', 'ss', 'd', 'd', 'primero'),
(58, 'asd', 'asd', 'asd', 'asd', 'primero'),
(59, 'xx', 'x', 'x', 'x', 'primero'),
(60, 'ggg', 'gg', 'g', 'g', 'primero'),
(61, 'hh', 'hh', 'hh', 'hh', 'primero');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `ikasle`
--
ALTER TABLE `ikasle`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `ikasle`
--
ALTER TABLE `ikasle`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
