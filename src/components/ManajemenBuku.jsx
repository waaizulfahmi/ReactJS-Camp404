import React, { useState, useEffect } from "react";
import TabelBuku from "./TabelBuku";
import axios from "axios";



function ManajemenBuku(){
    const [formMode, setFormMode] = useState("");
    const [books, setBooks] = useState([]);
    const [inputForm, setInputForm] = useState();

    function showCreateForm(){
        setInputForm("");
        setFormMode("create");
    }
    function showEditForm(book){
        setInputForm(book);
        setFormMode("edit");
    }
    useEffect(() => {
        retrieveData();
    }, []);

    function retrieveData(){
        axios.get("http://localhost:4000/book")
            .then((response) => {setBooks(response.data)})
            .catch(function(error) {console.log(error.response.data)})

    }

    function handleJudul(e) {
        setInputForm({...inputForm, judul: e.target.value})
    }
    function handlePengarang(e) {
        setInputForm({...inputForm, pengarang: e.target.value})
    }

    function submitForm(event){
        event.preventDefault();
        if (formMode === "create"){
            axios.post("http://localhost:4000/book/add", inputForm)
                .then(() => {
                    alert("data Berhasil Ditambahkan");
                    retrieveData();
                })
                .catch((error) => {console.log(error.response)})
            }
            
        if(formMode ==="edit"){
            axios.post("http://localhost:4000/book/update/" + inputForm._id, inputForm)
                .then(() => {
                    alert("data Berhasil diubah!");
                    retrieveData();
                })
                .catch((error) => {console.log(error.response)})
            
        }
    }
    
    function deleteOne(book){
        axios.delete("http://localhost:4000/book/delete/" + book._id)
            .then(() => {
                retrieveData();
                alert("Data Berhasil Dihapus ! ")
            })
            .catch((error) => {console.log(error.response)})
    }
    return(
        <div className="container mt-3">
            <h1 className="center-text">Manajemen Buku </h1>
            <button className="btn btn-sm btn-primary my-2" onClick={showCreateForm}>Tambah Buku</button>
            {formMode !== "" && (
                <div id="form">
                    <div className="card-body">
                        <h4>Form Buku</h4>
                        <form className="row" onSubmit={submitForm}>
                            <div className="col-6">
                                <input 
                                    type="text"
                                    name="judul"
                                    placeholder="Judul.."
                                    className="form-control mx-2"
                                    value={inputForm.judul || ""}
                                    onChange={handleJudul} />
                            </div>
                            <div className="col-4">
                                <input 
                                    type="text"
                                    name="pengarang"
                                    placeholder="Pengarang"
                                    className="form-control mx-2"
                                    value={inputForm.pengarang || ""}
                                    onChange={handlePengarang} />
                            </div>
                            <div className="col-2">
                                <input type="submit" className="btn btn-success" value="submit" />
                            </div>
                        </form>

                </div>
            </div>
            )}  
            
            <TabelBuku showEdit={showEditForm} books={books} requestToDelete={deleteOne}/>
            {/* <p>{JSON.stringify(books)}</p> */}

            {/* table data buku */}
        </div>
    )
}



export default ManajemenBuku;