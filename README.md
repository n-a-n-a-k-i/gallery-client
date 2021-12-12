# Gallery Client

Клиент для Gallery

## Переменные среды

Переменные среды описать в файле `.env` в корне приложения:

```dotenv
REACT_APP_GALLERY_SERVER_URL=http://localhost:5000
```

## Запуск

Установить `pm2`:

```shell
pm2 serve build 5002 --spa --name gallery-client
```

