let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber)
const registeredEarly = true;
let runnerAge = 18;
(runnerAge > 18 ) ? console.log('The runner is an adult!') : console.log('The runner is a youth!');

(runnerAge > 18 && registeredEarly)? console.log(raceNumber += 1000 ) : console.log(raceNumber);

if (runnerAge > 18 && registeredEarly){
  console.log(`Runner ${raceNumber} will race at 9:30`)
}else if(runnerAge> 18 && !registeredEarly){
  console.log(`Runner ${raceNumber} will race at 11:00`)
};

if(runnerAge < 18){
  console.log(`Runner ${raceNumber} will race at 12:30`)
}else if (runnerAge === 18){
  console.log('See the registration desk!')
};

