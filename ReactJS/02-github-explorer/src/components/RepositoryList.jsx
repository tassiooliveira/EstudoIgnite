import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositorys.scss';
import { useState, useEffect} from "react";



export function RepositoryList(){

    const [respositories, setRepositories] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/tassiooliveira/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    },[])

    console.log(respositories)

    return (
        <section className='repository-list'>
            <h1>Lista de repositórios</h1>

            <ul>
                {respositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository}/>
                })}
               
              
            </ul>
        </section>
    )
}