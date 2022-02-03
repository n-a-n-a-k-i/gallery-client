# Gallery Client

Клиент для Gallery

## Переменные среды

Переменные среды описать в файле `.env` в корне приложения:

```dotenv
REACT_APP_SERVER_URL=http://localhost:5001

REACT_APP_PHOTO_FIND_MAX=100
REACT_APP_PHOTO_THUMBNAIL_WIDTH=256
REACT_APP_PHOTO_THUMBNAIL_HEIGHT=256
```

## Запуск

Установить `pm2`:

```shell
pm2 serve build 5002 --spa --name gallery-client
```

## Подсказки

Проверка на неиспользуемые зависимости:

```shell
npm install -g depcheck
depcheck

npx depcheck

npm install -g depcheck typescript
```

Поиск новых релизов пакетов:

```shell
npm outdated
```

Обновление пакетов:

```shell
npm install -g npm-check-updates
ncu -u

npm update
```
