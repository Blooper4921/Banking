import React from 'react'
import styles from '../Modal.module.scss'
import { Button, ButtonGroup, CircularProgress, Typography, Zoom } from '@mui/material';
import { fetchNui } from '../../../../../hooks/fetchNui';

export const DeleteAccount: React.FC<{
    modalOpen: boolean
    setModalOpen: any
    selectedAccountId: any
}> = (props) => {
    const [Loading, setLoading] = React.useState(false);

    return (
        <Zoom
            in={props.modalOpen}
            timeout={320}
        >
            <div
                className={styles.Wrapper}
                style={{
                    height: '20vh'
                }}
            >
                {!Loading &&
                    <>
                        <Typography
                            className={styles.ModalHeader}
                        >
                            Delete Account
                        </Typography>

                        <Typography className={styles.areYouSure}>
                            Are you sure you want to delete this account ?
                        </Typography>

                        <div>
                            <div 
                                className={styles.ButtonContainer}
                                style={{
                                    position: 'absolute',
                                    bottom: '0.5vh',
                                    right: '0vh'
                                }}
                            >
                                <ButtonGroup>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => {
                                            props.setModalOpen(false);
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
                                                props.setModalOpen(false);
                                                setLoading(false);

                                                fetchNui('Banking:deleteSavings', {
                                                    accountId: props.selectedAccountId
                                                })
                                            }, 1500)
                                        }}
                                    >
                                        Delete
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
                            marginTop: '8%'
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