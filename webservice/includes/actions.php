<?php
/**
 * @return array
 */
function getGames()
{
    return [
        [
            "id" => 1,
            "name" => "Assassin's Creed Odyssey",
            "console" => "Playstation 4",
            "rating" => 9,
        ],
        [
            "id" => 2,
            "name" => "Assassin's Creed Origins",
            "console" => "Playstation 4",
            "rating" => 9,
        ],
        [
            "id" => 3,
            "name" => "Ark: Survival Evolved",
            "console" => "Playstation 4",
            "rating" => 9,
        ],
        [
            "id" => 4,
            "name" => "Assassin's Creed Origins",
            "console" => "Playstation 4",
            "rating" => 9,
        ],
        [
            "id" => 5,
            "name" => "Assassin's Creed Origins",
            "console" => "Playstation 4",
            "rating" => 9,
        ],
        [
            "id" => 6,
            "name" => "Assassin's Creed Origins",
            "console" => "Playstation 4",
            "rating" => 9,
        ],
        [
            "id" => 7,
            "name" => "Hamburgers with blue cheese",
            "kitchen" => "Italian",
            "rating" => 8,
            "imageTag" => "hamburger",
        ],
        [
            "id" => 8,
            "name" => "Ice lollies",
            "kitchen" => "Eastern",
            "rating" => 8,
            "imageTag" => "ice lolly",
        ],
        [
            "id" => 9,
            "name" => "Chicken with morel velouté",
            "kitchen" => "French",
            "rating" => 8.2,
            "imageTag" => "chicken wings",
        ],
        [
            "id" => 10,
            "name" => "Spare ribs",
            "kitchen" => "Oosters",
            "rating" => 8.3,
            "imageTag" => "spare ribs",
        ]
    ];
}

/**
 * @param $id
 * @return mixed
 */
function getGameDetails($id)
{
    $tags = [
        1 => [
            "info" => "It recounts a secret mythological history set during the Peloponnesian War, which was fought between the city-states of Greece. The player takes on the role of a mercenary and is able to fight for the Delian League, led by Athens, or the Peloponnesian League, led by Sparta.",
            "tags" => ['Mode: Single player', 'Type: Action Role-playing', 'year: 2018']
        ],
        2 => [
            "info" => "Assassin's Creed® Origins is a new beginning. Ancient Egypt, a land of majesty and intrigue, is disappearing in a ruthless fight for power. Unveil dark secrets and forgotten myths as you go back to the one founding moment: The Origins of the Assassin's Brotherhood.",
            "tags" => ['Mode: Single player', 'Type: Action Role-playing', 'year: 2017']
        ],
        3 => [
            "recipe" => "As a man or woman stranded, naked, freezing, and starving on the unforgiving shores of a mysterious island called ARK, use your skill and cunning to kill or tame and ride the plethora of leviathan dinosaurs and other primeval creatures roaming the land. Hunt, harvest resources, craft items, grow crops, research technologies, and build shelters to withstand the elements and store valuables, all while teaming up with (or preying upon) hundreds of other players to survive, dominate... and escape!",
            "tags" => ['Mode: Single player & Multiplayer', 'Type: Action / Adventure', 'year: 2015']
        ],
        4 => [
            "recipe" => "Sprinkle the crumble topping over the fruit and reheat the dish on the stove. When the apple mixture starts to bubble, place the dish in the oven and bake for 12-14 minutes, until the topping is a nice golden yellow. Remove from oven and serve warm.",
            "tags" => ['Vegetarian', 'Dessert']
        ],
        5 => [
            "recipe" => "Heat the butter in a frying pan until foamy, then fold in the beets and fry in the butter for a few minutes, stirring regularly, until shiny. Deglaze them with the balsamic vinegar and let it reduce to a viscous sauce. Serve the beets warm or at room temperature.",
            "tags" => ['Meat', 'Side dish']
        ],
        6 => [
            "recipe" => "Maak een braadslee goed heet op het fornuis. Doe er een scheut olie in en bak het lamsgebraad 10 minuten tot het rondom bruin is. Zet 45-55 minuten in de voorverwarmde oven, afhankelijk van het gewicht en hoe rosé je het wilt hebben. Haal uit de oven en laat rusten.",
            "tags" => ['Meat', 'Main dish']
        ],
        7 => [
            "recipe" => "Verhit een grillpan of steek de barbecue aan. Maak met vochtige handen 6 mooie hamburgers. Bestrijk of besprenkel ze met een beetje olijfolie en rooster ze 7-10 minuten; draai ze halverwege om. Ze horen in het midden nog een klein beetje rosé te zijn.",
            "tags" => ['Meat', 'Main dish']
        ],
        8 => [
            "recipe" => "Laat de ijslolly's voor het serveren 5 minuten op temperatuur komen alvorens de vorm of cup te verwijderen, of houd ze even onder warm water zodat de ijslolly's de vorm loslaten.",
            "tags" => ['Vegetarian', 'Snack']
        ],
        9 => [
            "recipe" => "Snijd het borstvlees zorgvuldig van het karkas en dep de filets droog met keukenpapier. Verhit een beetje olijfolie in een koekenpan met antiaanbaklaag en bak de kipfilets 3-4 minuten aan elke kant, tot het vel knapperig en goudbruin is. Voeg wat klontjes boter toe en bedruip het vlees tijdens de laatste paar minuten om uitdrogen te voorkomen.",
            "tags" => ['Poultry', 'Main dish']
        ],
        10 => [
            "recipe" => "Voeg knoflook, gember, chilivlokken, szechuanpeperkorrels, steranijs en honing toe en bak nog 2 minuten tot de honing begint te karamelliseren. Voeg sojasaus, rijstazijn en rijstwijn toe, breng aan de kook en laat 1 minuut zachtjes koken. Proef en breng op smaak, voeg zo nodig wat extra azijn toe. Voeg lente-ui en bouillon toe en breng aan de kook. Laat in 1 uur mals worden in de voorverwarmde oven en keer de ribbetjes halverwege de kooktijd.",
            "tags" => ['Meat', 'Main dish']
        ],
    ];

    return $tags[$id];
}
