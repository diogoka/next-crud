import { useEffect, useState } from "react"
import CollectionClient from "../backend/db/CollectionClient"
import Client from "../core/Client"
import ClientRepository from "../core/ClientRepository"
import useTableOrForm from "./useTableOrForm"

export default function useClients(){
    
const repo: ClientRepository = new CollectionClient()

  const {
      visibleTable, 
      showTable, 
      showForm
    } = useTableOrForm()
  
  const[client, setClient] = useState<Client>(Client.empty)
  const[clients, setClients] = useState<Client[]>([])

  useEffect(getAll,[])
  
  function getAll() {
    repo.getAllClients().then(clients =>{
        setClients(clients)
        showTable()
    })
  }

  function selectClient(client:Client){
    setClient(client)
    showForm()
  }

  async function deleteClient(client:Client){
      await repo.delete(client)
      getAll()
  }

  async function saveClient(client: Client){
    await repo.save(client)
    getAll()
  }

  function newClient(){
    setClient(Client.empty())
    showForm()
  }

  return{
      client,
      clients,      
      newClient,
      saveClient,
      deleteClient,
      selectClient,
      getAll,
      visibleTable,
      showTable
  }
}