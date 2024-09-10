"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sponsorshipApplicationSwaggerSchema = void 0;
exports.sponsorshipApplicationSwaggerSchema = {
    CreateSponsorshipApplicationDto: {
        type: 'object',
        properties: {
            sponsorshipAd: {
                type: 'string',
                example: '6603dbc57c3f573889f14ae8',
                description: 'The sponsorship ad ID related to the pitch',
            },
            email: {
                type: 'string',
                example: 'example@example.com',
                description: 'Email address of the user making the pitch',
            },
            pitchDeck: {
                type: 'string',
                example: 'https://example.com/pitchdeck.pdf',
                description: 'URL to the pitch deck document',
            },
            //   verified: {
            //     type: 'boolean',
            //     example: false,
            //     description: 'Whether the pitch has been verified or not',
            //   },
        },
        required: ['sponsorshipAd', 'email', 'pitchDeck'],
    },
    UpdateSponsorshipApplicationDto: {
        type: 'object',
        properties: {
            //   sponsorshipAd: {
            //     type: 'string',
            //     description: 'The sponsorship ad ID related to the pitch',
            //   },
            email: {
                type: 'string',
                description: 'Email address of the user making the pitch',
            },
            pitchDeck: {
                type: 'string',
                description: 'URL to the pitch deck document',
            },
            verified: {
                type: 'boolean',
                description: 'Whether the pitch has been verified or not',
            },
        },
    },
    GetSponsorshipApplicationWithPaginationDto: {
        type: 'object',
        properties: {
            email: {
                type: 'string',
                description: 'Email address of the user making the pitch',
            },
            pitchDeck: {
                type: 'string',
                description: 'URL to the pitch deck document',
            },
            verified: {
                type: 'boolean',
                description: 'Whether the pitch has been verified or not',
            },
            pagination_size: {
                type: 'integer',
                example: 10,
                description: 'Number of items per page',
            },
            pagination_page: {
                type: 'integer',
                example: 1,
                description: 'Page number to retrieve',
            },
        },
    },
    SponsorshipApplication: {
        type: 'object',
        properties: {
            _id: {
                type: 'string',
                description: 'ID of the pitch',
            },
            sponsorshipAd: {
                type: 'string',
                description: 'The sponsorship ad ID related to the pitch',
            },
            email: {
                type: 'string',
                description: 'Email address of the user making the pitch',
            },
            pitchDeck: {
                type: 'string',
                description: 'URL to the pitch deck document',
            },
            verified: {
                type: 'boolean',
                description: 'Whether the pitch has been verified or not',
            },
        },
    },
};
