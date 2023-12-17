import React from 'react';

import styles from "./Banking.module.scss";
import "./Components/Scroll.module.scss"

import { Zoom } from "@mui/material";

import { Sidebar } from './Components/Sidebar/Sidebar';
import { Header } from './Components/Header/Header'; 
import { DepositModal } from './Components/Modals/Deposit/DepositModal'; 
import { WithdrawModal } from './Components/Modals/Withdraw/WithdrawModal';
import { TransferModal } from './Components/Modals/Transfer/TransferModal';
import { Transactions } from './Components/Transactions/Transactions';

export const Banking: React.FC = () => {
    const [Open, setOpen] = React.useState(true);

    const [DepositModalOpen, setDepositModalOpen] = React.useState(false);
    const [WithdrawModalOpen, setWithdrawModalOpen] = React.useState(false);
    const [TransferModalOpen, setTransferModalOpen] = React.useState(false);

    const [CharacterData, setCharacterData] = React.useState({
        Name: 'Aspect Dev',
        StateId: 1,
        Cash: 250,
        selectedAccount: 1,
        Accounts: [
            {
                accountId: 1,
                accountType: 'Personal',
                name: 'Aspect Dev',
                balance: 25000
            },
            {
                accountId: 2,
                accountType: 'Savings',
                name: 'Aspect Savings',
                balance: 650000
            },
            {
                accountId: 3,
                accountType: 'Personal',
                name: '2k Dev',
                balance: 25000
            },
            {
                accountId: 4,
                accountType: 'Savings',
                name: '2k Savings',
                balance: 650000
            },
        ],
        BusinessAccounts: [
            {
                accountId: 5,
                accountType: 'Business',
                name: 'Los Santos Police Department',
                balance: 250000
            },
            {
                accountId: 6,
                accountType: 'Business',
                name: 'Blaine County Sheriffs Office',
                balance: 250000
            },
            {
                accountId: 7,
                accountType: 'Business',
                name: 'San Andreas State Police',
                balance: 250000
            },
            {
                accountId: 8,
                accountType: 'Business',
                name: 'San Andreas State Park Rangers',
                balance: 250000
            },
        ]
    })

    return (
        <Zoom
            in={Open}
            timeout={750}
            unmountOnExit
            mountOnEnter
        >
            <div
                className={styles.App}
            >
                <div
                    className={styles.BankAppContainer}
                >
                    <Header
                        name={CharacterData.Name}
                        cash={CharacterData.Cash}
                    />

                    <Sidebar
                        accounts={CharacterData.Accounts}
                        businessaccounts={CharacterData.BusinessAccounts}
                        selectedAccount={CharacterData.selectedAccount}
                        setDepositModalState={setDepositModalOpen}
                        setWithdrawModalState={setWithdrawModalOpen}
                        setTransferModalState={setTransferModalOpen}
                        CharacterData={CharacterData}
                        setCharacterData={setCharacterData}
                    />
                </div>

                <Transactions />

                <DepositModal
                    modalOpen={DepositModalOpen}
                    setModalOpen={setDepositModalOpen}
                />

                <WithdrawModal
                    modalOpen={WithdrawModalOpen}
                    setModalOpen={setWithdrawModalOpen}
                />

                <TransferModal
                    modalOpen={TransferModalOpen}
                    setModalOpen={setTransferModalOpen}
                />
            </div>
        </Zoom>
    )
}