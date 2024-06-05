# Установка

1. Склонировать локально репозиторий
2. Установить зависимости npm i
3. Запустить тесты npm run cy:run


# Тест-кейсы

1. Авторизация пользователя с некорректным email адресом. 
Data-provider [
   'email',
   'email@',
   'email@.com',
   '@.com',
   '.',
   'имейл',
   '!#$%^&*()_+'
]
- Открыть страницу https://account.getblock.io/sign-in-email
- В поле Email ввести некорректное значение из Data-Provider
- В поле Password ввести значение - 'Qwerty12345!'
- Нажать кнопку Continue

ФР: Отображается сообщение под полем Email - Email is invalid


2. Авторизация пользователя с пустими полями
- Открыть страницу https://account.getblock.io/sign-in-email
- Не заполнять поле Email и Password
- Нажать кнопку Continue

фР: Отображается сообщение под полем Email и Password - Input is empty


3. Авторизоция с несуществующим пользователем в системе
- Открыть страницу https://account.getblock.io/sign-in-email
- В поле Email ввести значение - "account_not_exist@gmail.com"
- В поле Password ввести значение - 'Qwerty12345!'
- Нажать кнопку Continue

ФР: Отображается alert с сообщением - Wrong password or username

4. Проверка получения информации blockNumber ноды
- Открыть страницу https://account.getblock.io/sign-in-email
- В поле Email ввести значение - "eugeniy.lennik@gmail.com"
- В поле Password ввести значение - 'Qwerty12345!'
- Нажать кнопку Continue
- На странице dashboard в блоке My Endpoints выбрать протокол Ethereum
- Далее выбрать Network - Mainnet
- Далее выбрать API/Add-on - JSON/RPC
- Нажать кнопку GET
- Раскрыть добавленный эндпоинт и скопировать ссылку с токеном - https://go.getblock.io/82129aa41c1b45b5bfc3203baaa065ab
- На указанный эндпоинт необходимо отправить запрос curl --location 'https://go.getblock.io/8f2febfcdd1345ccbfd7ff0e8753fbfb' \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": "getblock.io"
  }'

ФР: В ответе придет информация с номером блока {
"jsonrpc": "2.0",
"id": "getblock.io",
"result": "0x1318ac3"
}