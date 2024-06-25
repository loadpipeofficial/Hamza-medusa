curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"storeId":"0x382e9fdf10295e01ad4c7e4dc7e3cecf461016addbe8e15e55736983af39426c","keycard":"0x1d24055a9122ab48d62e9f65f37335f844d7de6858edf61d3ca115efbe82be86", "paymentCurrency":"0xbe9fe9b717c888a2b2ca0a6caa639afe369249c5", "items": [{"productId": "0xd2bf8aa15bd0b0fe8d34d5b9470456e29c7a8ba8ed2e74c3eaacc4e90f078024", "quantity":"1"}]}' \
  http://localhost:3001/api/checkout
