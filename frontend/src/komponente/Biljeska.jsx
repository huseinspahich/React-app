import DeleteIcon from '@mui/icons-material/Delete';

function Biljeska(props){

    function klik(){
        props.obrisi(props.id)
    }

    return(
        <div className="note">
            <h1>{props.naslov}</h1>
            <p>{props.sadrzaj}</p>
            <button onClick={klik}>
                <DeleteIcon />
            </button>
            
        </div>
    )

}

export default Biljeska;