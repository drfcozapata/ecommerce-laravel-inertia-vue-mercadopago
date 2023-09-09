<script setup>
// const cardForm = mp.cardForm({
//     amount: "100.5",
//     iframe: true,
//     form: {
//         id: "form-checkout",
//         cardNumber: {
//             id: "form-checkout__cardNumber",
//             placeholder: "Numero de tarjeta",
//         },
//         expirationDate: {
//             id: "form-checkout__expirationDate",
//             placeholder: "MM/YY",
//         },
//         securityCode: {
//             id: "form-checkout__securityCode",
//             placeholder: "Código de seguridad",
//         },
//         cardholderName: {
//             id: "form-checkout__cardholderName",
//             placeholder: "Titular de la tarjeta",
//         },
//         issuer: {
//             id: "form-checkout__issuer",
//             placeholder: "Banco emisor",
//         },
//         installments: {
//             id: "form-checkout__installments",
//             placeholder: "Cuotas",
//         },
//         cardholderEmail: {
//             id: "form-checkout__cardholderEmail",
//             placeholder: "E-mail",
//         },
//     },
//     callbacks: {
//         onFormMounted: (error) => {
//             if (error)
//                 return console.warn("Form Mounted handling error: ", error);
//             console.log("Form mounted");
//         },
//         onSubmit: (event) => {
//             event.preventDefault();

//             const {
//                 paymentMethodId: payment_method_id,
//                 issuerId: issuer_id,
//                 cardholderEmail: email,
//                 amount,
//                 token,
//                 installments,
//                 identificationNumber,
//                 identificationType,
//             } = cardForm.getCardFormData();

//             fetch("/process_payment", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     token,
//                     issuer_id,
//                     payment_method_id,
//                     transaction_amount: Number(amount),
//                     installments: Number(installments),
//                     description: "Descripción del producto",
//                     payer: {
//                         email,
//                         identification: {
//                             type: identificationType,
//                             number: identificationNumber,
//                         },
//                     },
//                 }),
//             });
//         },
//         onFetching: (resource) => {
//             console.log("Fetching resource: ", resource);

//             // Animate progress bar
//             const progressBar = document.querySelector(".progress-bar");
//             progressBar.removeAttribute("value");

//             return () => {
//                 progressBar.setAttribute("value", "0");
//             };
//         },
//     },
// });

// Agrega credenciales de SDK
const mp = new MercadoPago("{{ config('services.mercadopago.key') }}", {
    locale: "es-MX",
});

// Inicializa el Checkout
mp.checkout({
    preference: {
        id: "{{ $preference -> id }}",
    },
    render: {
        container: ".cho.container", // Indica dónde se mostrará el botón de pago
        label: "Pagar", //Ca,bia el texto del botón de pago (opcional)
    },
});
</script>

<template>
    <form id="form-checkout">
        <div id="form-checkout__cardNumber" class="container"></div>
        <div id="form-checkout__expirationDate" class="container"></div>
        <div id="form-checkout__securityCode" class="container"></div>
        <input type="text" id="form-checkout__cardholderName" />
        <select id="form-checkout__issuer"></select>
        <select id="form-checkout__installments"></select>
        <input type="email" id="form-checkout__cardholderEmail" />

        <button type="submit" id="form-checkout__submit">Pagar</button>
        <progress value="0" class="progress-bar">Cargando...</progress>
    </form>
</template>

<style lang="scss" scoped>
#form-checkout {
    display: flex;
    flex-direction: column;
    max-width: 600px;
}
.container {
    height: 18px;
    display: inline-block;
    border: 1px solid rgb(118, 118, 118);
    border-radius: 2px;
    padding: 1px 2px;
}
</style>
