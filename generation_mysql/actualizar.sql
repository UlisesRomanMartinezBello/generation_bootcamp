-- Actualizar
use familia;

-- Agregar una columna
-- alter table mascota add column especie varchar(255) not null;

-- Agregar en una posicion especifica
-- alter table mascota add column cumpleanios date after edad;

-- Modificar las caracteriticas de una columna
-- alter table mascota modify edad int;

-- No podemos cambiar el nombre de una columna 
-- alter table mascota change column edad edadP int not null;

-- Renombrar tabla
-- alter table mascota rename mascotita;

-- Actualizar
-- update mascotita set especie = 'Gato' where mascota_id = 1;
select * from mascotita;

-- Error 1175: No podemos actualizar si no seleccionamos la llave primaria
-- update mascotita set especie = "Gato" where nombre = "Leo";
