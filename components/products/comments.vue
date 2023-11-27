<template>
    <div class="pt-10 md:m-8">
        <h4 class="text-base font-medium text-default-800">Customer Review</h4>

        <div v-for="i in 6" :key="i" class="border-b mb-2 border-default-200 py-5">
            <div class="flex items-center mb-3">
                <img src="/assets/avatar1-25906796.png" class="h-12 w-12 rounded-full me-4">
                <div class="">
                    <div class="flex items-center gap-2 mb-2">
                        <h4 class="text-sm font-medium text-default-800">Jaylon Botosh</h4>
                        <i class="fa-solid fa-circle text-[5px] text-default-400"></i>
                        <h4 class="text-sm font-medium text-default-400">Just now</h4>
                    </div>
                    <div class="flex gap-1.5">
                        <span><i class="fa-solid fa-star text-base text-yellow-400"></i></span>
                        <span><i class="fa-solid fa-star text-base text-yellow-400"></i></span>
                        <span><i class="fa-solid fa-star text-base text-yellow-400"></i></span>
                        <span><i class="fa-solid fa-star text-base text-default-200"></i></span>
                        <span><i class="fa-solid fa-star text-base text-default-200"></i></span>
                    </div>
                </div>
            </div>
            <p class="text-default-600">At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi,
                id
                est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
        </div><!-- end card -->

    </div><!-- end py -->
</template>