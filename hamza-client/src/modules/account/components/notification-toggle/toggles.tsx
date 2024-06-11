'use client';

import React, { useState } from 'react';
import {
    Checkbox,
    Stack,
    CheckboxGroup,
    FormControl,
    FormLabel,
    Radio,
    RadioGroup,
    Button,
} from '@chakra-ui/react';
import { Region } from '@medusajs/medusa';

const ToggleNotifications = ({ region }: { region: Region }) => {
    const [selectedNotifications, setSelectedNotifications] = useState([]);
    const [notificationMethod, setNotificationMethod] = useState('');

    const handleNotificationChange = (value) => {
        if (value.includes('necessary')) {
            setSelectedNotifications(['necessary']);
        } else if (value.includes('none')) {
            setSelectedNotifications(['none']);
        } else {
            setSelectedNotifications(
                value.filter((item) => item !== 'necessary' && item !== 'none')
            );
        }
    };

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        if (value === 'none') {
            setSelectedNotifications(['none']);
        } else {
            setSelectedNotifications((prevSelected) => {
                if (prevSelected.includes(value)) {
                    return prevSelected.filter((item) => item !== value);
                } else {
                    return [
                        ...prevSelected.filter((item) => item !== 'none'),
                        value,
                    ];
                }
            });
        }
    };

    const handleSave = () => {
        // Save the notification preferences and method here
        console.log('Selected Notifications:', selectedNotifications);
        console.log('Notification Method:', notificationMethod);
        // Add your save logic here
    };

    return (
        <FormControl>
            <FormLabel>Notification Preferences</FormLabel>
            <Stack spacing={3}>
                <Checkbox
                    value="orderShipped"
                    isChecked={selectedNotifications.includes('orderShipped')}
                    onChange={handleCheckboxChange}
                >
                    Notify when order shipped
                </Checkbox>
                <Checkbox
                    value="newProduct"
                    isChecked={selectedNotifications.includes('newProduct')}
                    onChange={handleCheckboxChange}
                >
                    Notify when followed sellers post a new product
                </Checkbox>
                <Checkbox
                    value="orderStatusChanged"
                    isChecked={selectedNotifications.includes(
                        'orderStatusChanged'
                    )}
                    onChange={handleCheckboxChange}
                >
                    Notify when order status changed
                </Checkbox>
                <Checkbox
                    value="promotions"
                    isChecked={selectedNotifications.includes('promotions')}
                    onChange={handleCheckboxChange}
                >
                    Notify for promotions/discounts
                </Checkbox>
                <Checkbox
                    value="surveys"
                    isChecked={selectedNotifications.includes('surveys')}
                    onChange={handleCheckboxChange}
                >
                    Notify for surveys
                </Checkbox>
                {/*<Checkbox*/}
                {/*    value="necessary"*/}
                {/*    isChecked={selectedNotifications.includes('necessary')}*/}
                {/*    onChange={handleCheckboxChange}*/}
                {/*>*/}
                {/*    Necessary notifications only (when this is checked, other*/}
                {/*    checkboxes are cleared)*/}
                {/*</Checkbox>*/}
                <Checkbox
                    value="none"
                    isChecked={selectedNotifications.includes('none')}
                    onChange={handleCheckboxChange}
                >
                    No notifications (when this is checked, other checkboxes are
                    cleared)
                </Checkbox>
            </Stack>
            <FormLabel mt={4}>Notify by:</FormLabel>
            <RadioGroup
                value={notificationMethod}
                onChange={setNotificationMethod}
            >
                <Stack spacing={3} direction="row">
                    <Radio value="sms">SMS</Radio>
                    <Radio value="email">Email</Radio>
                    <Radio value="line">LINE</Radio>
                    <Radio value="whatsapp">WhatsApp</Radio>
                </Stack>
            </RadioGroup>
            <Button mt={4} colorScheme="teal" onClick={handleSave}>
                Save
            </Button>
        </FormControl>
    );
};

export default ToggleNotifications;
