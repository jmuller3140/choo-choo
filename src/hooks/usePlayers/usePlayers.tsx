import react from 'react';
import { PlayerEntity } from '../../entities';
import create from 'zustand';

const initializePlayers = () => {
  const result = new Map()
  for (let i = 0; i < 2; i++) {
    const player = new PlayerEntity();
    result.set(player.id, player)
  }
  return result;
}

const usePlayersStore = create((set) => ({
  players: initializePlayers(),
  addPlayer: () => set((state) => {
    const newPlayer = new PlayerEntity()
    const newPlayers = new Map(state.players);
    newPlayers.set(newPlayer.id, newPlayer)
    return {
      players: newPlayers
    }
  }),
  deletePlayer: (id) => set((state) => {
    const newPlayers = new Map(state.players)
    newPlayers.delete(id);
    return ({
      players: newPlayers
    })
  }),
  changeName: (id, newName) => set((state) => {
    const newPlayers: any = new Map(state.players);
    const player: PlayerEntity = newPlayers.get(id);
    const newObject = Object.create(PlayerEntity.prototype);
    player.changeName(newName);
    const newPlayer = Object.assign(newObject, player)
    newPlayers.set(id, newPlayer)
    return {
      players: newPlayers
    }
  }),
  changeColor: (id) => set((state) => {
    const newPlayers: any = new Map(state.players);
    const player: PlayerEntity = newPlayers.get(id);
    player.changeColor();
    const newObject = Object.create(PlayerEntity.prototype);
    const newPlayer = Object.assign(newObject, player);
    newPlayers.set(id, newPlayer)
    return {
      players: newPlayers
    }
  }),
  changeHometown: (id, hometown) => set((state) => {
    const newPlayers: any = new Map(state.players);
    const player: PlayerEntity = newPlayers.get(id);
    player.changeHometown(hometown);
    const newObject = Object.create(PlayerEntity.prototype);
    const newPlayer = Object.assign(newObject, player);
    newPlayers.set(id, newPlayer)
    return {
      players: newPlayers
    }
  }),
  changeDestination: (id, destination) => set((state) => {
    const newPlayers: any = new Map(state.players);
    const player: PlayerEntity = newPlayers.get(id);
    player.changeCurrentDestination(destination);
    const newObject = Object.create(PlayerEntity.prototype);
    const newPlayer = Object.assign(newObject, player);
    newPlayers.set(id, newPlayer);
    return {
      players: newPlayers
    }
  }),
  changeLastDestination: (id, lastDestination) => set((state) => {
    const newPlayers: any = new Map(state.players);
    const player: PlayerEntity = newPlayers.get(id);
    player.changeLastDestination(lastDestination);
    const newObject = Object.create(PlayerEntity.prototype);
    const newPlayer = Object.assign(newObject, player);
    newPlayers.set(id, newPlayer)
    return {
      players: newPlayers
    }
  }),
}))

export default usePlayersStore;