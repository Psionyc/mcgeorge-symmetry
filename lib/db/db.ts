import { LegacyCirqlStateless, select } from 'cirql';

export const db = new LegacyCirqlStateless({
    connection: {
        endpoint: 'https://surrealdb-deployment-muddy-silence-7285.fly.dev/',
        namespace: 'test',
        database: 'test',
    },
    credentials: {
        user: 'root',
        pass: 'root',
    }
});


