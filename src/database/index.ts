import { Connection, createConnection, getConnectionOptions } from 'typeorm';

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions();

    //Vai pegar todas as informações do nosso config
    //e vai alterar só o database para um database de teste
    //senão, vai usar o database mesmo (verificando a variável de ambiente do ormconfig.json)
    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' ? "./src/database/database.test.sqlite" : defaultOptions.database
        })
    );
}