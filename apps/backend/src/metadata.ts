/* eslint-disable */
export default async () => {
  const t = {
    ['./prof-ratings/entities/prof-rating.entity']: await import('./prof-ratings/entities/prof-rating.entity'),
    ['./subject-ratings/entities/subject-rating.entity']: await import(
      './subject-ratings/entities/subject-rating.entity'
    ),
    ['./users/entity/user.entity']: await import('./users/entity/user.entity'),
  };
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./prof-ratings/entities/prof-rating.entity'),
          {
            ProfRating: {
              id: { required: true, type: () => Number },
              desc: { required: true, type: () => String },
              isAnon: { required: true, type: () => Boolean },
              presentationRating: { required: true, type: () => Number, minimum: 1, maximum: 5 },
              knowledgeRating: { required: true, type: () => Number, minimum: 1, maximum: 5 },
              helpfulnessRating: { required: true, type: () => Number, minimum: 1, maximum: 5 },
              createdAt: { required: true, type: () => Date },
              updatedAt: { required: true, type: () => Date },
            },
          },
        ],
        [import('./prof-ratings/dto/create-prof-rating.dto'), { CreateProfRatingDto: {} }],
        [import('./prof-ratings/dto/update-prof-rating.dto'), { UpdateProfRatingDto: {} }],
        [
          import('./subject-ratings/entities/subject-rating.entity'),
          {
            SubjectRating: {
              id: { required: true, type: () => Number },
              desc: { required: true, type: () => String },
              isAnon: { required: true, type: () => Boolean },
              difficultyRating: { required: true, type: () => Number, minimum: 1, maximum: 5 },
              interestRating: { required: true, type: () => Number, minimum: 1, maximum: 5 },
              usefulnessRating: { required: true, type: () => Number, minimum: 1, maximum: 5 },
              createdAt: { required: true, type: () => Date },
              updatedAt: { required: true, type: () => Date },
            },
          },
        ],
        [import('./subject-ratings/dto/create-subject-rating.dto'), { CreateSubjectRatingDto: {} }],
        [import('./subject-ratings/dto/update-subject-rating.dto'), { UpdateSubjectRatingDto: {} }],
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
          import('./prof-ratings/prof-ratings.controller'),
          {
            ProfRatingsController: {
              create: { type: t['./prof-ratings/entities/prof-rating.entity'].ProfRating },
              findAll: { type: [t['./prof-ratings/entities/prof-rating.entity'].ProfRating] },
              findOne: { type: t['./prof-ratings/entities/prof-rating.entity'].ProfRating },
              update: { type: t['./prof-ratings/entities/prof-rating.entity'].ProfRating },
              remove: { type: t['./prof-ratings/entities/prof-rating.entity'].ProfRating },
            },
          },
        ],
        [
          import('./subject-ratings/subject-ratings.controller'),
          {
            SubjectRatingsController: {
              create: { type: t['./subject-ratings/entities/subject-rating.entity'].SubjectRating },
              findAll: { type: [t['./subject-ratings/entities/subject-rating.entity'].SubjectRating] },
              findOne: { type: t['./subject-ratings/entities/subject-rating.entity'].SubjectRating },
              update: { type: t['./subject-ratings/entities/subject-rating.entity'].SubjectRating },
              remove: { type: t['./subject-ratings/entities/subject-rating.entity'].SubjectRating },
            },
          },
        ],
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
