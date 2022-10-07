// No parameters defined because function needs nothing to do its job
const createChassis = () => {
	// Create a new object. No properties yet.
	const newChassisObject = {	}

	return newChassisObject
}

const addWheels = (chassis) => {
    chassis.wheels = 4;

    return chassis;
}

const addEngine = (chassis) => {
    chassis.engine = "4.8L"

    return chassis;
}

const addSteeringWheel = (chassis) => {
    chassis.steeringWheel = "Tilting";

    return chassis;
}

const addDriveTrain = (chassis) => {
    chassis.driveTrain = "Two wheel drive";

    return chassis;
}

const newCar = createChassis();
addWheels(newCar);
addEngine(newCar);
addSteeringWheel(newCar);
addDriveTrain(newCar);
console.log(newCar);

const newCarNested = addDriveTrain(addSteeringWheel(addEngine(addWheels(createChassis()))));
console.log(newCarNested);