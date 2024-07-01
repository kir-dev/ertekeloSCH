import { Department, PrismaClient } from '@prisma/client';

function main() {
  const prisma = new PrismaClient();
  const departments: Department[] = [
    { id: 1, name: 'AUT', desc: 'Automatizálási és Alkalmazott Informatikai Tanszék' },
    { id: 2, name: 'ETT', desc: 'Elektronikai Technológia Tanszék' },
    { id: 3, name: 'EET', desc: 'Elektronikus Eszközök Tanszéke' },
    { id: 4, name: 'HIT', desc: 'Hálózati Rendszerek és Szolgáltatások Tanszék' },
    { id: 5, name: 'IIT', desc: 'Irányítástechnika és Informatika Tanszék' },
    { id: 6, name: 'MIT', desc: 'Méréstechnika és Információs Rendszerek Tanszék' },
    { id: 7, name: 'CS', desc: 'Számítástudományi és Információelméleti Tanszék' },
    { id: 8, name: 'HVT', desc: 'Szélessávú Hírközlés és Villamosságtan Tanszék' },
    { id: 9, name: 'TMIT', desc: 'Távközlési és Médiainformatikai Tanszék' },
    { id: 10, name: 'VET', desc: 'Villamos Energetika Tanszék' },
    { id: 11, name: 'MATH', desc: 'Matematikai Intézet' },
    { id: 12, name: 'PHYS', desc: 'Fizika Tanszék' },
  ];
  prisma.department.createMany({ data: departments });
}

main();
