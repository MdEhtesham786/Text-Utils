import React from 'react'

export default function Alert(props) {
    return (<div className="box" style={{ height: '50px' }}>
        {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert" style={props.alertStyle}>
            <strong>{props.alert.message}</strong>
        </div>}
    </div>

    )
}
