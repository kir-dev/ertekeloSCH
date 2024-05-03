/* eslint-disable */
export default async () => {
  const t = {
    ['./users/entity/user.entity']: await import('./users/entity/user.entity'),
  };
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./users/entity/user.entity'),
          {
            User: {
              authSchId: { required: true, type: () => String },
              email: { required: true, type: () => String },
              name: { required: true, type: () => String },
              role: { required: true, type: () => Object },
              major: { required: true, type: () => Object },
              desc: { required: true, type: () => String },
              createdAt: { required: true, type: () => Date },
              updatedAt: { required: true, type: () => Date },
            },
          },
        ],
        [import('./users/dto/create-use.dto'), { CreateUserDto: {} }],
        [import('./users/dto/update-user.dto'), { UpdateUserDto: {} }],
      ],
      controllers: [
        [import('./app.controller'), { AppController: { getHello: { type: String } } }],
        [
          import('./users/users.controller'),
          {
            UsersController: {
              create: { type: t['./users/entity/user.entity'].User },
              findAll: { type: [t['./users/entity/user.entity'].User] },
              findOne: { type: t['./users/entity/user.entity'].User },
              update: { type: t['./users/entity/user.entity'].User },
              remove: { type: t['./users/entity/user.entity'].User },
            },
          },
        ],
      ],
    },
  };
};