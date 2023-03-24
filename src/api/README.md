## MAILING SYSTEM MICRO-SERVICE

This APIs is used to send automated emails to customers.

## Installation

```bash
$ yarn install
```

## Environment variables

```
$ touch .env && mv .env.example .env
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Manual Test

- SEND `POST` request to `${baseUrl}/api/mailing`
- use the following model into the request body

```
{
    "name": "string",
    "email": "string"
}
```

## Support

No worries, just by me a cup of coffee.

## Stay in touch

- Author - [Emmanuel Dushime](https://www.dushimeemma.com)
