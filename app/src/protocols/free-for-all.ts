export const protocolDefinition = {
    protocol: 'http://free-for-all-protocol.xyz',
    published: true,
    types: {
        post: {
            schema: 'eph',
            dataFormats: ['application/json'],
        },
        attachment: {},
    },
    structure: {
        post: {
            $actions: [
                {
                    who: 'anyone',
                    can: ['create', 'update', 'delete', 'prune', 'read', 'co-delete', 'co-prune'],
                },
            ],
            attachment: {
                $actions: [
                    {
                        who: 'anyone',
                        can: ['create', 'update', 'delete', 'read', 'co-delete'],
                    },
                ],
            },
        },
    },
};
