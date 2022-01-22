**Criar projeto em React**
`` yarn create react-app frontend --template=typescript ``

**Instalar cors no back-end, para permitir quais URLs poderam acessar o back-end**
`` yarn add cors ``

**Instalar dependencia do typescript com cors**
`` yarn add @types/cors -D ``

**Importar o cors no `` index.ts ``**
`` import cors from 'cors'; ``
**Antes das rotas**
`` app.use(cors()); ``

**Iniciar o yarn**
`` yarn start ``

**Instalar o axios para fazer chamadas API**
`` yarn add axios ``

**Criar uma pasta `` services `` dentro da pasta `` src ``**
**Criar um script `` api.ts `` de URL dentro da pasta `` services ``**
````
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3333'
})

export default api;
````

**Criar uma pasta dentro de `` src `` chamada `` components `` com um file chamado `` User.tsx ``**
````
import React from "react";

interface IUser {
    name: string;
    email: string;
}

interface Props {
    user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
    return (
        <div>
            <strong>Nome: </strong> {user.name} <br />
            <strong>E-mail: </strong> {user.email} <br />
        </div>
    );
};

export default User;
````
**Importar dentro do `` App.tsx ``**
````
import User from './components/User';
````
**Chamar no `` className="App" ``**
````
return (
    <div className="App">
      { users.map(user => <User key={user.email} user={user} />) }
    </div>
);
````
