import { useState } from 'react';
import './App.css';

function App() {

  const groups = [
    ['Catar', 'Ecuador', 'Senegal', 'Holanda', 0, 'A'],
    ['Inglaterra', 'Iran', 'Estados Unidos', 'Ganador A', 1, 'B'],
    ['Argentina', 'Arabia Saudita', 'Mexico', 'Polonia', 2, 'C'],
    ['Francia', 'Peru', 'Dinamarca', 'Tunez', 3, 'D'],
    ['España', 'Ganador B', 'Alemania', 'Japon', 4, 'E'],
    ['Belgica', 'Canada', 'Marruecos', 'Croacia', 5, 'F'],
    ['Brasil', 'Serbia', 'Suiza', 'Camerun', 6, 'G'],
    ['Portugal', 'Ghana', 'Uruguay', 'Corea del Sur', 7, 'H'],
  ];
  const [firstPlace, setFirstPlace] = useState([]);
  const [secondPlace, setSecondPlace] = useState([]);
  const [quarterfinals, setQuarterfinals] = useState([]);
  const [semifinal, setSemifinal] = useState([]);
  const [final, setFinal] = useState([]);
  const [winnerState, setWinnerState] = useState([]);
  const [isChecked1stPlace, setIsChecked1stPlace] = useState([
    [false, false, false, false],   // Group A
    [false, false, false, false],  // Group B
    [false, false, false, false],  // Group C
    [false, false, false, false],    // Group D
    [false, false, false, false],    // Group E
    [false, false, false, false],  // Group F
    [false, false, false, false],   // Group G
    [false, false, false, false],   // Group H
  ]);
  const [isChecked2stPlace, setIsChecked2stPlace] = useState([
    [false, false, false, false],   // Group A
    [false, false, false, false],  // Group B
    [false, false, false, false],  // Group C
    [false, false, false, false],    // Group D
    [false, false, false, false],    // Group E
    [false, false, false, false],  // Group F
    [false, false, false, false],   // Group G
    [false, false, false, false],   // Group H
  ]);
  const [isChecked3stPlace, setIsChecked3stPlace] = useState([
    [false, false, false, false],   // Group A
    [false, false, false, false],  // Group B
    [false, false, false, false],  // Group C
    [false, false, false, false],    // Group D
    [false, false, false, false],    // Group E
    [false, false, false, false],  // Group F
    [false, false, false, false],   // Group G
    [false, false, false, false],   // Group H
  ])
  const [isChecked4stPlace, setIsChecked4stPlace] = useState([
    [false, false, false, false],   // Group A
    [false, false, false, false],  // Group B
    [false, false, false, false],  // Group C
    [false, false, false, false],    // Group D
    [false, false, false, false],    // Group E
    [false, false, false, false],  // Group F
    [false, false, false, false],   // Group G
    [false, false, false, false],   // Group H
  ])
  const firstPlaceInTheGroups = [
    ['A1', 'A11', 'A111', 'A1111'],
    ['B1', 'B11', 'B111', 'B1111'],
    ['C1', 'C11', 'C111', 'C1111'],
    ['D1', 'D11', 'D111', 'D1111'],
    ['E1', 'E11', 'E111', 'E1111'],
    ['F1', 'F11', 'F111', 'F1111'],
    ['G1', 'G11', 'G111', 'G1111'],
    ['H1', 'H11', 'H111', 'H1111'],
  ];
  const secondPlaceInTheGroups = [
    ['A2', 'A22', 'A222', 'A2222'],
    ['B2', 'B22', 'B222', 'B2222'],
    ['C2', 'C22', 'C222', 'C2222'],
    ['D2', 'D22', 'D222', 'D2222'],
    ['E2', 'E22', 'E222', 'E2222'],
    ['F2', 'F22', 'F222', 'F2222'],
    ['G2', 'G22', 'G222', 'G2222'],
    ['H2', 'H22', 'H222', 'H2222'],
  ];
  const thirdPlaceInTheGroups = [
    ['A3', 'A33', 'A333', 'A3333'],
    ['B3', 'B33', 'B333', 'B3333'],
    ['C3', 'C33', 'C333', 'C3333'],
    ['D3', 'D33', 'D333', 'D3333'],
    ['E3', 'E33', 'E333', 'E3333'],
    ['F3', 'F33', 'F333', 'F3333'],
    ['G3', 'G33', 'G333', 'G3333'],
    ['H3', 'H33', 'H333', 'H3333'],
  ];
  const fourthPlaceInTheGroups = [
    ['A4', 'A44', 'A444', 'A4444'],
    ['B4', 'B44', 'B444', 'B4444'],
    ['C4', 'C44', 'C444', 'C4444'],
    ['D4', 'D44', 'D444', 'D4444'],
    ['E4', 'E44', 'E444', 'E4444'],
    ['F4', 'F44', 'F444', 'F4444'],
    ['G4', 'G44', 'G444', 'G4444'],
    ['H4', 'H44', 'H444', 'H4444'],
  ]

  const selectedGroupRanking = (countrySelected, id) => {
    if (id.includes('1')) {
      for (let i = 0; i < firstPlaceInTheGroups.length; i++) {
        if (id === firstPlaceInTheGroups[i][0]) {
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][0] = true;
          newArray1stPlace[i][1] = false;
          newArray1stPlace[i][2] = false;
          newArray1stPlace[i][3] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][0] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][0] = false;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][0] = false;
          setIsChecked4stPlace(newArray4stPlace);
        } else if (id === firstPlaceInTheGroups[i][1]) {
          let newArray = [...isChecked1stPlace];
          newArray[i][0] = false;
          newArray[i][1] = true;
          newArray[i][2] = false;
          newArray[i][3] = false;
          setIsChecked1stPlace(newArray);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][1] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][1] = false;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][1] = false;
          setIsChecked4stPlace(newArray4stPlace);
        } else if (id === firstPlaceInTheGroups[i][2]) {
          let newArray = [...isChecked1stPlace];
          newArray[i][0] = false;
          newArray[i][1] = false;
          newArray[i][2] = true;
          newArray[i][3] = false;
          setIsChecked1stPlace(newArray);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][2] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][2] = false;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][2] = false;
          setIsChecked4stPlace(newArray4stPlace);
        } else if (id === firstPlaceInTheGroups[i][3]) {
          let newArray = [...isChecked1stPlace];
          newArray[i][0] = false;
          newArray[i][1] = false;
          newArray[i][2] = false;
          newArray[i][3] = true;
          setIsChecked1stPlace(newArray);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][3] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][3] = false;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][3] = false;
          setIsChecked4stPlace(newArray4stPlace);
        }
      }
      let newArray = [...firstPlace];
      (id === 'A1' || id === 'A11' || id === 'A111' || id === 'A1111') && (newArray[0] = countrySelected);
      (id === 'B1' || id === 'B11' || id === 'B111' || id === 'B1111') && (newArray[1] = countrySelected);
      (id === 'C1' || id === 'C11' || id === 'C111' || id === 'C1111') && (newArray[2] = countrySelected);
      (id === 'D1' || id === 'D11' || id === 'D111' || id === 'D1111') && (newArray[3] = countrySelected);
      (id === 'E1' || id === 'E11' || id === 'E111' || id === 'E1111') && (newArray[4] = countrySelected);
      (id === 'F1' || id === 'F11' || id === 'F111' || id === 'F1111') && (newArray[5] = countrySelected);
      (id === 'G1' || id === 'G11' || id === 'G111' || id === 'G1111') && (newArray[6] = countrySelected);
      (id === 'H1' || id === 'H11' || id === 'H111' || id === 'H1111') && (newArray[7] = countrySelected);
      setFirstPlace(newArray);
    } else if (id.includes('2')) {
      for (let i = 0; i < secondPlaceInTheGroups.length; i++) {
        if (id === secondPlaceInTheGroups[i][0]) {
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][0] = true;
          newArray2stPlace[i][1] = false;
          newArray2stPlace[i][2] = false;
          newArray2stPlace[i][3] = false;
          setIsChecked2stPlace(newArray2stPlace)
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][0] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][0] = false;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][0] = false;
          setIsChecked4stPlace(newArray4stPlace);
        } else if (id === secondPlaceInTheGroups[i][1]) {
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][0] = false;
          newArray2stPlace[i][1] = true;
          newArray2stPlace[i][2] = false;
          newArray2stPlace[i][3] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][1] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][1] = false;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][1] = false;
          setIsChecked4stPlace(newArray4stPlace);
        } else if (id === secondPlaceInTheGroups[i][2]) {
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][0] = false;
          newArray2stPlace[i][1] = false;
          newArray2stPlace[i][2] = true;
          newArray2stPlace[i][3] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][2] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][2] = false;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][2] = false;
          setIsChecked4stPlace(newArray4stPlace);
        } else if (id === secondPlaceInTheGroups[i][3]) {
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][0] = false;
          newArray2stPlace[i][1] = false;
          newArray2stPlace[i][2] = false;
          newArray2stPlace[i][3] = true;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][3] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][3] = false;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][3] = false;
          setIsChecked4stPlace(newArray4stPlace);
        }
      }
      let newArray = [...secondPlace];
      (id === 'A2' || id === 'A22' || id === 'A222' || id === 'A2222') && (newArray[0] = countrySelected);
      (id === 'B2' || id === 'B22' || id === 'B222' || id === 'B2222') && (newArray[1] = countrySelected);
      (id === 'C2' || id === 'C22' || id === 'C222' || id === 'C2222') && (newArray[2] = countrySelected);
      (id === 'D2' || id === 'D22' || id === 'D222' || id === 'D2222') && (newArray[3] = countrySelected);
      (id === 'E2' || id === 'E22' || id === 'E222' || id === 'E2222') && (newArray[4] = countrySelected);
      (id === 'F2' || id === 'F22' || id === 'F222' || id === 'F2222') && (newArray[5] = countrySelected);
      (id === 'G2' || id === 'G22' || id === 'G222' || id === 'G2222') && (newArray[6] = countrySelected);
      (id === 'H2' || id === 'H22' || id === 'H222' || id === 'H2222') && (newArray[7] = countrySelected);
      setSecondPlace(newArray);
    } else if (id.includes('3')) {
      for (let i = 0; i < thirdPlaceInTheGroups.length; i++) {
        if (id === thirdPlaceInTheGroups[i][0]) {
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][0] = true;
          newArray3stPlace[i][1] = false;
          newArray3stPlace[i][2] = false;
          newArray3stPlace[i][3] = false;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][0] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][0] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][0] = false;
          setIsChecked4stPlace(newArray4stPlace);
        } else if (id === thirdPlaceInTheGroups[i][1]) {
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][0] = false;
          newArray3stPlace[i][1] = true;
          newArray3stPlace[i][2] = false;
          newArray3stPlace[i][3] = false;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][1] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][1] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][1] = false;
          setIsChecked4stPlace(newArray4stPlace);
        } else if (id === thirdPlaceInTheGroups[i][2]) {
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][0] = false;
          newArray3stPlace[i][1] = false;
          newArray3stPlace[i][2] = true;
          newArray3stPlace[i][3] = false;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][2] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][2] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][2] = false;
          setIsChecked4stPlace(newArray4stPlace);
        } else if (id === thirdPlaceInTheGroups[i][3]) {
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][0] = false;
          newArray3stPlace[i][1] = false;
          newArray3stPlace[i][2] = false;
          newArray3stPlace[i][3] = true;
          setIsChecked3stPlace(newArray3stPlace);
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][3] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][3] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][3] = false;
          setIsChecked4stPlace(newArray4stPlace);
        }
      }
    } else if (id.includes('4')) {
      for (let i = 0; i < fourthPlaceInTheGroups.length; i++) {
        if (id === fourthPlaceInTheGroups[i][0]) {
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][0] = true;
          newArray4stPlace[i][1] = false;
          newArray4stPlace[i][2] = false;
          newArray4stPlace[i][3] = false;
          setIsChecked4stPlace(newArray4stPlace);
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][0] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][0] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][0] = false;
          setIsChecked3stPlace(newArray3stPlace);
        } else if (id === fourthPlaceInTheGroups[i][1]) {
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][0] = false;
          newArray4stPlace[i][1] = true;
          newArray4stPlace[i][2] = false;
          newArray4stPlace[i][3] = false;
          setIsChecked4stPlace(newArray4stPlace);
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][1] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][1] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][1] = false;
          setIsChecked3stPlace(newArray3stPlace);
        } else if (id === fourthPlaceInTheGroups[i][2]) {
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][0] = false;
          newArray4stPlace[i][1] = false;
          newArray4stPlace[i][2] = true;
          newArray4stPlace[i][3] = false;
          setIsChecked4stPlace(newArray4stPlace);
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][2] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][2] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][2] = false;
          setIsChecked3stPlace(newArray3stPlace);
        } else if (id === fourthPlaceInTheGroups[i][3]) {
          let newArray4stPlace = [...isChecked4stPlace];
          newArray4stPlace[i][0] = false;
          newArray4stPlace[i][1] = false;
          newArray4stPlace[i][2] = false;
          newArray4stPlace[i][3] = true;
          setIsChecked4stPlace(newArray4stPlace);
          let newArray1stPlace = [...isChecked1stPlace];
          newArray1stPlace[i][3] = false;
          setIsChecked1stPlace(newArray1stPlace);
          let newArray2stPlace = [...isChecked2stPlace];
          newArray2stPlace[i][3] = false;
          setIsChecked2stPlace(newArray2stPlace);
          let newArray3stPlace = [...isChecked3stPlace];
          newArray3stPlace[i][3] = false;
          setIsChecked3stPlace(newArray3stPlace);
        }
      }
    }
  }

  const goesToTheQuarterfinals = e => {
    let id = e.target.id;
    if (id === 'A1' || id === 'B2') {
      let newArray = [...quarterfinals];
      newArray[0] = e.target.innerHTML;
      setQuarterfinals(newArray);
    } else if (id === 'A2' || id === 'B1') {
      let newArray = [...quarterfinals];
      newArray[1] = e.target.innerHTML;
      setQuarterfinals(newArray);
    } else if (id === 'C1' || id === 'D2') {
      let newArray = [...quarterfinals];
      newArray[2] = e.target.innerHTML;
      setQuarterfinals(newArray);
    } else if (id === 'C2' || id === 'D1') {
      let newArray = [...quarterfinals];
      newArray[3] = e.target.innerHTML;
      setQuarterfinals(newArray);
    } else if (id === 'E1' || id === 'F2') {
      let newArray = [...quarterfinals];
      newArray[4] = e.target.innerHTML;
      setQuarterfinals(newArray);
    } else if (id === 'E2' || id === 'F1') {
      let newArray = [...quarterfinals];
      newArray[5] = e.target.innerHTML;
      setQuarterfinals(newArray);
    } else if (id === 'G1' || id === 'H2') {
      let newArray = [...quarterfinals];
      newArray[6] = e.target.innerHTML;
      setQuarterfinals(newArray);
    } else if (id === 'G2' || id === 'H1') {
      let newArray = [...quarterfinals];
      newArray[7] = e.target.innerHTML;
      setQuarterfinals(newArray);
    } else return
  }

  const goesToTheSemifinals = e => {
    let id = e.target.id;
    if (id === 'A1B2' || id === 'C1D2') {
      let newArray = [...semifinal];
      newArray[0] = e.target.innerHTML;
      setSemifinal(newArray);
    } else if (id === 'B1A2' || id === 'D1C2') {
      let newArray = [...semifinal];
      newArray[1] = e.target.innerHTML;
      setSemifinal(newArray);
    } else if (id === 'E1F2' || id === 'G1H2') {
      let newArray = [...semifinal];
      newArray[2] = e.target.innerHTML;
      setSemifinal(newArray);
    } else if (id === 'F1E2' || id === 'H1G2') {
      let newArray = [...semifinal];
      newArray[3] = e.target.innerHTML;
      setSemifinal(newArray);
    } else return
  }

  const goesToTheFinal = e => {
    let id = e.target.id;
    if (id === 'semi1' || id === 'semi3') {
      let newArray = [...final];
      newArray[0] = e.target.innerHTML;
      setFinal(newArray);
    } else if (id === 'semi2' || id === 'semi4') {
      let newArray = [...final];
      newArray[1] = e.target.innerHTML;
      setFinal(newArray);
    } else return
  }

  const winner = e => {
    setWinnerState(e.target.innerHTML);
  }

  return (
    <div className="App">
      <h1>Catar 2022</h1>
      <div className='all-groups' onChange={selectedGroupRanking(e.nativeEvent.path[2].cells[0].innerHTML, e.target.id)}>
        {
          groups.map(group => {
            return (
              <div className={'container-group container-group-' + group[group.length - 1]} key={group[group.length - 1]}>
                <h4>GRUPO {group[group.length - 1]}</h4>
                <table>
                  <tbody>
                    <tr className='bg-dark'>
                      <th>Puesto</th>
                      <th>1º</th>
                      <th>2º</th>
                      <th>3º</th>
                      <th>4º</th>
                    </tr>
                    <tr>
                      <td>{group[0]}</td>
                      <td><input type='checkbox' className={isChecked1stPlace[group[group.length - 2]][0] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '1'} /></td>
                      <td><input type='checkbox' className={isChecked2stPlace[group[group.length - 2]][0] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '2'} /></td>
                      <td><input type='checkbox' className={isChecked3stPlace[group[group.length - 2]][0] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '3'} /></td>
                      <td><input type='checkbox' className={isChecked4stPlace[group[group.length - 2]][0] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '4'} /></td>
                    </tr>
                    <tr>
                      <td>{group[1]}</td>
                      <td><input type='checkbox' className={isChecked1stPlace[group[group.length - 2]][1] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '11'} /></td>
                      <td><input type='checkbox' className={isChecked2stPlace[group[group.length - 2]][1] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '22'} /></td>
                      <td><input type='checkbox' className={isChecked3stPlace[group[group.length - 2]][1] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '33'} /></td>
                      <td><input type='checkbox' className={isChecked4stPlace[group[group.length - 2]][1] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '44'} /></td>
                    </tr>
                    <tr>
                      <td>{group[2]}</td>
                      <td><input type='checkbox' className={isChecked1stPlace[group[group.length - 2]][2] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '111'} /></td>
                      <td><input type='checkbox' className={isChecked2stPlace[group[group.length - 2]][2] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '222'} /></td>
                      <td><input type='checkbox' className={isChecked3stPlace[group[group.length - 2]][2] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '333'} /></td>
                      <td><input type='checkbox' className={isChecked4stPlace[group[group.length - 2]][2] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '444'} /></td>
                    </tr>
                    <tr>
                      <td>{group[3]}</td>
                      <td><input type='checkbox' className={isChecked1stPlace[group[group.length - 2]][3] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '1111'} /></td>
                      <td><input type='checkbox' className={isChecked2stPlace[group[group.length - 2]][3] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '2222'} /></td>
                      <td><input type='checkbox' className={isChecked3stPlace[group[group.length - 2]][3] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '3333'} /></td>
                      <td><input type='checkbox' className={isChecked4stPlace[group[group.length - 2]][3] ? 'input-checked' : 'input-unchecked'} id={group[group.length - 1] + '4444'} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )
          })
        }
      </div>
      <div className='container-rankings'>
        <table>
          <tbody>
            <tr className='places'>
              <td>Octavos</td>
              <td>Cuartos</td>
              <td>Semifinal</td>
              <td>Final</td>
              <td>Semifinal</td>
              <td>Cuartos</td>
              <td>Octavos</td>
            </tr>
            <tr>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='A1'>{firstPlace[0] === undefined ? '1º GRUPO A' : firstPlace[0]}</td>
              <td className='td-winning-country' onClick={goesToTheSemifinals} id='A1B2' rowSpan='2'>{quarterfinals[0]}</td>
              <td className='td-winning-country' onClick={goesToTheFinal} id='semi1' rowSpan='4'>{semifinal[0]}</td>
              <td className='td-winning-country' rowSpan='8'><p onClick={winner} id='final1'>{final[0]}</p>vs<p onClick={winner} id='final2'>{final[1]}</p></td>
              <td className='td-winning-country' onClick={goesToTheFinal} id='semi2' rowSpan='4'>{semifinal[1]}</td>
              <td className='td-winning-country' onClick={goesToTheSemifinals} id='B1A2' rowSpan='2'>{quarterfinals[1]}</td>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='B1'>{firstPlace[1] === undefined ? '1º GRUPO B' : firstPlace[1]}</td>
            </tr>
            <tr>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='B2'>{secondPlace[1] === undefined ? '2º GRUPO B' : secondPlace[1]}</td>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='A2'>{secondPlace[0] === undefined ? '2º GRUPO A' : secondPlace[0]}</td>
            </tr>
            <tr>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='C1'>{firstPlace[2] === undefined ? '1º GRUPO C' : firstPlace[2]}</td>
              <td className='td-winning-country' onClick={goesToTheSemifinals} id='C1D2' rowSpan='2'>{quarterfinals[2]}</td>
              <td className='td-winning-country' onClick={goesToTheSemifinals} id='D1C2' rowSpan='2'>{quarterfinals[3]}</td>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='D1'>{firstPlace[3] === undefined ? '1º GRUPO D' : firstPlace[3]}</td>
            </tr>
            <tr>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='D2'>{secondPlace[3] === undefined ? '2º GRUPO D' : secondPlace[3]}</td>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='C2'>{secondPlace[2] === undefined ? '2º GRUPO C' : secondPlace[2]}</td>
            </tr>
            <tr>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='E1'>{firstPlace[4] === undefined ? '1º GRUPO E' : firstPlace[4]}</td>
              <td className='td-winning-country' onClick={goesToTheSemifinals} id='E1F2' rowSpan='2'>{quarterfinals[4]}</td>
              <td className='td-winning-country' onClick={goesToTheFinal} id='semi3' rowSpan='4'>{semifinal[2]}</td>
              <td className='td-winning-country' onClick={goesToTheFinal} id='semi4' rowSpan='4'>{semifinal[3]}</td>
              <td className='td-winning-country' onClick={goesToTheSemifinals} id='F1E2' rowSpan='2'>{quarterfinals[5]}</td>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='F1'>{firstPlace[5] === undefined ? '1º GRUPO F' : firstPlace[5]}</td>
            </tr>
            <tr>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='F2'>{secondPlace[5] === undefined ? '2º GRUPO F' : secondPlace[5]}</td>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='E2'>{secondPlace[4] === undefined ? '2º GRUPO E' : secondPlace[4]}</td>
            </tr>
            <tr>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='G1'>{firstPlace[6] === undefined ? '1º GRUPO G' : firstPlace[6]}</td>
              <td className='td-winning-country' onClick={goesToTheSemifinals} id='G1H2' rowSpan='2'>{quarterfinals[6]}</td>
              <td className='td-winning-country' onClick={goesToTheSemifinals} id='H1G2' rowSpan='2'>{quarterfinals[7]}</td>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='H1'>{firstPlace[7] === undefined ? '1º GRUPO H' : firstPlace[7]}</td>
            </tr>
            <tr>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='H2'>{secondPlace[7] === undefined ? '2º GRUPO H' : secondPlace[7]}</td>
              <td className='td-winning-country' onClick={goesToTheQuarterfinals} id='G2'>{secondPlace[6] === undefined ? '2º GRUPO G' : secondPlace[6]}</td>
            </tr>
          </tbody>
        </table>
        <h2>Campeón: {winnerState} 👑 </h2>
      </div>
    </div>
  );
}

export default App;
