import axios from 'axios'

const url = 'https://pokeapi.co/api/v2/pokemon/charizard';

interface IFetchCharizard {
  id : number;
  name : string;
  base_experience : number;
  abilities: [
    {
      ability: {
        name: string;
      }
    },
    {
      ability: {
        name: string;
      }
    }
  ]
  types: [
    {
      slots: number;
      type: {
        name: string;
      }
    },
    {
      slots: number;
      type: {
        name: string;
      }
    }
  ]
  stats: [
    {
      base_stat: number;
      stat: {
        name: string;
      }
    },
    {
      base_stat: number;
      stat: {
        name: string;
      }
    },
    {
      base_stat: number;
      stat: {
        name: string;
      }
    },
    {
      base_stat: number;
      stat: {
        name: string;
      }
    },
    {
      base_stat: number;
      stat: {
        name: string;
      }
    },
    {
      base_stat: number;
      stat: {
        name: string;
      }
    }
  ]
}

axios.get(url).then((res) => {
  const pokemon = res.data as IFetchCharizard;

  const id = pokemon.id;
  const name = pokemon.name;
  const base_experience = pokemon.base_experience;
  const primary_ability = pokemon.abilities[0].ability.name;
  const second_ability = pokemon.abilities[1].ability.name;
  const primary_type = pokemon.types[0].type.name;
  const second_type = pokemon.types[1].type.name;
  const base_hp_stats = pokemon.stats[0].base_stat;
  const base_attack_stats = pokemon.stats[1].base_stat;
  const base_defense_stats = pokemon.stats[2].base_stat;
  const base_special_attacks = pokemon.stats[3].base_stat;
  const base_special_defense = pokemon.stats[4].base_stat;
  const base_speed_stats = pokemon.stats[5].base_stat;


  LogPokemon(
    id, 
    name, 
    base_experience, 
    primary_ability, 
    second_ability, 
    primary_type, 
    second_type,
    base_hp_stats,
    base_attack_stats,
    base_defense_stats,
    base_special_attacks,
    base_special_defense,
    base_speed_stats);
}).catch(err => console.log(err));

const LogPokemon = (
  id: number, 
  name: string, 
  base_experience: number, 
  primary_ability: string, 
  second_ability: string, 
  primary_type: string, 
  second_type: string,
  base_hp_stats: number,
  base_attack_stats: number,
  base_defense_stats: number,
  base_special_attacks: number,
  base_special_defense: number,
  base_speed_stats: number,
  ) => {
  console.log(`
    ID: ${id}.
    Is the pokemon ${name},
    he got ${base_experience} base xp,
    his primary ability is ${primary_ability},
    and the second ${second_ability},
    his primary type is ${primary_type},
    and the second ${second_type}.

    ${name} as :
    HP: ${base_hp_stats},
    Attack: ${base_attack_stats},
    Defense: ${base_defense_stats},
    Special Attack: ${base_special_attacks},
    Special Defense: ${base_special_defense},
    Speed: ${base_speed_stats}.
  `);
}
