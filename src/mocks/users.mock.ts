import { User } from "../types/User";


export const mockUsers: User[] = [
  {
    id: 1,
    name: 'Bryan',
    lastname: 'Chemp',
    email: 'bryan_chemp@hotmail.com',
    phone: '+5524998429055',
    type: 'super-adm',
    password: '123bcoc123'
  },
  {
    id: 2,
    name: 'Bruno',
    lastname: 'Lima',
    email: 'bruno.lima@example.com',
    phone: '+55 21 92345-6789',
    type: 'adm',
    password: '123bcoc123'
  },
  {
    id: 3,
    name: 'Carla',
    lastname: 'Mendes',
    email: 'carla.mendes@example.com',
    phone: '+55 31 93456-7890',
    type: 'regular',
    password: '123bcoc123'
  },
];
