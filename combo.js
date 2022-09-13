(async function () {
    let BUSINESS_ID = "6304aa113cb8eba9248eac8d";
    let CURRENCY = "BDT";
    const apiCall = async (url) => { try { let response = await fetch(url, { method: "get", headers: { "businessid": `${BUSINESS_ID}` } }); response = await response.json(); if (response.Error) { return console.log(response.Error) }; return response; } catch (e) { return }; };

    let loadComboProductsData = await apiCall(`https://api.soppiya.com/v2.1/widget/home/combo?limit=5`);
    // console.log("loadComboProductsData", loadComboProductsData);

    const comboOfferTitle = () => {
        document.querySelector(".s0505_combo_sell_title_text").innerHTML = `${loadComboProductsData.name}`;
    }
    comboOfferTitle();

    // display combo offer item
    const comboPackage = loadComboProductsData.comboPackages
    const showComboOfferItem = async (comboPackage) => {
        for (let i = 0; i < comboPackage.length; i++) {
            const singleProduct = comboPackage[i];
            console.log("singleProduct", singleProduct);
            let comboDisplayImg = `https://www.soppiya.com/media/images/${BUSINESS_ID}/combo/${loadComboProductsData._id}/${singleProduct.image}`;
            const s0505_combo_single_product = elementMaker("div", ["s0505_combo_single_product"]);
            const s0505_product_top_area = elementMaker("div", ["s0505_product_top_area"]);
            s0505_combo_single_product.appendChild(s0505_product_top_area);
            const s0505_product_bottom_area = elementMaker("div", ["s0505_product_bottom_area"]);
            s0505_combo_single_product.appendChild(s0505_product_bottom_area);

            const s0505_product_img_wrapper = elementMaker("div", ["s0505_product_img_wrapper"]);
            s0505_product_top_area.appendChild(s0505_product_img_wrapper);
            const productImage = elementMaker("img", ["product_img"]);
            setAttributes(productImage, { "src": `${comboDisplayImg}` });
            s0505_product_img_wrapper.appendChild(productImage);

            const s0505_product_badge_area_wrapper = elementMaker("div", ["s0505_product_badge_area_wrapper"]);
            s0505_product_top_area.appendChild(s0505_product_badge_area_wrapper);
            const s0505_wishlist_area_wrapper = elementMaker("div", ["s0505_wishlist_area_wrapper"]);
            s0505_wishlist_area_wrapper.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9.375"
                                            viewBox="0 0 10 9.375">
                                            <g id="Heart_Icon" data-name="Heart Icon" transform="translate(2 -2.5)">
                                                <g id="ICon" transform="translate(-1.995 1.583)" fill="none"
                                                    stroke-linecap="square">
                                                    <path
                                                        d="M7.286.917A2.664,2.664,0,0,0,5,2.3,2.664,2.664,0,0,0,2.7.917,2.841,2.841,0,0,0,0,3.869C0,6.705,4.56,9.982,4.754,10.121L5,10.292l.241-.171c.194-.138,4.757-3.415,4.757-6.252A2.841,2.841,0,0,0,7.286.917Z"
                                                        stroke="none" />
                                                    <path
                                                        d="M 2.718051433563232 1.917600631713867 C 1.728583335876465 1.977002143859863 0.9588022232055664 2.82913875579834 0.9964237213134766 3.83128833770752 L 0.9971237182617188 3.86879825592041 C 0.9971237182617188 5.470685482025146 3.273587703704834 7.747171401977539 4.993274211883545 9.054264068603516 C 5.425553321838379 8.721973419189453 6.208822250366211 8.088056564331055 6.972303867340088 7.307478427886963 C 8.275383949279785 5.975208282470703 8.993023872375488 4.753998279571533 8.993023872375488 3.86879825592041 L 8.99372386932373 3.83128833770752 C 9.031345367431641 2.82913875579834 8.261564254760742 1.977002143859863 7.272096633911133 1.917600631713867 C 6.689487934112549 1.937135696411133 6.154672145843506 2.265909194946289 5.871083736419678 2.780988693237305 L 4.995073795318604 4.372078418731689 L 4.119063854217529 2.780988693237305 C 3.835475444793701 2.265909194946289 3.300659656524658 1.937135696411133 2.718051433563232 1.917600631713867 M 2.704343795776367 0.9169988632202148 C 3.658963680267334 0.9319286346435547 4.53274393081665 1.458958625793457 4.995073795318604 2.298687934875488 C 5.457403659820557 1.458958625793457 6.331183910369873 0.9319286346435547 7.28580379486084 0.9169988632202148 C 8.842193603515625 0.9849786758422852 10.0517635345459 2.303828239440918 9.993023872375488 3.86879825592041 C 9.993023872375488 6.705458164215088 5.429893970489502 9.982578277587891 5.235813617706299 10.12074851989746 L 4.995073795318604 10.2919979095459 L 4.75434398651123 10.12074851989746 C 4.560253620147705 9.981748580932617 -0.00287628173828125 6.705458164215088 -0.00287628173828125 3.86879825592041 C -0.06161594390869141 2.303828239440918 1.147953987121582 0.9849786758422852 2.704343795776367 0.9169988632202148 Z"
                                                        stroke="none" fill="#1e272e" />
                                                </g>
                                            </g>
                                        </svg>
            `;
            s0505_product_badge_area_wrapper.appendChild(s0505_wishlist_area_wrapper);

            const s0505_product_name_wrapper = elementMaker("div", ["s0505_product_name_wrapper"]);
            s0505_product_bottom_area.appendChild(s0505_product_name_wrapper);
            const s0505_product_name = elementMaker("span", ["s0505_product_name"]);
            s0505_product_name.textContent = `${singleProduct.name}`;
            s0505_product_name_wrapper.appendChild(s0505_product_name);
            const s0505_product_price_wrapper = elementMaker("div", ["s0505_product_price_wrapper"]);
            s0505_product_bottom_area.appendChild(s0505_product_price_wrapper);
            const s0505_product_new_price_wrapper = elementMaker("div", ["s0505_product_new_price_wrapper"]);
            s0505_product_price_wrapper.appendChild(s0505_product_new_price_wrapper);
            const s0505_new_price_text = elementMaker("span", ["s0505_new_price_text"]);
            s0505_new_price_text.textContent = `${singleProduct.price}`;
            s0505_product_new_price_wrapper.appendChild(s0505_new_price_text);

            document.querySelector(".s0505_combo_home_all_product_wrapper").appendChild(s0505_combo_single_product);
            const comboOffername = singleProduct.name;

            s0505_combo_single_product.addEventListener("click", async function (e) {
                e.stopPropagation();
                const comboItem = singleProduct.items;
                console.log("single item price", singleProduct.price);
                const comboDiscuntPrice = singleProduct.price;
                await displayComboPopup(comboItem, comboOffername, comboDiscuntPrice);
                document.querySelector(".s0505_combo_offer_main_popup_section").classList.add("s0505_active_combo_popup");
            });
        }

    };
    await showComboOfferItem(comboPackage);

    async function displayComboPopup(comboItem, comboOffername, comboDiscuntPrice) {
        const s0505_popup_main_wrapper = elementMaker("div", ["s0505_popup_main_wrapper"]);
        const s0505_popup_top_area = elementMaker("div", ["s0505_popup_top_area"]);
        s0505_popup_main_wrapper.appendChild(s0505_popup_top_area);

        const s0505_combo_popup = elementMaker("div", ["s0505_combo_popup"]);
        s0505_popup_main_wrapper.appendChild(s0505_combo_popup);

        const s0505_popup_bottom_area_wrapper = elementMaker("div", ["s0505_popup_bottom_area_wrapper"]);
        s0505_popup_main_wrapper.appendChild(s0505_popup_bottom_area_wrapper);

        const s0505_combo_offer_name_wrapper = elementMaker("div", ["s0505_combo_offer_name_wrapper"]);
        s0505_popup_top_area.appendChild(s0505_combo_offer_name_wrapper);
        const s0505_combo_offer_name = elementMaker("span", ["s0505_combo_offer_name"]);
        s0505_combo_offer_name.innerText = `${comboOffername}`;
        s0505_combo_offer_name_wrapper.appendChild(s0505_combo_offer_name);

        const s0505_popup_close_btn_wrapper = elementMaker("div", ["s0505_popup_close_btn_wrapper"], "s0505_popup_close_btn_wrapper_id");
        s0505_popup_close_btn_wrapper.innerHTML = `
        <svg id="cross_2_" data-name="cross (2)" xmlns="http://www.w3.org/2000/svg" width="9" height="9"
                            viewBox="0 0 9 9">
                            <path id="cross_2_2" data-name="cross (2)"
                                d="M8.939.731,8.147-.061,4.439,3.648.731-.061-.061.731,3.648,4.439-.061,8.147l.792.792L4.439,5.23,8.147,8.939l.792-.792L5.23,4.439Z"
                                transform="translate(0.061 0.061)" fill="#1e272e" />
                        </svg>
        `;
        s0505_popup_top_area.appendChild(s0505_popup_close_btn_wrapper);

        const s0505_combo_popup_all_product_wrapper = elementMaker("div", ["s0505_combo_popup_all_product_wrapper"]);
        s0505_combo_popup.appendChild(s0505_combo_popup_all_product_wrapper);

        for (let i = 0; i < comboItem.length; i++) {
            const singleProduct = comboItem[i];
            console.log("combo item", singleProduct);
            showTotalOldPrice(singleProduct.price);
            let comboDisplayImg = `https://www.soppiya.com/media/images/${BUSINESS_ID}/item/${singleProduct.itemId}/${singleProduct.image}`;
            const s0505_combo_single_product = elementMaker("div", ["s0505_combo_single_product"]);
            const s0505_product_top_area = elementMaker("div", ["s0505_product_top_area"]);
            s0505_combo_single_product.appendChild(s0505_product_top_area);
            const s0505_product_bottom_area = elementMaker("div", ["s0505_product_bottom_area"]);
            s0505_combo_single_product.appendChild(s0505_product_bottom_area);

            const s0505_product_img_wrapper = elementMaker("div", ["s0505_product_img_wrapper"]);
            s0505_product_top_area.appendChild(s0505_product_img_wrapper);
            const productImage = elementMaker("img", ["product_img"]);
            setAttributes(productImage, { "src": `${comboDisplayImg}` });
            s0505_product_img_wrapper.appendChild(productImage);

            const s0505_product_badge_area_wrapper = elementMaker("div", ["s0505_product_badge_area_wrapper"]);
            s0505_product_top_area.appendChild(s0505_product_badge_area_wrapper);
            const s0505_wishlist_area_wrapper = elementMaker("div", ["s0505_wishlist_area_wrapper"]);
            s0505_wishlist_area_wrapper.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="9.375"
                                            viewBox="0 0 10 9.375">
                                            <g id="Heart_Icon" data-name="Heart Icon" transform="translate(2 -2.5)">
                                                <g id="ICon" transform="translate(-1.995 1.583)" fill="none"
                                                    stroke-linecap="square">
                                                    <path
                                                        d="M7.286.917A2.664,2.664,0,0,0,5,2.3,2.664,2.664,0,0,0,2.7.917,2.841,2.841,0,0,0,0,3.869C0,6.705,4.56,9.982,4.754,10.121L5,10.292l.241-.171c.194-.138,4.757-3.415,4.757-6.252A2.841,2.841,0,0,0,7.286.917Z"
                                                        stroke="none" />
                                                    <path
                                                        d="M 2.718051433563232 1.917600631713867 C 1.728583335876465 1.977002143859863 0.9588022232055664 2.82913875579834 0.9964237213134766 3.83128833770752 L 0.9971237182617188 3.86879825592041 C 0.9971237182617188 5.470685482025146 3.273587703704834 7.747171401977539 4.993274211883545 9.054264068603516 C 5.425553321838379 8.721973419189453 6.208822250366211 8.088056564331055 6.972303867340088 7.307478427886963 C 8.275383949279785 5.975208282470703 8.993023872375488 4.753998279571533 8.993023872375488 3.86879825592041 L 8.99372386932373 3.83128833770752 C 9.031345367431641 2.82913875579834 8.261564254760742 1.977002143859863 7.272096633911133 1.917600631713867 C 6.689487934112549 1.937135696411133 6.154672145843506 2.265909194946289 5.871083736419678 2.780988693237305 L 4.995073795318604 4.372078418731689 L 4.119063854217529 2.780988693237305 C 3.835475444793701 2.265909194946289 3.300659656524658 1.937135696411133 2.718051433563232 1.917600631713867 M 2.704343795776367 0.9169988632202148 C 3.658963680267334 0.9319286346435547 4.53274393081665 1.458958625793457 4.995073795318604 2.298687934875488 C 5.457403659820557 1.458958625793457 6.331183910369873 0.9319286346435547 7.28580379486084 0.9169988632202148 C 8.842193603515625 0.9849786758422852 10.0517635345459 2.303828239440918 9.993023872375488 3.86879825592041 C 9.993023872375488 6.705458164215088 5.429893970489502 9.982578277587891 5.235813617706299 10.12074851989746 L 4.995073795318604 10.2919979095459 L 4.75434398651123 10.12074851989746 C 4.560253620147705 9.981748580932617 -0.00287628173828125 6.705458164215088 -0.00287628173828125 3.86879825592041 C -0.06161594390869141 2.303828239440918 1.147953987121582 0.9849786758422852 2.704343795776367 0.9169988632202148 Z"
                                                        stroke="none" fill="#1e272e" />
                                                </g>
                                            </g>
                                        </svg>
            `;
            s0505_product_badge_area_wrapper.appendChild(s0505_wishlist_area_wrapper);

            const s0505_product_name_wrapper = elementMaker("div", ["s0505_product_name_wrapper"]);
            s0505_product_bottom_area.appendChild(s0505_product_name_wrapper);
            const s0505_product_name = elementMaker("span", ["s0505_product_name"]);
            s0505_product_name.textContent = `${singleProduct.name}`;
            s0505_product_name_wrapper.appendChild(s0505_product_name);
            const s0505_product_price_wrapper = elementMaker("div", ["s0505_product_price_wrapper"]);
            s0505_product_bottom_area.appendChild(s0505_product_price_wrapper);
            const s0505_product_new_price_wrapper = elementMaker("div", ["s0505_product_new_price_wrapper"]);
            s0505_product_price_wrapper.appendChild(s0505_product_new_price_wrapper);
            const s0505_new_price_text = elementMaker("span", ["s0505_new_price_text"]);
            s0505_new_price_text.textContent = `${singleProduct.price}`;
            s0505_product_new_price_wrapper.appendChild(s0505_new_price_text);
            s0505_combo_popup_all_product_wrapper.appendChild(s0505_combo_single_product);
        }

        const s0505_product_price_wrapper = elementMaker("div", ["s0505_product_price_wrapper"]);
        s0505_popup_bottom_area_wrapper.appendChild(s0505_product_price_wrapper);
        const s0505_product_old_price_wrapper = elementMaker("div", ["s0505_product_old_price_wrapper"]);
        s0505_product_price_wrapper.appendChild(s0505_product_old_price_wrapper);
        const s0501_old_price_text = elementMaker("span", ["s0501_old_price_text", "s0505_delete_product"]);


        function showTotalOldPrice(productPrice) {
            console.log("productPrice", productPrice);
            let sum = 0;
            let totalProductPrice = [];
            totalProductPrice.push(productPrice);
            console.log("totalProductPrice", totalProductPrice);
        }


        s0501_old_price_text.innerText = `BDT 6500`;
        s0505_product_old_price_wrapper.appendChild(s0501_old_price_text);
        const s0505_product_new_price_wrapper = elementMaker("div", ["s0505_product_new_price_wrapper"]);
        s0505_product_price_wrapper.appendChild(s0505_product_new_price_wrapper);
        const s0505_new_price_text = elementMaker("span", ["s0505_new_price_text"]);
        s0505_new_price_text.innerText = `${CURRENCY} ${comboDiscuntPrice}`;
        s0505_product_new_price_wrapper.appendChild(s0505_new_price_text);

        const s0505_btn_wrapper = elementMaker("div", ["s0505_btn_wrapper"]);
        s0505_popup_bottom_area_wrapper.appendChild(s0505_btn_wrapper);
        const s0505_add_to_cart_btn = elementMaker("button", ["s0505_add_to_cart_btn"]);
        s0505_add_to_cart_btn.innerText = `Add to cart`;
        s0505_btn_wrapper.appendChild(s0505_add_to_cart_btn);




        const parentDiv = document.getElementById("s0505_combo_offer_main_popup_section_id");
        if (parentDiv.hasChildNodes()) {
            parentDiv.textContent = '';
            document.getElementById("s0505_combo_offer_main_popup_section_id").appendChild(s0505_popup_main_wrapper);
        }
        popupClose(s0505_popup_close_btn_wrapper);
    };
    function popupClose(s0505_popup_close_btn_wrapper) {
        s0505_popup_close_btn_wrapper.addEventListener("click", function () {
            document.querySelector(".s0505_combo_offer_main_popup_section").classList.remove("s0505_active_combo_popup");
        });
    };

    function elementMaker(name, className, id) {
        try {
            let element = document.createElement(name);
            className && (element.className = className.join(" "));
            id && (element.id = id);
            return element;
        } catch (err) {
            console.log(err.message);
        };
    };

    function setAttributes(elementName, allAttributes) {
        for (let key in allAttributes) {
            elementName.setAttribute(key, allAttributes[key]);
        };
    };

})();