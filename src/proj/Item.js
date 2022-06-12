import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import List from "./List";
import Context from "../context";

const styles={
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

function Item({item, index, onChange}) {
    const {removeTodo}=useContext(Context)
    const clases=[]
    if (item.check){
        clases.push('done')
    }
    return (
        <li style={styles.li}>
            <span className={clases.join(' ')}>
                <input style={styles.input}
                       onChange={()=>{onChange(item.id)}}
                       checked={item.check}
                       type="checkbox"/>
                <strong>{index+1}</strong>
                &nbsp;
                {item.title}
            </span>
            <button className={"rm"} onClick={()=>{removeTodo(item.id)}} >&times;</button>
        </li>
    )
}

Item.propTypes={
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func
}

export default Item