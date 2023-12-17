import React from 'react'
import styles from '../Modal.module.scss'

import { Button, ButtonGroup, CircularProgress, InputAdornment, TextField, Typography, Zoom } from '@mui/material';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

export const AccountCreation: React.FC<{
    modalOpen: boolean;
    setModalOpen: any
}> = (props) => {
    const [Loading, setLoading] = React.useState(false);

    const [Amount, setAmount] = React.useState(0);
    const [Comment, setComment] = React.useState('');

    return (
        <Zoom
            in={props.modalOpen}
            timeout={320}
        >
            <div
                className={styles.Wrapper}
            >
                {!Loading &&
                    <>
                        <Typography
                            className={styles.ModalHeader}
                        >
                            Create Account
                        </Typography>

                        <TextField
                            id="outlined-basic"
                            label="Amount"
                            variant="outlined"
                            value={Amount}

                            onChange={(e) => {
                                setAmount(Number(e.target.value))
                            }}

                            style={{
                                marginTop: '9vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}

                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <FontAwesomeIcon icon={faDollarSign} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                        <TextField
                            id="outlined-basic"
                            label="Comment"
                            variant="outlined"
                            value={Comment}
                            onChange={(e) => {
                                setComment(e.target.value)
                            }}
                            
                            multiline
                            rows={5}
                            style={{
                                marginTop: '2vh',
                                width: '32.5vw',
                                left: '2vh'
                            }}
                        />

                        <div>
                            <div
                                className={styles.ButtonContainer}
                            >
                                <ButtonGroup>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => {
                                            props.setModalOpen(false);
                                            setAmount(0);
                                            setComment('');
                                        }}
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={() => {
                                            setLoading(true);

                                            setTimeout(() => {
                                                setLoading(false);
                                            }, 1000)
                                        }}
                                    >
                                        Deposit
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </>
                }

                {Loading &&
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '20%'
                        }}
                    >
                        <div>
                            <CircularProgress
                                size={100}
                            />
                        </div>
                    </div>
                }
            </div>
        </Zoom>
    )
}