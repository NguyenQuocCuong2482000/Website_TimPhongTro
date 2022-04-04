
$(function () {
    $("#txtSearchString").autocomplete({
        minLength: 1,
        source: function (request, response) {
            $.ajax({
                url: "/Home/GetSearchValue",
                data: "{'searchString':'" + request.term + "'}",
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                success: function (data) {
                    response($.map(data, function (item) {
                        return item.ProductName /*+ "<br>" + item.Images + "<br>" + item.Address*/;
                    }))},
            });
        },
        //select: function (event, ui) {

        //    $("#project-icon").attr("src", "Content/Images/" + ui.item.Images);

        //    return false;
        //}

    });
});
