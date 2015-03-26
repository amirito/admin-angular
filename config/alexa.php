<?php
$url="http://rayweb.ir";
$xml = simplexml_load_file('http://data.alexa.com/data?cli=10&dat=snbamz&url='.$url);
$rank=isset($xml->SD[1]->COUNTRY)?$xml->SD[1]->COUNTRY->attributes()->RANK:0;
$web=(string)$xml->SD[0]->attributes()->HOST;
echo $rank;