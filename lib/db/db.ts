

import { LegacyCirqlStateless, select } from 'cirql';

export const db = new LegacyCirqlStateless({
    connection: {
        endpoint: String(process.env.DB_URL),
        namespace: 'test',
        database: 'test',
    },
    credentials: {
        user: 'root',
        pass: 'root',
    }
});


