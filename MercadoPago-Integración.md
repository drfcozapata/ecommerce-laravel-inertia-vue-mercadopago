# MERCADO PAGO MÉXICO

1. Instalar el SDK de Mercado Pago para PHP copiando y pegando el siguente código en la terminal:

```bash
    php composer.phar require "mercadopago/dx-php"
```

2. Crear las Preferencias en archivo checkout de PHP (copiar y pegar):

```php
    <?php
    // SDK de Mercado Pago
    require __DIR__ .  '/vendor/autoload.php';
    // Agrega credenciales
    MercadoPago\SDK::setAccessToken('PROD_ACCESS_TOKEN');

    // Crea un objeto de preferencia
    $preference = new MercadoPago\Preference();

    // Crea un ítem en la preferencia
    $item = new MercadoPago\Item();
    $item->title = 'Mi producto';
    $item->quantity = 1;
    $item->unit_price = 75.56;
    $preference->items = array($item);
    $preference->save();
    ?>
```

3.

## Credenciales de prueba

### Public Key

<!-- TEST-338486df-8c1b-4f73-94c6-0375085a30d5 (API) -->

TEST-51d6e558-e856-43e2-a81f-479f67f0191b (Pro)

### Access Token

<!-- TEST-8415147489355770-090718-9b96265a998b9a6007acd10620da3556-521490094 (API) -->

TEST-559305630685610-090809-9cde582719917b089eb834f995e5d7c6-521490094 (Pro)

<!-- ## Cuentas de Prueba (API) [InertiaShop]

### Vendedor

Usuario: TESTUSER1114961314

Contraseña: 1vYLYWJmET

### Comprador

Usuario: TESTUSER1692149113

Contraseña: NLzE6vsv45 -->

## Usuarios de Prueba (Pro) [ShopInertia]

### Vendedor (Inertia-Shop)

{"id":1473073031,"email":"test_user_376526898@testuser.com","nickname":"TESTUSER376526898","site_status":"active","password":"AaBZ6IGUTe"}

Public Key: TEST-4e2723ca-d978-4371-88e1-c076f7a278e5

Access Token: TEST-8035805428972520-090810-051b690cc4dffd1f3b8fce3259184375-1473073031

### Comprador

{"id":1474338712,"email":"test_user_626865937@testuser.com","nickname":"TESTUSER626865937","site_status":"active","password":"aAjXEqz7ax"}

## Tarjetas de Prueba

### MasterCard

5120 6944 7061 6271 || 5474 9254 3267 0366

123

11/25

### Visa

4099 8333 6166 3634 || 4075 5957 1648 3764

123

11/25

### American Express

3743 781877 55283

1234

11/25

## Estado del Pago

#### APRO

Pago aprobado

#### OTHE

Rechazado por error general

#### CONT

Pendiente de pago

#### CALL

Rechazado con validación para autorizar

#### FUND

Rechazado por importe insuficiente

#### SECU

Rechazado por código de seguridad inválido

#### EXPI

Rechazado debido a un problema de fecha de vencimiento

#### FORM

Rechazado debido a un error de formulario
