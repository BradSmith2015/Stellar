<?php
use User;
use UserError;

try{
$obj = new User;
$obj->login("test@gmail.com", "test") //email and password;

}
catch (UserError $e){
  echo $e->getMessage(); //errors returned from the system
}
