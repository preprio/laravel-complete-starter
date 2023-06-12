## Laravel 10 Starter

Look at the Laravel [documentation](https://docs.prepr.io/connecting-front-end-apps/laravel) to learn more.

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

## Development Server

Start the development server on http://localhost:8000

```
php artisan serve
```

## Production

Check out the [deployment documentation](https://laravel.com/docs/10.x/deployment) for more information.
