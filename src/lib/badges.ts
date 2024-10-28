export const POST_BADGES = {
    FIRST_POST: {
      id: 'first_post',
      name: 'Premier Article',
      threshold: 1,
    },
    REGULAR_CONTRIBUTOR: {
      id: 'regular_contributor',
      name: 'Contributeur Régulier',
      threshold: 10,
    },
    EXPERT_CONTRIBUTOR: {
      id: 'expert_contributor',
      name: 'Expert Contributeur',
      threshold: 50,
    },
    MASTER_CONTRIBUTOR: {
      id: 'master_contributor',
      name: 'Maître Contributeur',
      threshold: 100,
    },
  } as const;