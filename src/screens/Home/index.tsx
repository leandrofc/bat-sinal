import { useState } from "react";
import Form from "../../components/Form";
import CallBatSinal from "../../components/CallBatSinal";

const Home = () => {
    const [isForm, setIsForm] = useState(false);

    return (
        isForm ? 
            <Form sendFunction={() => setIsForm(false)}/> 
            : 
            <CallBatSinal callFunction={() => setIsForm(true)}/>
    )
}

export default Home;