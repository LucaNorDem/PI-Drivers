import { useState } from "react";
import validations from "./validations/validations"; 
import { useSelector } from "react-redux";
import Modal from "../Modal/Modal";
import style from "./Form.module.css"
import { useDispatch } from "react-redux";
import { getAllDrivers, postDriver } from "../../redux/actions";

const Form = () =>{

    const teams = useSelector((state)=> state.teams);
    const post = useSelector((state)=> state.postDriver);

    const dispatch = useDispatch();

    const [data, setData] = useState({
        name: "",
        lastname: "",
        nationality: "",
        image: null,
        description: "",
        birthday: "",
        teams: [],
    })
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleChange = (e) =>{
        const {name, value} = e.target;

        setData({
            ...data,
            [name]: value,
        })

    }

    const handleFileChange = (e) => {

        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) =>{
            setData({
                ...data,
                image: event.target.result,
            });
        };
       
        reader.readAsDataURL(file);

    }

    const handleAddTeams = (e) =>{

        const team = e.target.value;

        if(team && !data.teams.includes(team)){
            setData({
                ...data,
                teams: [...data.teams, team],
            })
        }

        setIsModalOpen(false);
    }

    const deleteTeam = (e) =>{
        const team = e.target.value;

        setData({
            ...data,
            teams: teams.filter(t => !team),
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataValidate = validations({ ...data })
        setErrors(dataValidate);

        if (Object.keys(dataValidate).length === 0) {
            dispatch(postDriver(data));
            dispatch(getAllDrivers())
        }

    }



    const availableTeams = teams.filter(team => !data.teams.includes(team.name));
   

    return (

        <div>
            
            <div>
                <h2>Add new driver</h2>
                <form className={style.formBody} action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Name*</label>
                    <input type="text" name="name" value={data.name} onChange={handleChange} />

                    <label htmlFor="">Lastname*</label>
                    <input type="text" name="lastname" value={data.lastname} onChange={handleChange} />

                    <label htmlFor="">Nationality*</label>
                    <input type="text" name="nationality" value={data.nationality} onChange={handleChange} />

                    <label htmlFor="">Birthday*</label>
                    <input type="date" name="birthday" value={data.birthday} onChange={handleChange} />

                    <label htmlFor="">Image</label>
                    <input type="file" name="image" onChange={handleFileChange} />

                    <label htmlFor="">Teams</label>

                    <button type="button" onClick={() => setIsModalOpen(true)}>Add team</button>
                    <ul>
                        {data.teams.map((team, index) => {
                            return (
                                <div key={index}>
                                    <li >{team}</li>
                                    <button value={team} onClick={deleteTeam}>x</button>
                                </div>
                            
                            )
                        })}
                    </ul>

                    <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
                        <h3>Select a team</h3>
                        <select onChange={handleAddTeams}>
                            <option value="">Select team</option>
                            {availableTeams.map((team, index) => (
                                <option key={index} value={team.name}>{team.name}</option>
                            ))}
                        </select>
                    </Modal>

                    <label htmlFor="">Description</label>
                    <textarea id="" cols="30" rows="10" name="description" value={data.description} onChange={handleChange}></textarea>

                    <button type="submit">Add driver</button>

                    {Object.keys(errors).length > 0 && <div>
                        {Object.values(errors).map((e, i) => (
                            <p key={i}>{e}</p>))}
                    </div>}
                    {post && post.created && <p>{post.message}</p>}
                    {post && !post.created && <p>{post.message}</p>}

                </form>
            </div>

        </div>
    )

}


export default Form;