### API

llamadas a la API de Kitsu

Manga

```js
https://kitsu.io/api/edge/manga
```

PaginationYou can choose how much of a resource to receive by specifying pagination parameters. Pagination is supported via limit and offset. Resources are paginated in groups of 10 by default and can be increased to a maximum of 20./anime?page[limit]=5&page[offset]=0The response will include URLs for the first, next and last page of resources in the links object based on your request."links": {
"first": "https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0",
"next": "https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=5",
"last": "https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=12062"
}

Color Palette

#EAE7DC
#D8C3A5
#8E8D8A
#E98074
#E85A4F

User cases

- Como usuario no registrado, cuantro estoy en la langing page he de poder registrarme
- Como usuario registrado, cuantro estoy en la langing page he de poder identificarme
- como Usuario identificado, a partir de ahora "user", he de poder ver mi biblioteca con los artículos que tiene
- Como user, he de poder seleccionar una serie para mi biblioteca
- Como user, he de poder buscar en el buscador y ver los resultado si existen
- Como user, en mi biblioteca he de poder eliminar series que ya no tenga
- Como user, he de ver los diferentes listados de las categorias con algunas series, y al seleccionar la categoria, ver más
- Como user, si entro en una serie he de poder ver la información pertaneciente a esa serie

Tareas

- Desarrollar cabecera (no identificados)
- Desarrollar cabecera (identificados)
- Diseño página Landing
- Diseño página Log in
- Diseño página Register
- Conexión con la BBDD para registrar e identificar usuarios
- Alta nuevo usuario (registrar)
- Inicio de sesion de usuario identificado
- Añadir una serie del usuario
- Eliminar una serie del usuario
-

MySQL

https://remotemysql.com/
pass: \_SB_7xNrR!8\$9xu

Username: CVibAzr5RI
Database name: CVibAzr5RI
Password: 637dOnEWvm
Server: remotemysql.com
Port: 3306

CREATE TABLE `CVibAzr5RI`.`user` ( `id` INT NOT NULL AUTO_INCREMENT , `name` TEXT NOT NULL , `email` TEXT NOT NULL , `password` TEXT NOT NULL , PRIMARY KEY (`id`), UNIQUE `EMAIL` (`email`)) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_unicode_ci;
