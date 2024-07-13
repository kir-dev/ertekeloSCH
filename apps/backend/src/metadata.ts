/* eslint-disable */
export default async () => {
  const t = {
    ['./users/entity/user.entity']: await import('./users/entity/user.entity'),
    ['./prof-ratings/entities/prof-rating.entity']: await import('./prof-ratings/entities/prof-rating.entity'),
    ['./subject-ratings/entities/subject-rating.entity']: await import(
      './subject-ratings/entities/subject-rating.entity'
    ),
    ['./subjects/entities/subject.entity']: await import('./subjects/entities/subject.entity'),
  };
  return {
    '@nestjs/swagger': {
      models: [
        [
          import('./users/entity/user.entity'),
          {
            User: {
              authSchId: { required: true, type: () => String },
              name: { required: true, type: () => String },
              role: { required: true, type: () => Object },
              major: { required: false, type: () => Object },
              desc: { required: false, type: () => String },
              createdAt: { required: true, type: () => Date },
              updatedAt: { required: true, type: () => Date },
            },
          },
        ],
        [import('./users/dto/create-use.dto'), { CreateUserDto: {} }],
        [import('./users/dto/update-user.dto'), { UpdateUserDto: {} }],
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
              profId: { required: true, type: () => String },
              subjectRatingId: { required: true, type: () => Number },
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
          import('./subjects/entities/subject.entity'),
          {
            Subject: {
              id: { required: true, type: () => Number },
              name: { required: true, type: () => String },
              desc: { required: true, type: () => String },
              subjectCode: { required: true, type: () => String },
              departmentId: { required: true, type: () => Number },
              specId: { required: false, type: () => Number },
            },
          },
        ],
        [import('./subjects/dto/create-subject.dto'), { CreateSubjectDto: {} }],
        [import('./subjects/dto/update-subject.dto'), { UpdateSubjectDto: {} }],
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
        [
          import('./auth/auth.controller'),
          {
            AuthController: {
              login: { description: 'Redirects to the authsch login page' },
              oauthRedirect: {
                description: 'Endpoint for authsch to call after login\nRedirects to the frontend with the jwt token',
              },
              me: { description: 'Endpoint for jwt token validation' },
            },
          },
        ],
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
          import('./subjects/subjects.controller'),
          {
            SubjectsController: {
              create: { type: t['./subjects/entities/subject.entity'].Subject },
              findAll: { type: [t['./subjects/entities/subject.entity'].Subject] },
              search: { type: [t['./subjects/entities/subject.entity'].Subject] },
              findOne: { type: t['./subjects/entities/subject.entity'].Subject },
            },
          },
        ],
      ],
    },
  };
};
