import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { removeItem, setItem } from "../../api/storage/storage";

export default function FormAdmin() {
    const { id, token, role } = useParams();
    const navigator = useNavigate();

    useEffect(() => {
        if (id && token) {
            removeItem('id');
            removeItem('token');
            removeItem('role');
            setItem('id', JSON.stringify(id));
            setItem("token", token);
            setItem('role', role);

            navigator("/")
            window.location.reload(false)

            // navigator("/")
        }

    }, [])

    return (null)

}