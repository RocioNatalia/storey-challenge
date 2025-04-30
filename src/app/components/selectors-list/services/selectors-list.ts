export const list: Selector[] = [
  {
    address: "Calle Falsa 123",
    nis: 1001,
    alias: "Casa principal",
    supplies: [
      {
        name: "Agua",
        address: "Calle Falsa 123",
        location: "Cocina",
        alias: "Canilla principal"
      },
      {
        name: "Electricidad",
        address: "Calle Falsa 123",
        location: "Garage",
        alias: "Medidor eléctrico"
      }
    ]
  },
  {
    address: "Av. Siempre Viva 742",
    nis: 1002,
    alias: "Departamento",
    supplies: [
      {
        name: "Gas",
        address: "Av. Siempre Viva 742",
        location: "Balcón",
        alias: "Medidor de gas"
      }
    ]
  }
];


export interface Selector {
  address: string;
  nis: number;
  alias: string;
  supplies: Supply[];
}

export interface Supply {
  name: string;
  address: string;
  location: string;
  alias: string;
}
