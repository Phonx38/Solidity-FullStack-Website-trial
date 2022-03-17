var contractAbi = [
  {
    anonymous: false,
    inputs: [
      {
        components: [
          {
            internalType: "enum Keyboards.KeyboardKind",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isPBT",
            type: "bool",
          },
          {
            internalType: "string",
            name: "filter",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        indexed: false,
        internalType: "struct Keyboards.Keyboard",
        name: "keyboard",
        type: "tuple",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "KeyboardCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TipSent",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "enum Keyboards.KeyboardKind",
        name: "_kind",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "_isPBT",
        type: "bool",
      },
      {
        internalType: "string",
        name: "_filter",
        type: "string",
      },
    ],
    name: "create",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "createdKeyboards",
    outputs: [
      {
        internalType: "enum Keyboards.KeyboardKind",
        name: "kind",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "isPBT",
        type: "bool",
      },
      {
        internalType: "string",
        name: "filter",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getKeyboards",
    outputs: [
      {
        components: [
          {
            internalType: "enum Keyboards.KeyboardKind",
            name: "kind",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "isPBT",
            type: "bool",
          },
          {
            internalType: "string",
            name: "filter",
            type: "string",
          },
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
        ],
        internalType: "struct Keyboards.Keyboard[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "tip",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

export default contractAbi;
