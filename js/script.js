
//Function that displays appropriate attrbiute form for selected product

function change()
{
    document.getElementById("DVD").style.display="none";
    document.getElementById("Furniture").style.display="none";
    document.getElementById("Book").style.display="none";
    
    var value=document.getElementById("productType").value;
    document.getElementById(value).style.display="block";
}


//Defining 'pattern' rule to prevent user from inserting wrong value

$("#product_form").rules("add", { pattern: "[a-zA-Z0-9]+" });
 
//jQuery validation is used to check if input is correct.
//If input is incorrect, it will prevent form from submitting and show suitable warning message.

$(document).ready(function() 
{
    $("#product_form").validate({
     
    rules:
    {
    sku : 
    {
        required: true,
        pattern:/[a-zA-Z0-9]+/
    },

    name: 
    {
        required: true,
        pattern:/[a-zA-Z0-9]+/
    },

    price: 
    {
        required: true,
        pattern:/[0-9]+/
    },

    productType:
    {
        required:true

    },

    size:
    {
        required: true,
        pattern:/[a-zA-Z0-9]+/
    },

    width:
    {
        required: true,
        pattern:/[a-zA-Z0-9]+/
    },

    height:
    {
        required: true,
        pattern:/[a-zA-Z0-9]+/
    },

    length:
    {
        required: true,
        pattern:/[a-zA-Z0-9]+/
    },

    weight:
    {
        required: true,
        pattern:/[a-zA-Z0-9]+/
    }
    
    },

    errorPlacement: function($error, $element) 
    {
        $error.appendTo($element.closest("li"));
      },

    messages : 
    {
        sku: 
        {
            required: "Please, submit required data",
            pattern: "Please, provide the data of indicated type"
        },
        name: {
            required: "Please, submit required data",
            pattern: "Please, provide the data of indicated type"
        },
        price: 
        {
            required: "Please, submit required data",
            pattern: "Please, provide the data of indicated type"
        },

        productType:
        {
            required: "Please, select product type."
        },

        size: 
        {
            required: "Please, submit required data",
            pattern: "Please, provide the data of indicated type"
        },

        width: 
        {
            required: "Please, submit required data",
            pattern: "Please, provide the data of indicated type"
        },

        height: 
        {
            required: "Please, submit required data",
            pattern: "Please, provide the data of indicated type"
        },
        length: 
        {
            required: "Please, submit required data",
            pattern: "Please, provide the data of indicated type"
        },
        weight: 
        {
            required: "Please, submit required data",
            pattern: "Please, provide the data of indicated type"
        },
    },
  });
});