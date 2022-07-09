<?php 

//including needed classes

include_once("../classes/newproduct.php");
include_once("../classes/dvd.php");
include_once("../classes/furniture.php");
include_once("../classes/book.php");

$product=new NewProduct();

$product->connection();


$product->setSKU($_POST['sku']);

$product->setName($_POST['name']);

$product->setPrice($_POST['price']."$");

//Setting and geting selected type from #productType selector

$product->setType($_POST['productType']);
$type=$product->getType();

//Creating appropriate class with appropriately defined method for getting product attributes
// and then getting the attribute
$neededClass=ucfirst($type);

$newClass=new $neededClass;

$attribute=$newClass->getAttribute();

$sku=$product->getSKU();
$name=$product->getName();
$price=$product->getPrice();

//Adding data to database

$product->AddData($sku, $name, $price, $attribute);





