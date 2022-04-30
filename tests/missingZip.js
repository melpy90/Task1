module.exports = {

    "Purchase an item missing the zip code": function(browser) {

        browser
            .url("https://www.saucedemo.com/")
            //browser.click("#user-name")
            .setValue("#user-name","standard_user")
            .assert.valueEquals("#user-name", "standard_user")
            .setValue("#password","secret_sauce")
            .assert.valueEquals("#password", "secret_sauce")
            .click("#login-button")
            .assert.containsText(".title", "PRODUCTS")
            .click("#add-to-cart-sauce-labs-backpack.btn.btn_primary.btn_small.btn_inventory")
            .assert.containsText("#remove-sauce-labs-backpack", "REMOVE")
            .click(".shopping_cart_link")
            .click("#checkout")
            .setValue("#first-name", "Mario")
            .setValue("#last-name", "Rossi")
            .setValue("#postal-code", "")
            .assert.visible("#continue")
            .click("#continue")
            .assert.textContains(".error-message-container > h3:nth-child(1)", "Error: Postal Code is required")

    }



}