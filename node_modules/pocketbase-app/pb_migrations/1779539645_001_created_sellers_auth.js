/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
    let collection = new Collection({
        type: "auth",
        name: "sellers",
        listRule: "id = @request.auth.id",
        viewRule: "id = @request.auth.id",
        createRule: null,
        updateRule: "id = @request.auth.id",
        deleteRule: "id = @request.auth.id",
        authAlert: { enabled: false },
    })

    try {
        app.save(collection)
    } catch (e) {
        if (e.message.includes("Collection name must be unique")) {
            console.log("Collection already exists, skipping")
            return
        }
        throw e
    }
}, (app) => {
    try {
        let collection = app.findCollectionByNameOrId("sellers")
        app.delete(collection)
    } catch (e) {
        if (e.message.includes("no rows in result set")) {
            console.log("Collection not found, skipping revert");
            return;
        }
        throw e;
    }
})