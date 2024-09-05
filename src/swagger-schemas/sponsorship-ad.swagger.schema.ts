export const sponsorshipAdSwaggerSchema = {
  CreateSponsorshipAdDto: {
    type: 'object',
    properties: {
      user: {
        type: 'string',
        example: '6603dbc57c3f573889f14ae8',
        description: 'User ID of the creator',
      },
      title: {
        type: 'string',
        example: 'Exciting Sponsorship Opportunity',
        description: 'Title of the sponsorship ad',
      },
      description: {
        type: 'string',
        example: 'Get your brand seen by millions with this unique opportunity.',
        description: 'Description of the sponsorship ad',
      },
      category: {
        type: 'string',
        example: 'Sports',
        description: 'Category of the sponsorship ad',
      },
      amount: {
        type: 'number',
        example: 500,
        description: 'Amount to be paid for the sponsorship ad',
      },
      quantity: {
        type: 'number',
        example: 10,
        description: 'Quantity of the sponsorship ad available',
      },
      image: {
        type: 'string',
        example: 'https://example.com/image.jpg',
        description: 'Image URL for the sponsorship ad',
      },
    },
    required: ['user', 'title', 'description', 'category', 'amount', 'quantity', 'image'],
  },
  UpdateSponsorshipAdDto: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        example: 'Updated Sponsorship Opportunity',
        description: 'Updated title of the sponsorship ad',
      },
      description: {
        type: 'string',
        example: 'Get your brand seen by millions with this updated opportunity.',
        description: 'Updated description of the sponsorship ad',
      },
      category: {
        type: 'string',
        example: 'Music',
        description: 'Updated category of the sponsorship ad',
      },
      amount: {
        type: 'number',
        example: 600,
        description: 'Updated amount to be paid for the sponsorship ad',
      },
      quantity: {
        type: 'number',
        example: 8,
        description: 'Updated quantity of the sponsorship ad available',
      },
      image: {
        type: 'string',
        example: 'https://example.com/updated-image.jpg',
        description: 'Updated image URL for the sponsorship ad',
      },
    },
  },
  GetSponsorshipAdDto: {
    type: 'object',
    properties: {
      user: {
        type: 'string',
        example: '6603dbc57c3f573889f14ae8',
        description: 'User ID of the creator (optional)',
      },
      title: {
        type: 'string',
        example: 'Exciting Sponsorship Opportunity',
        description: 'Title of the sponsorship ad (optional)',
      },
      description: {
        type: 'string',
        example: 'Get your brand seen by millions with this unique opportunity.',
        description: 'Description of the sponsorship ad (optional)',
      },
      category: {
        type: 'string',
        example: 'Sports',
        description: 'Category of the sponsorship ad (optional)',
      },
      amount: {
        type: 'number',
        example: 500,
        description: 'Amount to be paid for the sponsorship ad (optional)',
      },
      quantity: {
        type: 'number',
        example: 10,
        description: 'Quantity of the sponsorship ad available (optional)',
      },
      image: {
        type: 'string',
        example: 'https://example.com/image.jpg',
        description: 'Image URL for the sponsorship ad (optional)',
      },
    },
  },
  GetSponsorshipAdWithPaginationDto: {
    type: 'object',
    properties: {
      user: {
        type: 'string',
        example: '6603dbc57c3f573889f14ae8',
        description: 'User ID of the creator (optional)',
      },
      title: {
        type: 'string',
        example: 'Exciting Sponsorship Opportunity',
        description: 'Title of the sponsorship ad (optional)',
      },
      description: {
        type: 'string',
        example: 'Get your brand seen by millions with this unique opportunity.',
        description: 'Description of the sponsorship ad (optional)',
      },
      category: {
        type: 'string',
        example: 'Sports',
        description: 'Category of the sponsorship ad (optional)',
      },
      amount: {
        type: 'number',
        example: 500,
        description: 'Amount to be paid for the sponsorship ad (optional)',
      },
      quantity: {
        type: 'number',
        example: 10,
        description: 'Quantity of the sponsorship ad available (optional)',
      },
      image: {
        type: 'string',
        example: 'https://example.com/image.jpg',
        description: 'Image URL for the sponsorship ad (optional)',
      },
      pagination_size: {
        type: 'number',
        example: 10,
        description: 'Number of sponsorship ads to return per page',
      },
      pagination_page: {
        type: 'number',
        example: 1,
        description: 'Page number to retrieve',
      },
    },
  },
  SponsorshipAd: {
    type: 'object',
    properties: {
      _id: {
        type: 'string',
        example: '6603dbc57c3f573889f14ae8',
        description: 'ID of the sponsorship ad',
      },
      user: {
        type: 'string',
        example: '6603dbc57c3f573889f14ae8',
        description: 'User ID of the creator',
      },
      title: {
        type: 'string',
        example: 'Exciting Sponsorship Opportunity',
        description: 'Title of the sponsorship ad',
      },
      description: {
        type: 'string',
        example: 'Get your brand seen by millions with this unique opportunity.',
        description: 'Description of the sponsorship ad',
      },
      category: {
        type: 'string',
        example: 'Sports',
        description: 'Category of the sponsorship ad',
      },
      amount: {
        type: 'number',
        example: 500,
        description: 'Amount to be paid for the sponsorship ad',
      },
      quantity: {
        type: 'number',
        example: 10,
        description: 'Quantity of the sponsorship ad available',
      },
      image: {
        type: 'string',
        example: 'https://example.com/image.jpg',
        description: 'Image URL for the sponsorship ad',
      },
    },
  },
};
