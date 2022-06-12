import React from 'react'
import Item from "./Item";
import PropTypes from 'prop-types'

function List(props) {
    return (
        <span>
        <ul>
            {props.todos.map((val, index) => {
                return <Item item={val} key={val.id} index={index} onChange={props.onToggle}/>
            })
            }
        </ul>
            </span>
    )
}

List.propTypes={
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
}

export default List