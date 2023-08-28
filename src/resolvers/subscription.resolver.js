
const Subscription = {
	todo: {
		subscribe: (parent, args, { pubsub }) => pubsub.subscribe('todo'),
        resolve: payload => payload
	},
	randomNumber: {
		subscribe: (parent, args, { pubsub }) => pubsub.subscribe('randomNumber'),
		resolve: payload => payload
	}
}

export default Subscription;