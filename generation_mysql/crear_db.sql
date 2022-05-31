-- Crear

-- Crear una base de datos
-- create schema familia;
-- create database familia;

use familia;

-- Crear una tabla debe tener minimo una columna 
create table persona(
	persona_id int auto_increment,
    nombre varchar(255) not null,
    correo varchar(255) not null,
    edad int not null,
    estado varchar(255) not null,
    cumpleanios date not null,
    primary key(persona_id),
    constraint correo_unico unique(correo));
