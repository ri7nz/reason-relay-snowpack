// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as ReasonRelay from "reason-relay/src/ReasonRelay.bs.js";

var Types = {};

var fragmentConverter = ({"__root":{"pokemons":{"n":""},"pokemons_items":{"n":"","na":"","f":""},"pokemons_offset":{"n":""},"pokemons_nextOffset":{"n":""}}});

function convertFragment(v) {
  return ReasonRelay._convertObj(v, fragmentConverter, undefined, undefined);
}

var Internal = {
  fragmentConverter: fragmentConverter,
  fragmentConverterMap: undefined,
  convertFragment: convertFragment
};

var Utils = {};

var node = ({
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "after"
    },
    {
      "kind": "RootArgument",
      "name": "first"
    },
    {
      "kind": "RootArgument",
      "name": "offset"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Pokemons_fragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "after",
          "variableName": "after"
        },
        {
          "kind": "Variable",
          "name": "first",
          "variableName": "first"
        },
        {
          "kind": "Variable",
          "name": "offset",
          "variableName": "offset"
        }
      ],
      "concreteType": "PokemonList",
      "kind": "LinkedField",
      "name": "pokemons",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Pokemon",
          "kind": "LinkedField",
          "name": "items",
          "plural": true,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "Pokemon_fragment"
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "first",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "offset",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "nextOffset",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
});

export {
  Types ,
  Internal ,
  Utils ,
  node ,
  
}
/* fragmentConverter Not a pure module */
