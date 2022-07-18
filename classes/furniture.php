<?php 

//Class Furniture is created to get attribute when opetion 'Furniture' is selected in #productType
//It implements Type interface which is created to help with getting attribute of selected type

include_once("../interfaces/type.php");

class Furniture implements Type
{
    public $height;
    public $width;
    public $length;

    public function getAttribute()
    {
          $this->height=$_POST['height'];
          $this->width=$_POST['width'];
          $this->length=$_POST['length'];

        return "Dimensions: ".$this->height."x".$this->width."x".$this->length;
    }
}

