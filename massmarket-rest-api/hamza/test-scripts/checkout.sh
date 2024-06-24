curl --header "Content-Type: application/json" \
  --request POST \
  --data '{"storeId":"0xe8b3a2a736a13a35c3329e772a1e5bfd7c0ebde8e4cb38889ecfce8b1e3db0b6","keycard":"0xfc5f10e06f7a6c7c26c2930f7dde591f37470677c3fde258b39df6043741fc2b", "paymentCurrency":"", "items": [{"productId": "0xa3438104c764746a3d67c761e154ad26a958153743e97db10747121d4c68d642", "quantity":"1"}]}' \
  http://localhost:3001/api/checkout
