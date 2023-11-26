<template>
    <div>
        <button
            class="hs-collapse-toggle py-4 inline-flex justify-between items-center gap-2 transition-all uppercase font-medium text-lg text-default-900 w-full open"
            data-hs-collapse="#all_categories" id="hs-basic-collapse" type="button" fdprocessedid="ndzo3">
            Category
        </button>
        <div class="hs-collapse w-full overflow-hidden transition-[height] duration-300 open" id="all_categories">
            <div class="relative flex flex-col space-y-4 mb-6">
                <div class="flex items-center">
                    <input
                        class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                        id="all" name="all" type="checkbox" checked="">
                    <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none" for="all">All</label>
                </div>
                <div class="flex items-center">
                    <input
                        class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                        id="wraps_roll" type="checkbox">
                    <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                        for="wraps_roll">Wraps</label>
                </div>
                <div class="flex items-center">
                    <input
                        class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                        id="noodles_bowl" type="checkbox">
                    <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                        for="noodles_bowl">Noodles</label>
                </div>
                <div class="flex items-center">
                    <input
                        class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                        id="burrito_bowls" name="burrito_bowls" type="checkbox">
                    <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                        for="burrito_bowls">Burrito Bowls</label>
                </div>
                <div class="flex items-center">
                    <input
                        class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                        id="thalis" name="thalis" type="checkbox">
                    <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                        for="thalis">Thalis</label>
                </div>
                <div class="flex items-center">
                    <input
                        class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                        id="smart_meals" name="smart_meals" type="checkbox">
                    <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                        for="smart_meals">Smart Meals</label>
                </div>
                <div class="flex items-center">
                    <input
                        class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                        id="salads" name="salads" type="checkbox">
                    <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                        for="salads">Salads</label>
                </div>
                <div class="flex items-center">
                    <input
                        class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                        id="beverages_desserts" name="beverages_desserts" type="checkbox">
                    <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                        for="beverages_desserts">Beverages &amp;
                        Desserts</label>
                </div>
                <div class="flex items-center">
                    <input
                        class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                        id="appetizers" name="appetizers" type="checkbox">
                    <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                        for="appetizers">Appetizers</label>
                </div>
                <div class="flex items-center">
                    <input
                        class="form-checkbox rounded-full text-primary border-default-400 bg-transparent w-5 h-5 focus:ring-0 focus:ring-transparent ring-offset-0 cursor-pointer"
                        id="burger_more" name="burger_more" type="checkbox">
                    <label class="ps-3 inline-flex items-center text-default-600 text-sm select-none"
                        for="burger_more">Burger &amp; More</label>
                </div>
            </div>
        </div>
    </div><!-- end category -->
</template>