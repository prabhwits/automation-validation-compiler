

- **search** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.intent.fulfillment.end.location.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_13**: $.message.intent.fulfillment.end.location.area_code must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.intent.fulfillment.type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent.fulfillment.type must **not** be present in the payload

- **select** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.provider.locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order.items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_18**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].end.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.fulfillments[*].end.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PAYMENT**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_PAYMENT.1**: $.message.order.payment must be present in the payload
	  - **condition REQUIRED_MESSAGE_PAYMENT.2**: every element of $.message.order.payment must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_ID_22**: $.message.order.offers[*].id must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.offers[*].tags.code must be in ["Disc_Pct", "Disc_Amt", "BuyXGetY", "Freebie"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.offers[*].tags.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENT**: every element of $.message.order.payment must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENT** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment must **not** be present in the payload

- **init** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.provider.locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order.items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_18**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_ID**: $.message.order.items[*].fulfillment_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.billing.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_30**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.fulfillments[*].end.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_32**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].end.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_34**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_35**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_36**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_37**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_38**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_39**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATE.1**: $.message.order.state must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATE.2**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_20**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.billing.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_27**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order.items[*].quantity.maximum.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_ID**: $.message.order.items[*].fulfillment_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_30**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_31**: $.message.order.provider.locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_URI**: $.message.order.payment.uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TL_METHOD**: $.message.order.payment.tl_method must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AMOUNT**: $.message.order.payment.params.amount must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.payment.params.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TRANSACTION_ID**: $.message.order.payment.params.transaction_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.order.payment.status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]
	
	- **condition REQUIRED_MESSAGE_BENEFICIARY_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BANK_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].bank_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_BANK_ACCOUNT_NO**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_IFSC_CODE**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPI_ADDRESS**: $.message.order.payment['@ondc/org/settlement_details'][*].upi_address must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_COUNTERPARTY**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_PHASE**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.1**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be present in the payload
	  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.2**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]
	
	- **condition REQUIRED_MESSAGE_BRANCH_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].branch_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY.1**: $.message.order.payment.collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY.2**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
	- **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE.1**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE.2**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
	
	- **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_AMOUNT**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS.1**: $.message.order.payment['@ondc/org/settlement_basis'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS.2**: every element of $.message.order.payment['@ondc/org/settlement_basis'] must be in ["shipment", "delivery", "return_window_expiry"]
	
	- **condition REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_WINDOW**: $.message.order.payment['@ondc/org/settlement_window'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PAYMENTONDCORGWITHHOLDING_AMOUNT**: $.message.order.payment['@ondc/org/withholding_amount'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT_54**: $.message.order.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_55**: $.message.order.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_56**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_57**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_58**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_58.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_58.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_59**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_62**: $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TITLE**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_64**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_65**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_66**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_67**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT**: every element of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["0", "99"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.available.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT_5**: every element of $.message.order.quote.breakup[*].item.quantity.maximum.count must be in ["0", "10"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.maximum.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_6**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COLLECTED_BY**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COLLECTED_BY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.collected_by must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS**: every element of $.message.order.payment['@ondc/org/settlement_basis'] must be in ["shipment", "delivery", "return_window_expiry"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_basis'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.state must **not** be present in the payload

- **track** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ORDER_ID**: $.message.order_id must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ORDER_ID**: $.message.order_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CANCELLATION_REASON_ID**: $.message.cancellation_reason_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.descriptor.short_desc must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload

- **update** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATE_TARGET**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_UPDATE_TARGET.1**: $.message.update_target must be present in the payload
	  - **condition REQUIRED_MESSAGE_UPDATE_TARGET.2**: every element of $.message.update_target must be in ["payment", "item"]
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Cancel", "Delivery", "Return"]
	
	- **condition REQUIRED_MESSAGE_TYPE_18**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_18.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_18.2**: every element of $.message.order.fulfillments[*].type must be in ["Cancel", "Delivery", "Return"]
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.fulfillments[*].tags.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE**: $.message.order.fulfillments[*].tags.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_21**: $.message.order.fulfillments[*].tags.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_22**: $.message.order.fulfillments[*].tags.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_23**: $.message.order.fulfillments[*].tags.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_24**: $.message.order.fulfillments[*].tags.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_25**: $.message.order.fulfillments[*].tags.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_26**: $.message.order.fulfillments[*].tags.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_27**: $.message.order.fulfillments[*].tags.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_28**: $.message.order.fulfillments[*].tags.name must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_UPDATE_TARGET**: every element of $.message.update_target must be in ["payment", "item"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_UPDATE_TARGET** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.update_target must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.order.payment.status must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COLLECTED_BY**: every element of $.message.order.payment.collected_by must be in ["percent", "amount"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COLLECTED_BY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.collected_by must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COLLECTED_BY_6**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COLLECTED_BY_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.collected_by must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS_7**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COLLECTED_BY_8**: every element of $.message.order.payment.collected_by must be in ["shipment", "delivery", "return_window_expiry"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COLLECTED_BY_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.collected_by must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Cancel", "Delivery", "Return"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: $.context.domain must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.intent['bpp/fulfillments'][*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.intent['bpp/fulfillments'][*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.intent['bpp/fulfillments'][*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.intent['bpp/descriptor'].name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SYMBOL**: $.message.intent['bpp/descriptor'].symbol must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.intent['bpp/descriptor'].short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LONG_DESC**: $.message.intent['bpp/descriptor'].long_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_IMAGES**: $.message.intent['bpp/descriptor'].images[*] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_20**: $.message.intent['bpp/providers'][*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_21**: $.message.intent['bpp/providers'][*].descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SYMBOL_22**: $.message.intent['bpp/providers'][*].descriptor.symbol must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC_23**: $.message.intent['bpp/providers'][*].descriptor.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LONG_DESC_24**: $.message.intent['bpp/providers'][*].descriptor.long_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_IMAGES_25**: $.message.intent['bpp/providers'][*].descriptor.images[*] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TTL**: $.message.intent['bpp/providers'][*].ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_27**: $.message.intent['bpp/providers'][*].descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SYMBOL_28**: $.message.intent['bpp/providers'][*].descriptor.symbol must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC_29**: $.message.intent['bpp/providers'][*].descriptor.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LONG_DESC_30**: $.message.intent['bpp/providers'][*].descriptor.long_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_IMAGES_31**: $.message.intent['bpp/providers'][*].descriptor.images[*] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.intent['bpp/providers'][*].items[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.intent['bpp/providers'][*].items[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_MAXIMUM_VALUE**: $.message.intent['bpp/providers'][*].items[*].price.maximum_value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UNIT**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_UNIT.1**: $.message.intent['bpp/providers'][*].items[*].quantity.unitized.measure.unit must be present in the payload
	  - **condition REQUIRED_MESSAGE_UNIT.2**: every element of $.message.intent['bpp/providers'][*].items[*].quantity.unitized.measure.unit must be in ["unit", "gram", "dozen", "kilogram", "tonne", "litre", "millilitre"]
	
	- **condition REQUIRED_MESSAGE_VALUE_36**: $.message.intent['bpp/providers'][*].items[*].quantity.unitized.measure.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.intent['bpp/providers'][*].items[*].quantity.unitized.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_38**: $.message.intent['bpp/providers'][*].items[*].quantity.available.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_39**: $.message.intent['bpp/providers'][*].items[*].quantity.maximum.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_40**: $.message.intent['bpp/providers'][*].items[*].quantity.maximum.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CATEGORY_ID**: $.message.intent['bpp/providers'][*].category_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ITEMSONDCORGRETURNABLE**: $.message.intent['bpp/providers'][*].items[*]['@ondc/org/returnable'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_RATING**: $.message.intent['bpp/providers'][*].rating must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ITEMSONDCORGCANCELLABLE**: $.message.intent['bpp/providers'][*].items[*]['@ondc/org/cancellable'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ITEMSONDCORGAVAILABLE_ON_COD**: $.message.intent['bpp/providers'][*].items[*]['@ondc/org/available_on_cod'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.intent['bpp/providers'][*].time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_DURATION**: $.message.intent['bpp/providers'][*].items[*].replacement_terms[*].replace_within.duration must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ITEMSONDCORGRETURN_WINDOW**: $.message.intent['bpp/providers'][*].items[*]['@ondc/org/return_window'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ITEMSONDCORGSELLER_PICKUP_RETURN**: $.message.intent['bpp/providers'][*].items[*]['@ondc/org/seller_pickup_return'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ITEMSONDCORGTIME_TO_SHIP**: $.message.intent['bpp/providers'][*].items[*]['@ondc/org/time_to_ship'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ITEMSONDCORGCONTACT_DETAILS_CONSUMER_CARE**: $.message.intent['bpp/providers'][*].items[*]['@ondc/org/contact_details_consumer_care'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_RATING_52**: $.message.intent['bpp/providers'][*].rating must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE_53**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_53.1**: $.message.intent['bpp/providers'][*].fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_53.2**: every element of $.message.intent['bpp/providers'][*].fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
	- **condition REQUIRED_MESSAGE_LABEL**: $.message.intent['bpp/providers'][*].time.label must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP_55**: $.message.intent['bpp/providers'][*].time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_56**: $.message.intent['bpp/providers'][*].locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LABEL_57**: $.message.intent['bpp/providers'][*].locations[*].time.label must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP_58**: $.message.intent['bpp/providers'][*].locations[*].time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_START**: $.message.intent['bpp/providers'][*].locations[*].time.range.start must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_60**: $.message.intent['bpp/providers'][*].categories[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_61**: $.message.intent['bpp/providers'][*].categories[*].descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC_62**: $.message.intent['bpp/providers'][*].categories[*].descriptor.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LONG_DESC_63**: $.message.intent['bpp/providers'][*].categories[*].descriptor.long_desc must be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.intent['bpp/fulfillments'][*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent['bpp/fulfillments'][*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_2**: every element of $.message.intent['bpp/providers'][*].fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_2** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent['bpp/providers'][*].fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_UNIT**: every element of $.message.intent['bpp/providers'][*].items[*].quantity.unitized.measure.unit must be in ["unit", "gram", "dozen", "kilogram", "tonne", "litre", "millilitre"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_UNIT** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent['bpp/providers'][*].items[*].quantity.unitized.measure.unit must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.intent['bpp/providers'][*].descriptor.code must be in ["Disc_Pct", "Disc_Amt", "BuyXGetY", "Freebie"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.intent['bpp/providers'][*].descriptor.code must **not** be present in the payload

- **on_select** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_14**: $.message.order.provider.locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_ID**: $.message.order.items[*].fulfillment_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TYPE**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENTSONDCORGCATEGORY**: $.message.order.fulfillments[*]['@ondc/org/category'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TRACKING**: $.message.order.fulfillments[*].tracking must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENTSONDCORGCATEGORY_21**: $.message.order.fulfillments[*]['@ondc/org/category'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENTSONDCORGTAT**: $.message.order.fulfillments[*]['@ondc/org/TAT'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Serviceable", "Non-Serviceable"]
	
	- **condition REQUIRED_MESSAGE_TTL**: $.message.order.quote.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_28**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_29**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TITLE**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Serviceable", "Non-Serviceable"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT**: every element of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["0", "99"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.available.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT_5**: every element of $.message.order.quote.breakup[*].item.quantity.maximum.count must be in ["0", "10"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.maximum.count must **not** be present in the payload

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_14**: $.message.order.provider.locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order.items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_ID**: $.message.order.items[*].fulfillment_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.billing.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.billing.email must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT**: every element of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["0", "99"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.available.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT_5**: every element of $.message.order.quote.breakup[*].item.quantity.maximum.count must be in ["0", "10"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT_5** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.maximum.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must be in ["Pending", "Packed", "Pickup-approved", "Pickup-rejected", "Order-picked-up", "Out-for-delivery", "Order-delivered", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_7**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COLLECTED_BY**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP", "SOR"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COLLECTED_BY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.collected_by must **not** be present in the payload

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATE.1**: $.message.order.state must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATE.2**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.provider.locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order.items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_ID**: $.message.order.items[*].fulfillment_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_24**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.billing.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_31**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PROVIDER_ID**: $.message.order.fulfillments[*].provider_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENTSONDCORGPROVIDER_NAME**: $.message.order.fulfillments[*]['@ondc/org/provider_name'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Packed", "Pickup-approved", "Pickup-rejected", "Order-picked-up", "Out-for-delivery", "Order-delivered", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed"]
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
	- **condition REQUIRED_MESSAGE_TRACKING**: $.message.order.fulfillments[*].tracking must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENTSONDCORGTAT**: $.message.order.fulfillments[*]['@ondc/org/TAT'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_38**: $.message.order.fulfillments[*].start.location.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_39**: $.message.order.fulfillments[*].start.location.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS_41**: $.message.order.fulfillments[*].end.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_42**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_43**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_44**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_45**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_46**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_47**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_48**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_49**: $.message.order.fulfillments[*].end.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_50**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL_51**: $.message.order.fulfillments[*].end.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_55**: $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TITLE**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_58**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_59**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_60**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_61**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TTL**: $.message.order.quote.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_URI**: $.message.order.payment.uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TL_METHOD**: $.message.order.payment.tl_method must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AMOUNT**: $.message.order.payment.params.amount must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_66**: $.message.order.payment.params.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.order.payment.status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]
	
	- **condition REQUIRED_MESSAGE_TYPE_68**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_68.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_68.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_BANK_ACCOUNT_NO**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_IFSC_CODE**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BENEFICIARY_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_COUNTERPARTY**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_PHASE**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.1**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be present in the payload
	  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.2**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]
	
	- **condition REQUIRED_MESSAGE_BANK_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].bank_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BRANCH_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].branch_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY.1**: $.message.order.payment.collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY.2**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
	- **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE.1**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE.2**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
	
	- **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_AMOUNT**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT_80**: $.message.order.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_81**: $.message.order.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_82**: $.message.order.offers[*].id must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Packed", "Pickup-approved", "Pickup-rejected", "Order-picked-up", "Out-for-delivery", "Order-delivered", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT**: every element of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["0", "99"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.available.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT_6**: every element of $.message.order.quote.breakup[*].item.quantity.maximum.count must be in ["0", "10"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.maximum.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_7**: every element of $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must be in ["Pending", "Packed", "Pickup-approved", "Pickup-rejected", "Order-picked-up", "Out-for-delivery", "Order-delivered", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.cancellation_terms[*].fulfillment_state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_8**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COLLECTED_BY**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COLLECTED_BY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.collected_by must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS**: every element of $.message.order.payment['@ondc/org/settlement_basis'] must be in ["shipment", "delivery", "return_window_expiry"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_basis'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.state must **not** be present in the payload

- **on_track** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.tracking.status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.tracking.status must be in ["active", "inactive"]
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.tracking.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.tracking.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.tracking.location.time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.tracking.location.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_URL**: $.message.tracking.url must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.tracking.status must be in ["active", "inactive"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.tracking.status must **not** be present in the payload

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATE.1**: $.message.order.state must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATE.2**: every element of $.message.order.state must be in ["Cancelled"]
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order.items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_ID**: $.message.order.items[*].fulfillment_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_18**: $.message.order.provider.locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_23**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.billing.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_30**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENTSONDCORGPROVIDER_NAME**: $.message.order.fulfillments[*]['@ondc/org/provider_name'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENTSONDCORGTAT**: $.message.order.fulfillments[*]['@ondc/org/TAT'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Cancelled", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed"]
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
	- **condition REQUIRED_MESSAGE_TRACKING**: $.message.order.fulfillments[*].tracking must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_36**: $.message.order.fulfillments[*].start.location.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_37**: $.message.order.fulfillments[*].start.location.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_39**: $.message.order.fulfillments[*].start.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_40**: $.message.order.fulfillments[*].start.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_41**: $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_42**: $.message.order.fulfillments[*].start.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL_43**: $.message.order.fulfillments[*].start.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_44**: $.message.order.fulfillments[*].start.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_45**: $.message.order.fulfillments[*].end.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL_46**: $.message.order.fulfillments[*].end.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_47**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS_48**: $.message.order.fulfillments[*].end.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_49**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_50**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_51**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_52**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_53**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_54**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_55**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_59**: $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TITLE**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_62**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_63**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_64**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_65**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TTL**: $.message.order.quote.ttl must be present in the payload
	
	- **condition REQUIRED_MESSAGE_URI**: $.message.order.payment.uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TL_METHOD**: $.message.order.payment.tl_method must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AMOUNT**: $.message.order.payment.params.amount must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_70**: $.message.order.payment.params.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TRANSACTION_ID**: $.message.order.payment.params.transaction_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.order.payment.status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]
	
	- **condition REQUIRED_MESSAGE_TYPE_73**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_73.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_73.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY.1**: $.message.order.payment.collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY.2**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
	- **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE.1**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE.2**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
	
	- **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_AMOUNT**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_COUNTERPARTY**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_PHASE**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.1**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be present in the payload
	  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.2**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]
	
	- **condition REQUIRED_MESSAGE_UPI_ADDRESS**: $.message.order.payment['@ondc/org/settlement_details'][*].upi_address must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_BANK_ACCOUNT_NO**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_IFSC_CODE**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BENEFICIARY_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BANK_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].bank_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BRANCH_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].branch_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_86**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT_87**: $.message.order.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_88**: $.message.order.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY_89**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_89.1**: $.message.order.payment.collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY_89.2**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
	- **condition REQUIRED_MESSAGE_END**: $.message.order.payment.time.range.end must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Cancelled"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.state must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Cancelled", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT**: every element of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["0", "99"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.available.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT_7**: every element of $.message.order.quote.breakup[*].item.quantity.maximum.count must be in ["0", "10"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.maximum.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_8**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COLLECTED_BY**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COLLECTED_BY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.collected_by must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS**: every element of $.message.order.payment['@ondc/org/settlement_basis'] must be in ["shipment", "delivery", "return_window_expiry"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_basis'] must **not** be present in the payload

- **on_update** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATE.1**: $.message.order.state must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATE.2**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.provider.locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order.items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_ID**: $.message.order.items[*].fulfillment_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_25**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.billing.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_30**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENTSONDCORGPROVIDER_NAME**: $.message.order.fulfillments[*]['@ondc/org/provider_name'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Accepted", "Cancelled", "Pending", "Order-delivered", "Return_Initiated", "Return_Pick_Failed", "Return_Approved", "Return_Picked", "Return_Delivered", "Liquidated", "Return_Rejected"]
	
	- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.fulfillments[*].type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.fulfillments[*].type must be in ["Cancel", "Delivery", "Return"]
	
	- **condition REQUIRED_MESSAGE_TRACKING**: $.message.order.fulfillments[*].tracking must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENTSONDCORGTAT**: $.message.order.fulfillments[*]['@ondc/org/TAT'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_36**: $.message.order.fulfillments[*].start.location.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_37**: $.message.order.fulfillments[*].start.location.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.fulfillments[*].start.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_40**: $.message.order.fulfillments[*].start.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_42**: $.message.order.fulfillments[*].start.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE_43**: $.message.order.fulfillments[*].start.instructions.code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_44**: $.message.order.fulfillments[*].start.instructions.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.order.fulfillments[*].start.instructions.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LONG_DESC**: $.message.order.fulfillments[*].start.instructions.long_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_47**: $.message.order.fulfillments[*].start.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL_48**: $.message.order.fulfillments[*].start.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_START**: $.message.order.fulfillments[*].start.time.range.start must be present in the payload
	
	- **condition REQUIRED_MESSAGE_END**: $.message.order.fulfillments[*].start.time.range.end must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.order.fulfillments[*].start.time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS_52**: $.message.order.fulfillments[*].end.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_53**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_55**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_56**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_57**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_58**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_59**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_60**: $.message.order.fulfillments[*].end.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_61**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL_62**: $.message.order.fulfillments[*].end.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_START_63**: $.message.order.fulfillments[*].end.time.range.start must be present in the payload
	
	- **condition REQUIRED_MESSAGE_END_64**: $.message.order.fulfillments[*].end.time.range.end must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP_65**: $.message.order.fulfillments[*].end.time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AMOUNT**: $.message.order.payment.params.amount must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_67**: $.message.order.payment.params.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TRANSACTION_ID**: $.message.order.payment.params.transaction_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.order.payment.status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]
	
	- **condition REQUIRED_MESSAGE_TYPE_70**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_70.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_70.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY.1**: $.message.order.payment.collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY.2**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
	- **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE.1**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE.2**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
	
	- **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_AMOUNT**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_COUNTERPARTY**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_PHASE**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.1**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be present in the payload
	  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.2**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]
	
	- **condition REQUIRED_MESSAGE_BENEFICIARY_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_BANK_ACCOUNT_NO**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_IFSC_CODE**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BANK_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].bank_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BRANCH_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].branch_name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_83**: $.message.order.updated_at must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Accepted", "Cancelled", "Pending", "Order-delivered", "Return_Initiated", "Return_Pick_Failed", "Return_Approved", "Return_Picked", "Return_Delivered", "Liquidated", "Return_Rejected"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Cancel", "Delivery", "Return"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_4**: every element of $.message.order.fulfillments[*].end.instructions.code must be in ["1", "2", "3", "4"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_4** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT**: every element of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["0", "99"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.available.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT_7**: every element of $.message.order.quote.breakup[*].item.quantity.maximum.count must be in ["0", "10"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT_7** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.maximum.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE_8**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE_8** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COLLECTED_BY**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COLLECTED_BY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.collected_by must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS**: every element of $.message.order.payment['@ondc/org/settlement_basis'] must be in ["shipment", "delivery", "return_window_expiry"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_basis'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.state must **not** be present in the payload

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
	  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
	- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload
	
	- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload
	
	- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload
	
	- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATE.1**: $.message.order.state must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATE.2**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
	- **condition REQUIRED_MESSAGE_ID_15**: $.message.order.provider.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_16**: $.message.order.provider.locations[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_17**: $.message.order.items[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT**: $.message.order.items[*].quantity.count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENT_ID**: $.message.order.items[*].fulfillment_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME**: $.message.order.billing.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.billing.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.billing.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY**: $.message.order.billing.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_24**: $.message.order.billing.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.billing.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.billing.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.billing.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_30**: $.message.order.fulfillments[*].id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENTSONDCORGPROVIDER_NAME**: $.message.order.fulfillments[*]['@ondc/org/provider_name'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CODE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_CODE.1**: $.message.order.fulfillments[*].state.descriptor.code must be present in the payload
	  - **condition REQUIRED_MESSAGE_CODE.2**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Packed", "Pickup-approved", "Pickup-rejected", "Order-picked-up", "Out-for-delivery", "Order-delivered", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed"]
	
	- **condition REQUIRED_MESSAGE_TYPE**: $.message.order.fulfillments[*].type must be present in the payload
	
	- **condition REQUIRED_MESSAGE_FULFILLMENTSONDCORGTAT**: $.message.order.fulfillments[*]['@ondc/org/TAT'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_ID_35**: $.message.order.fulfillments[*].start.location.id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_36**: $.message.order.fulfillments[*].start.location.descriptor.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS**: $.message.order.fulfillments[*].start.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_38**: $.message.order.fulfillments[*].start.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_39**: $.message.order.fulfillments[*].start.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_40**: $.message.order.fulfillments[*].start.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_41**: $.message.order.fulfillments[*].start.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_42**: $.message.order.fulfillments[*].start.instructions.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SHORT_DESC**: $.message.order.fulfillments[*].start.instructions.short_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LONG_DESC**: $.message.order.fulfillments[*].start.instructions.long_desc must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_45**: $.message.order.fulfillments[*].start.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_START**: $.message.order.fulfillments[*].start.time.range.start must be present in the payload
	
	- **condition REQUIRED_MESSAGE_END**: $.message.order.fulfillments[*].start.time.range.end must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP**: $.message.order.fulfillments[*].start.time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_GPS_49**: $.message.order.fulfillments[*].end.location.gps must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_50**: $.message.order.fulfillments[*].end.location.address.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BUILDING_51**: $.message.order.fulfillments[*].end.location.address.building must be present in the payload
	
	- **condition REQUIRED_MESSAGE_LOCALITY_52**: $.message.order.fulfillments[*].end.location.address.locality must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CITY_53**: $.message.order.fulfillments[*].end.location.address.city must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATE_54**: $.message.order.fulfillments[*].end.location.address.state must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNTRY_55**: $.message.order.fulfillments[*].end.location.address.country must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AREA_CODE_56**: $.message.order.fulfillments[*].end.location.address.area_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_NAME_57**: $.message.order.fulfillments[*].end.person.name must be present in the payload
	
	- **condition REQUIRED_MESSAGE_PHONE_58**: $.message.order.fulfillments[*].end.contact.phone must be present in the payload
	
	- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.fulfillments[*].end.contact.email must be present in the payload
	
	- **condition REQUIRED_MESSAGE_START_60**: $.message.order.fulfillments[*].end.time.range.start must be present in the payload
	
	- **condition REQUIRED_MESSAGE_END_61**: $.message.order.fulfillments[*].end.time.range.end must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TIMESTAMP_62**: $.message.order.fulfillments[*].end.time.timestamp must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.quote.price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload
	
	- **condition REQUIRED_MESSAGE_COUNT_66**: $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TITLE**: $.message.order.quote.breakup[*].title must be present in the payload
	
	- **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.1**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be present in the payload
	  - **condition REQUIRED_MESSAGE_BREAKUPONDCORGTITLE_TYPE.2**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
	- **condition REQUIRED_MESSAGE_CURRENCY_69**: $.message.order.quote.breakup[*].price.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_VALUE_70**: $.message.order.quote.breakup[*].price.value must be present in the payload
	
	- **condition REQUIRED_MESSAGE_URI**: $.message.order.payment.uri must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TL_METHOD**: $.message.order.payment.tl_method must be present in the payload
	
	- **condition REQUIRED_MESSAGE_AMOUNT**: $.message.order.payment.params.amount must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CURRENCY_74**: $.message.order.payment.params.currency must be present in the payload
	
	- **condition REQUIRED_MESSAGE_TRANSACTION_ID**: $.message.order.payment.params.transaction_id must be present in the payload
	
	- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.order.payment.status must be present in the payload
	  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]
	
	- **condition REQUIRED_MESSAGE_TYPE_77**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_TYPE_77.1**: $.message.order.payment.type must be present in the payload
	  - **condition REQUIRED_MESSAGE_TYPE_77.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition REQUIRED_MESSAGE_COLLECTED_BY**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY.1**: $.message.order.payment.collected_by must be present in the payload
	  - **condition REQUIRED_MESSAGE_COLLECTED_BY.2**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_COUNTERPARTY**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE**: all of the following sub conditions must be met:
	
	  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.1**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be present in the payload
	  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.2**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_BANK_ACCOUNT_NO**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload
	
	- **condition REQUIRED_MESSAGE_SETTLEMENT_IFSC_CODE**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload
	
	- **condition REQUIRED_MESSAGE_CREATED_AT_83**: $.message.order.created_at must be present in the payload
	
	- **condition REQUIRED_MESSAGE_UPDATED_AT_84**: $.message.order.updated_at must be present in the payload
	
	- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]
	
		> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.context.domain must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["Pending", "Packed", "Pickup-approved", "Pickup-rejected", "Order-picked-up", "Out-for-delivery", "Order-delivered", "RTO-Initiated", "RTO-Delivered", "RTO-Disposed"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].state.descriptor.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_CODE_3**: every element of $.message.order.fulfillments[*].end.instructions.code must be in ["1", "2", "3", "4"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_CODE_3** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.fulfillments[*].end.instructions.code must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT**: every element of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["0", "99"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.available.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COUNT_6**: every element of $.message.order.quote.breakup[*].item.quantity.maximum.count must be in ["0", "10"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COUNT_6** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.quote.breakup[*].item.quantity.maximum.count must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_COLLECTED_BY**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_COLLECTED_BY** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.collected_by must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment.status must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS**: every element of $.message.order.payment['@ondc/org/settlement_basis'] must be in ["shipment", "delivery", "return_window_expiry"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.payment['@ondc/org/settlement_basis'] must **not** be present in the payload
	
	- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]
	
		> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
		>
		> - **condition B**: $.message.order.state must **not** be present in the payload