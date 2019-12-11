<script>clientAddItemToCart({prodName: "Chocolate Dip", prodDesc: 'Great donut', prodPrice: '25.00', prodQty: '1'});</script>

('.add').click(function () {
    var target = $('.quantity', this.parentNode)[0];
    target.value = +target.value + 1;
    updateTotal();
});
('.sub').click(function () {
    var target = $('.quantity', this.parentNode)[0];
    if (target.value > 1) {
        target.value = +target.value - 1;
    }
    updateTotal();
});

function quantityChange(sender) {
    var quantity = $(sender).val();

    console.log(quantity);
}
;

var updateTotal = function () {

    var sum = 0;
    //Add each product price to total
    $(".product").each(function () {
        var price = $(this).data('price');
        var quantity = $('.quantityTxt', this).val();
        //Total for one product
        var subtotal = price * quantity;
        //Round to 2 decimal places.
        subtotal = subtotal.toFixed(2);
        //Display subtotal in HTML element
        $('.productTotal', this).html(subtotal);
    });
    // total
    $('.productTotal').each(function () {
        sum += Number($(this).html());
    });
    $('#sum').html(sum.toFixed(2));
};

//Update total when quantity changes
$(".product").keyup(function () {
    updateTotal();
});

//Update totals when page first loads
updateTotal();

// set this from local
$('span.productTotal').each(function () {
    $(this).before("&euro;");
});

// unit price
$('.product').each(function () {
    var $price = $(this).parents("div").data('price');
    $(this).before($price);
});
