import { useState } from 'react';
import styles from '../styles/components/editbtn.module.css'
import Router from "next/router";


export default function({field}) {

    const [modal, setModalVis] = useState(false)

    return (
            <div className={styles.container}>
                <button className={styles.tgl} onClick={showInput}>●●●</button>
                {modal && <form onSubmit={save}>
                    <textarea defaultValue={field.content}></textarea>
                    <button>Save</button>
                    </form>
                }
            </div>
    );


// When the user clicks on the button, open the modal
function showInput () {
    setModalVis(!modal)
}
async function save (event) {
    event.preventDefault();

    console.log("Saving...")

    const contentField = event.target[0]
    console.log(contentField.value)

    if (contentField == null) {
        return;
    }
    const body = ({
        field: field.id,
        content: contentField.value,
        type: field.type
    })

    const response = await fetch(process.env.API_PREFIX + "api/documents/edit/field", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ 
        "field": field.id,
        "content": contentField.value,
        "type": field.type
    }),
    })
    response.json().then(data => {
        console.log(data);
      });


      Router.reload();
}

}   
