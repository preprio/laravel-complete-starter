## Laravel Complete Starter

Look at the [Complete guide to Laravel and Prepr personalization](https://docs.prepr.io/connecting-front-end-apps/laravel-complete-guide) to learn more.

## Add the environment file

Copy the .env.example file in this directory to .env (which will be ignored by Git) by running the following command:

```
cp .env.example .env
```

## Update the environment file

In the .env file replace <YOUR-ENDPOINT> with the Prepr endpoint from your environment with demo content.

## Setup

Make sure to install the dependencies:

```
composer install
```

        
```
npm install
npm run dev
```

### Generate App Key

``` 
php artisan key:generate
```


### Create Database File

Create the SQLite database file used in this project. If you'd like to use a different database, check out the [Laravel docs](https://laravel.com/docs/11.x/database) for more details.

``` 
php artisan migrate
```

## Development Server

Start the development server on http://localhost:8000

```
php artisan serve
```

## Production

Check out the [deployment documentation](https://laravel.com/docs/10.x/deployment) for more information.
