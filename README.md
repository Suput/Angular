# 6prodlesson

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Развернуть приложение в Интернете в 1 раз
1. Установить Firebase инструменты `npm install -g firebase-tools`
    > Консольные инструменты Firebase для работы с Firebase
2. Собрать наше приложение в набор статических файлов `ng build --configuration production`
    > Хостить можно только набор статических файлов
3. Войти в Firebase аккаунт (точнее в Гугл) `firebase login`
    > Откроется браузер, нужно дать все разрешения
4. Проинициализировать проект Firebase `firebase init`
    > За подробными шагами - какие галочки ставить - смотрите презентацию
5. Выгрузить набор статических файлов в Firebase `firebase deploy`
    > Теперь сайт доступен в Интернете

## Развернуть приложение в Интернете в N раз
1. Собрать наше приложение в набор статических файлов `ng build --configuration production`
    > Хостить можно только набор статических файлов
2. Выгрузить набор статических файлов в Firebase `firebase deploy`
    > Теперь сайт доступен в Интернете
