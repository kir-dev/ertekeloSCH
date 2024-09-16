import { Department, Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Drop the tables before seeding the database
  await prisma.prof.deleteMany();
  await prisma.profRating.deleteMany();
  await prisma.spec.deleteMany();
  await prisma.specRating.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.subjectRating.deleteMany();
  await prisma.department.deleteMany();
  await prisma.teaches.deleteMany();
  await prisma.profRatingVote.deleteMany();
  await prisma.subjectRatingVote.deleteMany();

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

  await prisma.department.createMany({ data: departments });

  const subjects: Prisma.SubjectCreateInput[] = [
    {
      name: 'Analízis 1 informatikusoknak',
      subjectCode: 'TE90AX21',
      desc: '',
      department: { connect: { id: 11 } },
    },
    {
      name: 'Analízis 2 informatikusoknak',
      subjectCode: 'TE90AX57',
      desc: '',
      department: { connect: { id: 11 } },
    },
    {
      name: 'Valószínűségszámítás és statisztika',
      subjectCode: 'VISZAB04',
      desc: '',
      department: { connect: { id: 7 } },
    },
    {
      name: 'Bevezetés a számításelméletbe 1',
      subjectCode: 'VISZAA06',
      desc: '',
      department: { connect: { id: 7 } },
    },
    {
      name: 'Bevezetés a számításelméletbe 2',
      subjectCode: 'VISZAA04',
      desc: '',
      department: { connect: { id: 7 } },
    },
    {
      name: 'Kódolástechnika',
      subjectCode: 'VIHIAB04',
      desc: '',
      department: { connect: { id: 4 } },
    },
    {
      name: 'Algoritmuselmélet',
      subjectCode: 'VISZAA08',
      desc: '',
      department: { connect: { id: 7 } },
    },
    {
      name: 'Fizika alapismeretek',
      subjectCode: 'TE11AX52',
      desc: '',
      department: { connect: { id: 12 } },
    },
    {
      name: 'Fizika i',
      subjectCode: 'TE11AX53',
      desc: '',
      department: { connect: { id: 12 } },
    },
  ];

  for (const subject of subjects) {
    await prisma.subject.create({ data: subject });
  }

  const anal1 = await prisma.subject.findFirst({ where: { subjectCode: 'TE90AX21' } });
  const anal2 = await prisma.subject.findFirst({ where: { subjectCode: 'TE90AX57' } });
  const bsz1 = await prisma.subject.findFirst({ where: { subjectCode: 'VISZAA06' } });
  const bsz2 = await prisma.subject.findFirst({ where: { subjectCode: 'VISZAA04' } });
  const profs: Prisma.ProfCreateInput[] = [
    {
      name: 'Dr. Tasnádi Tamás',
      title: 'ASST_PROF',
      department: { connect: { id: 11 } },
      teaches: { create: [{ subjectId: anal1.id }, { subjectId: anal2.id }] },
    },
    {
      name: 'Dr. Szeszlér Dávid',
      title: 'ASST_PROF',
      department: { connect: { id: 7 } },
      teaches: { create: [{ subjectId: bsz1.id }, { subjectId: bsz2.id }] },
    },
  ];

  for (const prof of profs) {
    await prisma.prof.create({ data: prof });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
