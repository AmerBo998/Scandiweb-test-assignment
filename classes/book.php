<?php 

//Class Book is created to get attribute when opetion 'Book' is selected in #productType
//It implements Type interface which is created to help with getting attribute of selected type
include_once("../interfaces/type.php");

class Book implements Type
{
    public $weight;

    public function getAttribute()
    {
        $this->weight = $_POST['weight'];

        return  "Weight: ".$this->weight."KG";
    }
}
