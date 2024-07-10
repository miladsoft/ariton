export const protocolDefinition = {
    protocol: 'http://chat-protocol.xyz',
    published: true,
    types: {
        thread: {
            schema: 'thread',
            dataFormats: ['application/json'],
        },
        message: {
            schema: 'message',
            dataFormats: ['application/json'],
        },
    },
    structure: {
        thread: {
            $actions: [
                {
                    who: 'anyone',
                    can: ['create', 'update'],
                },
                {
                    who: 'author',
                    of: 'thread',
                    can: ['read'],
                },
                {
                    who: 'recipient',
                    of: 'thread',
                    can: ['read'],
                },
            ],
            message: {
                $actions: [
                    {
                        who: 'anyone',
                        can: ['create', 'update'],
                    },
                    {
                        who: 'author',
                        of: 'thread/message',
                        can: ['read'],
                    },
                    {
                        who: 'recipient',
                        of: 'thread/message',
                        can: ['read'],
                    },
                ],
            },
        },
    },
};
