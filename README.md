# Angular - Trabajo Final

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



----------

## **Ejercicio 7: Lista de películas con comunicación padre-hijo**

#### Objetivo:

Crear dos componentes (`MovieListComponent` como padre y `MovieItemComponent` como hijo) que se comuniquen utilizando `@Input` y `@Output`.

#### Pasos:

##### **Configuración del componente padre `MovieListComponent`:**

1.  **Archivo TS (`movie-list.component.ts`):**
    
    -   Declarar una lista de 10 objetos `movies`, donde cada objeto tenga las propiedades `title`, `year`, y `description`.
    -   Crear una variable `selectedMovie` para almacenar la película seleccionada.
    -   Crear un método `onMovieSelected(movieTitle: string)` que asigne el valor recibido a la variable `selectedMovie`.
2.  **Archivo HTML (`movie-list.component.html`):**
    
    -   Usar `*ngFor` para iterar sobre la lista de películas.
    -   Para cada película, incluir el selector del componente hijo `<app-movie-item>` y pasarle los datos de la película mediante property binding con `[movie]="movie"`.
    -   Escuchar el evento emitido por el hijo con event binding, ej.: `(movieSelected)="onMovieSelected($event)"`.
    -   Mostrar en un `<p>` la película seleccionada interpolando la variable `selectedMovie`.

##### **Configuración del componente hijo `MovieItemComponent`:**

1.  **Archivo TS (`movie-item.component.ts`):**
    
    -   Declarar una propiedad `@Input()` llamada `movie` de tipo objeto para recibir los datos de cada película.
    -   Declarar un evento `@Output()` llamado `movieSelected` utilizando `EventEmitter<string>`.
    -   Crear un método `selectMovie()` que emita el evento `movieSelected` con el título de la película (`this.movie.title`).
2.  **Archivo HTML (`movie-item.component.html`):**
    
    -   Mostrar el título (`title`), año (`year`) y descripción (`description`) de la película usando interpolación.
    -   Usar `*ngIf` para mostrar solo las descripciones que no estén vacías.
    -   Agregar un botón **"Seleccionar"** que, al hacer clic, dispare el método `selectMovie()`.

##### **Incorporar el componente en la aplicación:**

-   Incluir el selector del componente padre `<app-movie-list>` en el archivo `app.component.html`.

##### **Plus (opcional):**

1.  Generar una interfaz `Movie` para tipar los datos de las películas:
    -   Incluir propiedades como `title`, `year`, `description`, y opcionalmente `image`.
    -   Usar esta interfaz para tipar la lista de películas y la propiedad `@Input` en el componente hijo.
2.  Estilizar las películas con un diseño de tarjetas (cards) y hacerlo responsivo para escritorio y móviles.
3.  Añadir imágenes a las películas para un diseño más atractivo.


----------

## **Ejercicio 8: Formulario de Tickets

Crear componente para el formulario: ng generate component ticket-form


Configurar el formulario en el componente TS (ticket-form.component.ts):

Importar dependencias:

*import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
*imports: [ReactiveFormsModule],


Crear una propiedad ticketForm de tipo FormGroup con dos controles:

adultTickets inicializado en 0.
childTickets inicializado en 0.

Crear una variable totalTickets.

Crear un método calculateTotal() que sume los valores de adultTickets y childTickets y los guarde en totalTickets.

Configurar el template (ticket-form.component.html):

Crear un formulario con [formGroup]="ticketForm".

Agregar un input con formControlName="adultTickets".
Agregar un input con formControlName="childTickets".

Agregar un botón que al hacer clic ejecute el método calculateTotal().

Mostrar el resultado en un <p> con el texto:

🎟️ Total de Entradas: X




##### **Incorporar el componente en la aplicación:**
 *Incorporar el componente en app.html*

<app-ticket-form></app-ticket-form>

##### **Plus (opcional):**

-   Agregar estilos correspondientes tanto para desktop como para mobile, asegurando que sea responsivo y tenga diseño/colores diferentes.

----------

## Ejercicio 9: Datos inyectados desde servicios 

#### Objetivo:
Compartir datos a componentes mediante inyección de dependencias

#### Pasos:
Crear servicio a través de angular cli: ng g service, nombre a elección.
En el servicio, crear un array de objetos con los datos del ejercicio 4.
Inyectar el servicio en el componente de ejercicio 4 para reemplazar y obtener ese array desde el servicio en lugar de crearlo en el componente.


## **Ejercicio 10: Datos inyectados desde servicios para componentes de pelis**

#### Objetivo:
Compartir datos a componentes mediante inyección de dependencias

#### Pasos:
Crear servicio a través de angular cli: ng g service, nombre a elección (ej. movie).
En el servicio, crear un método que retorne el array de objetos de las pelis del componente (movie-list), generado en el ejercicio 7.
Inyectar el servicio en el componente (movie-list) para obtener las pelis desde el servicio.
Invocar el método del servicio que retorna las pelis y asignarlo a nuestra variable. 
Opcional: desde el constructor, ó, desde el método de inicialización (ngOnInit): https://angular.dev/api/core/OnInit?tab=api
Ejemplo:


       ngOnInit(): void {
         this.movies = this.movieService.getMovies(); 
      }

Implementar OnInit (interfaz) desde la declaración de nuestra clase:


    export  class  MovieListComponent  implements  OnInit {



## **Ejercicio 11: Ruteo y Navegación**

#### Objetivo:
Armar ruteo para 2 páginas y re-estructuración de app para envolver nuestros componentes.

#### Pasos:
Antes de empezar, necesitamos limpiar nuestro app.component.html, de manera que únicamente nos quede header, footer y router-outlet: 

    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>

Crear 2 componentes que vamos a usar para "envolver" a otros componentes:
Crear componente llamado **Ejercicios**, para contener los componentes que hicimos de ejercicios, para esto, implementamos los selectores de cada componente de ejercicio y los importamos.
Crear componente llamado **Movies**, para contener los componentes de movie list. 


En el archivo app.routes.ts, agregar 2 paths: pelis y ejercicios. Cada uno con su componente MovieComponent y EjerciciosComponent respectivamente.

Opcional: Agregar sección de Entradas/Tickets con el ejercicio de formulario.
Opcional: Prácticas online de ruteo: https://angular.dev/tutorials/learn-angular/13-define-a-route#define-a-route-in-approutests



## Ejercicio 12: Integración con endpoints de APIs mediante HTTP GET

1. Configurar HTTP.
   En app.config.ts, configuramos http con provideHttpClient() para poder inyectarlo en los servicios.

El archivo app.config.ts debería quedar:


    import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
    import { provideRouter } from  '@angular/router'; 
    import { routes } from  './app.routes';
    import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
    
    export  const  appConfig:  ApplicationConfig  = {
        providers: [
          provideHttpClient(withInterceptorsFromDi()),
          provideZoneChangeDetection({ eventCoalescing:  true }),
          provideRouter(routes), 
        ],
     };



3. Inyectar Http en el **servicio** de movies con
 `constructor(private  http:  HttpClient) {}`
 4. Crear un método para realizar una petición GET, usando HTTP. 
 Ejemplo:


        getEpisodes(): Observable<{Episodes: []}>
         {
        	return  this.http.get<{Episodes: []}>('https://www.omdbapi.com/?apikey=2ff6c6e4&t=From&Season=1')
         } 

	Se pueden cambiar los parámetros del mismo endpoint para obtener otra serie y otra temporada (season), utilizando la misma api key (2ff6c6e4)

3. En el componente, inyectar el servicio, realizar la suscripción para ejecutar la llamada y obtener los títulos de los episodios. 
Los títulos de los episodios, se pueden mostrar en un componente ya creado, o en un nuevo componente para series con su propio ruteo *series* (opcional a elección).

Ejemplo de suscripción:


    this.seriesService.getEpisodes().subscribe(series => { this.series = series.Episodes; })



Guía Obvservable: https://rxjs.dev/guide/observable 

## Ejercicio 13: Accesibilidad
1. Accesibilidad: agregar 1 ARIA y probar https://www.w3schools.com/accessibility/accessibility_screen_readers.php

## Ejercicio 14: Desarrollar las siguientes consignas (son opcionales)
1. Agregar 1 test para 1 componente.
2. Configurar ambiente local para consumir api local (creada en clase backend).


