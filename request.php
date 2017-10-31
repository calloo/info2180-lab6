<?php

// accept a term (keyword)
// respond with a value

$query = $_GET['q'];
$definition = [
    "definition" => "A statement of the exact meaning of a word, especially in a dictionary.",
    "bar" => "A place that sells alcholic beverages",
    "ajax" => "Technique which involves the use of javascript and xml (or JSON)",
    "html" => "The standard markup language for creating web pages and web applications.",
    "css" => "A style sheet language used for describing the presentation of a document written in a markup language.",
    "javascript" => "A lightweight, interpreted programming language with first-class functions that adds interactivity to your website.",
    "php" => "A server-side scripting language, and a powerful tool for making dynamic and interactive websites",
];

if(!empty($query)){
    print "<h3>" . strtoupper($query) . "</h3>";
    print "<p>" . $definition[$query] . "</p>";
}else if (!empty($_GET["all"]) && $_GET["all"] == true){
    header('Content-Type: text/xml');
    
    $dataset = new SimpleXMLElement("<?xml version=\"1.0\" encoding=\"UTF-8\"?><entries></entries>");
    
    foreach($definition as $term => $meaning){
        $defined = $dataset->addChild("definition", $meaning);
        $defined->addAttribute("name", $term);
        $defined->addAttribute("author", " Yannick Lyn Fatt");
        
    }
    
    echo $dataset->asXML();
}