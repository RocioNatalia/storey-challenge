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
  },
  {
    address: "Calle del Sol 456",
    nis: 1003,
    alias: "Casa de vacaciones",
    supplies: [
      {
        name: "Agua",
        address: "Calle del Sol 456",
        location: "Jardín",
        alias: "Llave de paso"
      },
      {
        name: "Electricidad",
        address: "Calle del Sol 456",
        location: "Sala",
        alias: "Interruptor principal"
      },
      {
        name: "Gas",
        address: "Calle del Sol 456",
        location: "Cocina",
        alias: "Medidor de gas"
      },
      {
        name: "Internet",
        address: "Calle del Sol 456",
        location: "Oficina",
        alias: "Router"
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
