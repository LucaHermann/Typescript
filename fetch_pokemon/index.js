"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://pokeapi.co/api/v2/pokemon/charizard';
axios_1["default"].get(url).then(function (res) {
    var pokemon = res.data;
    var id = pokemon.id;
    var name = pokemon.name;
    var base_experience = pokemon.base_experience;
    var primary_ability = pokemon.abilities[0].ability.name;
    var second_ability = pokemon.abilities[1].ability.name;
    var primary_type = pokemon.types[0].type.name;
    var second_type = pokemon.types[1].type.name;
    var base_hp_stats = pokemon.stats[0].base_stat;
    var base_attack_stats = pokemon.stats[1].base_stat;
    var base_defense_stats = pokemon.stats[2].base_stat;
    var base_special_attacks = pokemon.stats[3].base_stat;
    var base_special_defense = pokemon.stats[4].base_stat;
    var base_speed_stats = pokemon.stats[5].base_stat;
    LogPokemon(id, name, base_experience, primary_ability, second_ability, primary_type, second_type, base_hp_stats, base_attack_stats, base_defense_stats, base_special_attacks, base_special_defense, base_speed_stats);
})["catch"](function (err) { return console.log(err); });
var LogPokemon = function (id, name, base_experience, primary_ability, second_ability, primary_type, second_type, base_hp_stats, base_attack_stats, base_defense_stats, base_special_attacks, base_special_defense, base_speed_stats) {
    console.log("\n    ID: " + id + ".\n    Is the pokemon " + name + ",\n    he got " + base_experience + " base xp,\n    his primary ability is " + primary_ability + ",\n    and the second " + second_ability + ",\n    his primary type is " + primary_type + ",\n    and the second " + second_type + ".\n\n    " + name + " as :\n    HP: " + base_hp_stats + ",\n    Attack: " + base_attack_stats + ",\n    Defense: " + base_defense_stats + ",\n    Special Attack: " + base_special_attacks + ",\n    Special Defense: " + base_special_defense + ",\n    Speed: " + base_speed_stats + ".\n  ");
};
