
class State {
    public test: number
}
class Store {
    // public static state = new State()
    public static state = {
        config:{
            mongoose: {
                url: 'mongodb+srv://zc:cc@cluster0.ou5mi.mongodb.net/nest?retryWrites=true&w=majority'
            }
        }
    }

}
export default Store;