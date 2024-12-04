# Angular


## Ejercicio 1: Crear un Proyecto Angular
Objetivo: Aprender a crear un proyecto y levantar el servidor de desarrollo.

Instalar Angular CLI (si aún no lo instalamos).

Crear un proyecto con ng new nombre-app.

Ejecutar el proyecto con ng serve.

Mostrar la aplicación en el navegador.

## Ejercicio 2: Crear y Mostrar un Componente
Crear un componente con ng generate component nombre-componente.

En ts, agregar 2 variables strings que contengan mensajes y una variable booleana en false.

En el template, mostrar el valor de esa variable con interpolación.

En el template, usando la directiva estructural ngIf, (importar NgIf en imports:[] del ts) ocultar uno de los mensajes usando la variable booleana.

Incluir el componente creado en app.component.html, mediante su selector \<app-nombre-componente>\</app-nombre-componente> 

Plus: agregar estilos a los elementos del template usando el .css del componente.

## Ejercicio 3: Crear y Mostrar un Componente
Crear un componente con ng generate component nombre-componente.

Agregar un objeto con 4 propiedades en ts.

En el template, mostrar los 4 valores de ese objeto usando interpolación.

Incluir el componente creado en app.component.html, mediante su selector \<app-nombre-componente>\</app-nombre-componente> 

Plus: agregar estilos a los elementos del template usando el .css del componente.

## Ejercicio 4: Crear y Mostrar un Componente
Crear un componente con ng generate component nombre-componente.

Agregar un array con 4 objetos en ts.

En el template, usando la directiva estructural ngFor, (importar NgFor en imports:[] del ts) recorrer el array para mostrar los 4 valores de cada objeto usando interpolación.

Incluir el componente creado en app.component.html, mediante su selector \<app-nombre-componente>\</app-nombre-componente> 

Plus: agregar estilos a los elementos del template usando el .css del componente.

## Ejercicio 5: Crear y Mostrar un Componente (Header)
Crear un componente header con ng generate component nombre-componente.

Usar el html y estilos del header que hicimos en la clase de HTML.

Incluir el componente creado en app.component.html, mediante su selector \<app-nombre-componente>\</app-nombre-componente> 

Plus: Crear una variable para mostrar el texto del header desde ts y en el template usando interpolación.

## Ejercicio 6: Crear y Mostrar un Componente (Footer)
Crear un componente footer con ng generate component nombre-componente.

Usar el html y estilos del footer que hicimos en la clase de HTML.

Incluir el componente creado en app.component.html, mediante su selector \<app-nombre-componente>\</app-nombre-componente> 

Plus: Crear una variable para mostrar el texto del footer desde ts y en el template usando interpolación.

## Ejercicio 7: Lista de películas con comunicación padre-hijo
Objetivo:
Crear dos componentes (MovieListComponent como padre y MovieItemComponent como hijo) que se comuniquen utilizando @Input y @Output.

Pasos:
Configuración del componente padre MovieListComponent:
Archivo TS (movie-list.component.ts):

Declarar una lista de 10 objetos movies, donde cada objeto tenga las propiedades title, year, y description.
Crear una variable selectedMovie para almacenar la película seleccionada.
Crear un método onMovieSelected(movieTitle: string) que asigne el valor recibido a la variable selectedMovie.
Archivo HTML (movie-list.component.html):

Usar *ngFor para iterar sobre la lista de películas.
Para cada película, incluir el selector del componente hijo <app-movie-item> y pasarle los datos de la película mediante property binding con [movie]="movie".
Escuchar el evento emitido por el hijo con event binding, ej.: (movieSelected)="onMovieSelected($event)".
Mostrar en un <p> la película seleccionada interpolando la variable selectedMovie.
Configuración del componente hijo MovieItemComponent:
Archivo TS (movie-item.component.ts):

Declarar una propiedad @Input() llamada movie de tipo objeto para recibir los datos de cada película.
Declarar un evento @Output() llamado movieSelected utilizando EventEmitter<string>.
Crear un método selectMovie() que emita el evento movieSelected con el título de la película (this.movie.title).
Archivo HTML (movie-item.component.html):

Mostrar el título (title), año (year) y descripción (description) de la película usando interpolación.
Usar *ngIf para mostrar solo las descripciones que no estén vacías.
Agregar un botón "Seleccionar" que, al hacer clic, dispare el método selectMovie().
Incorporar el componente en la aplicación:
Incluir el selector del componente padre <app-movie-list> en el archivo app.component.html.
Plus (opcional):
Generar una interfaz Movie para tipar los datos de las películas:
Incluir propiedades como title, year, description, y opcionalmente image.
Usar esta interfaz para tipar la lista de películas y la propiedad @Input en el componente hijo.
Estilizar las películas con un diseño de tarjetas (cards) y hacerlo responsivo para escritorio y móviles.
Añadir imágenes a las películas para un diseño más atractivo.

## Ejercicio 8: Formulario de búsqueda de películas (Binding Bidireccional)
Objetivo:
Crear un componente SearchBar que permita buscar películas en tiempo real utilizando binding bidireccional ([(ngModel)]).

Pasos:
Configuración del componente SearchBar:
Archivo TS (search-bar.component.ts):

Declarar una variable searchTerm de tipo string y asignarle un valor inicial vacío.
Importar y agregar el módulo FormsModule en los imports, para habilitar el uso de [(ngModel)].
Archivo HTML (search-bar.component.html):

Crear un elemento <input> con un atributo placeholder que indique "Buscar películas...".
Implementar binding bidireccional con [(ngModel)] para enlazar el valor del input con la variable searchTerm.
Agregar un <p> que diga: "Buscando...", interpolando el valor de searchTerm para mostrar en tiempo real lo que el usuario escribe.
Incorporar el componente en la aplicación:
En el archivo app.component.html, incluir el selector del componente SearchBar.
Plus (opcional):
Agregar estilos tanto para desktop como para mobile, asegurando que el campo de búsqueda sea responsivo y tenga diseño/colores diferentes.