import './App.css';
import { useState } from 'react';
const App = () => {

const[team, setTeam] = useState([])
const[money, setMoney] = useState(100)
const[zombieFighters, isZombieFighters] = useState([
  {
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://via.placeholder.com/150/92c952',
  },
  {
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://via.placeholder.com/150/771796',
  },
  {
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://via.placeholder.com/150/24f355',
  },
  {
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/d32776',
  },
  {
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://via.placeholder.com/150/1ee8a4',
  },
  {
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://via.placeholder.com/150/66b7d2',
  },
  {
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://via.placeholder.com/150/56acb2',
  },
  {
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://via.placeholder.com/150/8985dc',
  },
  {
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://via.placeholder.com/150/392537',
  },
  {
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://via.placeholder.com/150/602b9e',
  },
])
const[totalStrength, setStrength] = useState(0)
const[totalAgility, setAgility]= useState(0)
const handleAddFighter = (newFighter) => {
  
  if (money >= newFighter.price) {
    const newBalance = money - newFighter.price
    const teamStrength = totalStrength + newFighter.strength
    const teamAgility = totalAgility + newFighter.agility
    setMoney(newBalance)
    setStrength(teamStrength)
    setAgility(teamAgility)
    setTeam([...team, newFighter])
   } else {
    console.log("not enough money")
  }
}
const handleRemoveFighter = (existingFighter) => {
  const fighterExists = team.some((fighter) => fighter.id === existingFighter.id)
  console.log(team)
  if (fighterExists) {
    const newTeam = team.filter((fighter) => fighter.id !== existingFighter.id)
    const teamStrength = totalStrength - existingFighter.strength
    const teamAgility = totalAgility - existingFighter.agility
    const newBalance = money + existingFighter.price
    setMoney(newBalance)
    setTeam(newTeam)
    setAgility(teamAgility)
    setStrength(teamStrength)
} else {
  console.log("nothing happened")
}
}
  return (
    <>
    <h1>Zombie Fighters</h1>

    <h3>Money={money}</h3>
    <div>
    {zombieFighters.map((fighter) => (
      
      <ul key={fighter.name}>
      <img src={fighter.img} />
      <li>{fighter.name}</li>
      <li>Price: {fighter.price}</li>
      <li>Strength: {fighter.strength}</li>
      <li>Agility: {fighter.agility}</li>
      <button onClick={() => {handleAddFighter(fighter)}}>Add</button>
    </ul>
      
    ))}</div>

    <h2>Team Strength: {totalStrength}</h2>
    <h2>Team Agility: {totalAgility}</h2>
    {team.length === 0 ? (
      <h4>Pick some team members!</h4>
    ) : (
      <div>
      {team.map((fighter) => (
     
        
      <ul key={fighter.name}>
      <li>{fighter.img}</li>
      <li>{fighter.name}</li>
      <li>Price: {fighter.price}</li>
      <li>Strength: {fighter.strength}</li>
      <li>Agility: {fighter.agility}</li>
      <button onClick={() => {handleRemoveFighter(fighter)}}>Remove</button>
      </ul>
      
    ))}</div>
  )}
</>)
}
export default App
