-- Insertar

use familia;

-- Insertar datos en la tabla
-- Los datos deben estar ordenados

-- error 1062 - Valor repetido
-- insert into persona(nombre, correo, edad, estado, cumpleanios) values('Ulises', 'ulises@gmail.com', 23, 'Feliz', '1998-10-10');

-- error 1364 - no llenar un dato no null
-- insert into persona(nombre, correo, edad, estado, cumpleanios) values('juan@gmail.com', 34, 'Alegre', '1980-01-01');

-- select * from persona;

-- create table mascota(mascota_id int auto_increment, nombre varchar(255) not null, edad int not null, fk1_persona int not null, primary key(mascota_id), foreign key(fk1_persona) references persona(persona_id) ON DELETE CASCADE ON UPDATE CASCADE);

-- insert into mascota (nombre, edad, fk1_persona) values ('Leo', 3, 1);
-- insert into mascota (nombre, edad, fk1_persona) values ('Tobi', 9, 1);
-- insert into mascota (nombre, edad, fk1_persona) values ('Beni', 12, 2);
-- insert into mascota (nombre, edad, fk1_persona) values ('Patitas', 3, 4);

select * from mascota;

