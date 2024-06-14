'use client';

import React, { useState, useEffect } from 'react';
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
const BACKEND_URL = process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL;
import { useCustomerAuthStore } from '@store/customer-auth/customer-auth';

const ToggleNotifications = ({ region }: { region: Region }) => {
    const [selectedNotifications, setSelectedNotifications] = useState([]);
    const [notificationMethod, setNotificationMethod] = useState('');

    const { customer_id } = useCustomerAuthStore();

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

    const handleSave = async () => {
        try {
            if (selectedNotifications.includes('none')) {
                // Call the delete route if 'none' is selected
                await fetch(
                    `${BACKEND_URL}/custom/notification/remove-notification`,
                    {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            customer_id: customer_id,
                            notification_type: 'none',
                        }),
                    }
                );
            } else {
                // Call the add/update route with the selected notifications
                const notificationsString = selectedNotifications.join(', ');
                await fetch(
                    `${BACKEND_URL}/custom/notification/add-notification`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            customer_id: customer_id,
                            notification_type: notificationsString,
                        }),
                    }
                );
            }
            console.log('Selected Notifications:', selectedNotifications);
            console.log('Notification Method:', notificationMethod);
        } catch (error) {
            console.error('Error saving notification preferences:', error);
        }
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