import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateIcon from '@mui/icons-material/Create';
import "./index.scss"

export default function AvatarCostomize(props) {

    function stringToColor(string) {

        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    return (
        <>
            {props.src ?
                <>
                    <Avatar
                        className={`${props.size === "lg" ? "lg-avatar" : "sm-avatar"
                            } ${props.className} 
               `}
                        src={props.src}
                        sx={{ width: props.width, height: props.width }} />
                </>
                :
                <Avatar
                    className={`${props.size === "lg" ? "lg-avatar" : "sm-avatar"
                        } ${props.className} `}
                    sx={{ width: props.width, height: props.width, bgcolor: stringToColor(props.name) }}
                >
                    {props.name.split(' ')[0][0]}
                </Avatar>
            }


        </>
    );
}
