function Controller() {
    function closeWindow() {
        $.movie.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.movie = Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "movie"
    });
    $.addTopLevelView($.__views.movie);
    $.__views.header = Ti.UI.createView({
        top: 0,
        height: "42dp",
        width: Ti.UI.FILL,
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "0%",
                y: "100%"
            },
            colors: [ {
                color: "#000",
                offset: 0
            }, {
                color: "#ccc",
                offset: 1
            } ]
        },
        id: "header"
    });
    $.__views.movie.add($.__views.header);
    $.__views.__alloyId4 = Ti.UI.createView({
        height: "48dp",
        width: "3dp",
        top: "1dp",
        left: "60dp",
        backgroundGradient: {
            type: "linear",
            startPoint: {
                x: "0%",
                y: "0%"
            },
            endPoint: {
                x: "100%",
                y: "0%"
            },
            colors: [ {
                color: "#666",
                offset: 0
            }, {
                color: "#ccc",
                offset: 0.5
            }, {
                color: "#666",
                offset: 1
            } ]
        },
        id: "__alloyId4"
    });
    $.__views.header.add($.__views.__alloyId4);
    $.__views.addView = Ti.UI.createView({
        id: "addView"
    });
    $.__views.movie.add($.__views.addView);
    closeWindow ? $.__views.addView.addEventListener("click", closeWindow) : __defers["$.__views.addView!click!closeWindow"] = !0;
    $.__views.addImage = Ti.UI.createImageView({
        top: "1dp",
        width: "60dp",
        height: "40dp",
        left: "0dp",
        color: "#fff",
        backgroundColor: "transparent",
        image: "/Android_BackButton_1.png",
        touchEnabled: !1,
        id: "addImage"
    });
    $.__views.addView.add($.__views.addImage);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var todos = Alloy.Collections.todo;
    $.movie.open();
    __defers["$.__views.addView!click!closeWindow"] && $.__views.addView.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, $model;

module.exports = Controller;