import NodeLogger from '../dist';

const logger = NodeLogger({
	host: '{{your_mongo_connection_string}}',
});

logger({
	ip: '192.168.1.67',
	body: {
		name: 'Juan Manuel',
		lastname: 'Batty Linero',
	},
	response: {
		message: 'User created',
	},
});
