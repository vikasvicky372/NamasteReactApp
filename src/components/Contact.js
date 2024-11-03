const Contact = () => {
    return (
        <div >
            <input className="p-2 m-4 border border-black border-solid rounded-md"type="text" placeholder="name"></input>
            <input className="p-2 m-4 border border-black border-solid rounded-md" type="text" placeholder="message"></input>
            <button className="p-2 m-4 border border-black border-solid rounded-md bg-gray-100">submit</button>
        </div>
    )
}

export default Contact;