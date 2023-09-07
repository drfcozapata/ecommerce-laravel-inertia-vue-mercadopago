<script setup>
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-vue3";

const props = defineProps({
    product: Object,
});

const imagesJpg = [
    { id: 1, img: "boots1.jpg" },
    { id: 2, img: "boots2.jpg" },
    { id: 3, img: "shoes1.jpg" },
    { id: 4, img: "shoes2.jpg" },
    { id: 5, img: "tshirt1.jpg" },
    { id: 6, img: "tshirt2.jpg" },
    { id: 7, img: "tshirt3.jpg" },
    { id: 8, img: "tshirt4.jpg" },
    { id: 9, img: "tshirt5.jpg" },
    { id: 10, img: "tshirt6.jpg" },
    { id: 11, img: "hat1.jpg" },
    { id: 12, img: "hat2.jpg" },
];

const inWhishlist = (id) => {
    return usePage().props.value.whishlist.find((product) => {
        return product.id === id;
    })
        ? true
        : false;
};

const toggleWhishlist = () => {
    Inertia.post(route("whishlist.toggle", { id: props.product.id }));
};

// const productImage = () => {
//     let preview = props.product.images.find((image) => {
//         return image.is_preview;
//     });

//     return "/images/" + preview.url;
// };

const productImageJpg = () => {
    let preview = imagesJpg.find(
        (imageJpg) => parseInt(imageJpg.id) === parseInt(props.product.id)
    );

    return "/images/" + preview.img;
};
</script>

<template>
    <div class="flex flex-col items-center justify-center h-72 relative border">
        <div class="h-2/3 w-full px-3">
            <Link :href="route('product.show', { slug: product.slug })">
                <img
                    :src="productImageJpg()"
                    alt="product_image"
                    class="w-full h-full object-contain"
                />
            </Link>
        </div>

        <div class="h-1/3 w-full p-2 pt-6">
            <div class="flex items-start justify-between space-x-4">
                <div>
                    <span class="block text-[13px] font-medium leading-4">{{
                        product.name
                    }}</span>
                    <span class="block text-xs text-zinc-500">{{
                        product.category.name
                    }}</span>
                </div>
                <span class="whitespace-nowrap text-[13px]"
                    ><span class="font-medium text-c-green-600">$</span
                    >{{ product.price }}</span
                >
            </div>

            <div class="absolute top-2 left-2">
                <form @submit.prevent="toggleWhishlist()">
                    <button type="submit">
                        <svg
                            :class="
                                inWhishlist(product.id)
                                    ? 'text-red-500'
                                    : 'text-zinc-500 hover:text-red-500'
                            "
                            class="w-6 h-6 flex-none"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

/* Line 55
<img
    :src="productImage()"
    alt="product_image"
    class="w-full h-full object-cover"
/>
*/
