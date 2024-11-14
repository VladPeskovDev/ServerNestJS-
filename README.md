# ServerNestJS-
Используя Git, TypeScript, NestJS, Prisma и PostgreSQL создайте RESTful-сервис для работы с информацией о пользователях.
Требования: 

1. Docker и Docker Compose: 
- Написать Dockerfile для приложения и compose.yml файл для запуска приложения и базы данных в контейнерах.
 2. Структура таблицы пользователей: 
- Таблица пользователей должна содержать следующие поля: 
- id (UUID, Primary Key) 
- firstName (строка) 
- lastName (строка, необязательная)
- createdAt (дата создания записи) 
- updatedAt (дата обновления)
3. Миграция: 
- Создать файл миграции с помощью Prisma для создания таблицы пользователей. 
- Написать скрипт для заполнения таблицы случайными записями (достаточно 10 записей). 
4. Создание CRUD-ресурса: 
- Создать новый CRUD-ресурс для управления пользователями. 
- Реализовать все стандартные методы CRUD. 
- Добавить отдельный метод для получения всех записей таблицы, использующий Server Sent Events (SSE).
5. Валидация:
- Для каждого метода API валидировать параметры и тело запроса.
6. Конфигурация подключения к БД: 
- Вынести информацию о подключении к базе данных (URL, имя пользователя, пароль и др.) в переменные окружения. Создайте файл .env для хранения этих переменных. 
7. Размещение кода: 
- Разместить код в репозитории на GitHub. Убедитесь, что включены: 
- README.md, описывающий проект, его установку и запуск. 
- .gitignore, чтобы исключить ненужные файлы и папки из репозитория.

