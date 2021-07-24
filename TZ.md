Создан репозиторий goit-react-hw-04-movies
При сдаче домашней работы есть ссылки: на исходные файлы и рабочие страницы каждого проекта на Netlify
В состоянии компонентов хранится минимально необходимый набор данных, остальное вычисляется
При запуске кода задания, в консоли нету ошибок и предупреждений
Для каждого компонента есть отдельная папка с файлом React-компонента и файлом стилей
Для компонентов описаны propTypes, и где необходимо, defaultProps
Все что компонент ожидает в виде пропов, передается ему при вызове
Имена компонентов понятные, описательные
JS-код чистый и понятный, используется Prettier
Стилизация делается только SASS, CSS-модулями или Styled Components. Можно использовать библиотеки компонентов.
Задание «Кинопоиск»
Создай базовую маршрутизацию для приложения поиска и хранения фильмов. Превью рабочего приложения смотри по ссылке.

API themoviedb.org
Для бекенда используй themoviedb.org API. Необходимо зарегистриваться (можно ввести произвольные данные) и получить API-ключ. В этой работе будут использоваться следующие ендпоинты.

https://developers.themoviedb.org/3/trending/get-trending - список самых популярных фильмов на сегодня для создания коллекции на главной странице.
https://developers.themoviedb.org/3/search/search-movies - поиск кинофильма по ключевому слову на странице фильмов.
https://developers.themoviedb.org/3/movies/get-movie-details - запрос полной информации о фильме для страницы кинофильма.
https://developers.themoviedb.org/3/movies/get-movie-credits - запрос информации о актёрском составе для страницы кинофильма.
https://developers.themoviedb.org/3/movies/get-movie-reviews - запрос обзоров для страницы кинофильма.
Ссылка на документацию

Маршруты
В приложении должны быть следующие маршруты. Если пользователь зашел по несуществующему маршруту, его необходимо перенаправлять на домашнюю страницу.

'/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
'/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
'/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
/movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
/movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.

Code Splitting (разделение кода)

Добавь асинхронную загрузку JS-кода для маршрутов приложения используя React.lazy() и Suspense.

---

// https://api.themoviedb.org/3/trending/all/day?api_key=2f8d6050c74d5f454a522d74a8cedbb8 !
// https://api.themoviedb.org/3/movie/2300?api_key=2f8d6050c74d5f454a522d74a8cedbb8 !
// https://api.themoviedb.org/3/movie/2300/credits?api_key=2f8d6050c74d5f454a522d74a8cedbb8 !
// https://api.themoviedb.org/3/movie/2300/reviews?api_key=2f8d6050c74d5f454a522d74a8cedbb8 !

---

// console.log('belongs_to_collection:', belongs_to_collection)
// console.log('belongs_to_collection.poster_path:', belongs_to_collection.poster_path)
// console.log('belongs_to_collection.backdrop_path:', belongs_to_collection.backdrop_path)
// /5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg
