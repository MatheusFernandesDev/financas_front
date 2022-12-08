import faker from "faker/locale/pt_BR";

export default function createUsers(numUsers) {
	const users = [
		{
			name: faker.name.findName(),
			adress: `${faker.address.streetAddress()}, ${faker.address.stateAbbr()}, ${faker.address.city()}, ${faker.address.country()}`,
			phone: faker.phone.phoneNumber(),
			user_id: 1,
			uuid: "bc43d264-25fb-4076-9450-a318055ee137",
			email: "admin@mail.com",
			password_hash:
				"$2b$08$ZvsqRkTaI9pMo8IT6JMZqeRauJ9.386iFsW5NDrknriF6MFJKyGuS",
			person: 1,
			type: 1,
		},
	];

	for (let i = 1; i < numUsers; i++) {
		users.push({
			name: faker.name.findName(),
			adress: `${faker.address.streetAddress()}, ${faker.address.stateAbbr()}, ${faker.address.city()}, ${faker.address.country()}`,
			phone: faker.phone.phoneNumber(),
			user_id: 1 + i,
			uuid: faker.datatype.uuid(),
			email: faker.internet.email().toLowerCase(),
			password_hash:
				"$2b$08$Y5kJr.3tbx5ViSESgSNY6e/9voM161lGM57Re4V8PMoqLiUseTyfe",
			person: 1 + i,
			type: 2,
		});
	}

	return users;
}
