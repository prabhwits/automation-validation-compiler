

- **search** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.message.intent.fulfillment.vehicle.category must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["search"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition validate_enum_5**: every element of $.message.intent.fulfillment.vehicle.category must be in ["METRO"]
	
	- **condition validate_enum_8**: every element of $.message.intent.fulfillment.stops[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]

- **select** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.context.bpp_id must be in ["null"]
	
	- **condition validate_attribute_13**: no element of $.context.bpp_uri must be in ["null"]
	
	- **condition validate_attribute_14**: no element of $.message.order.items[*].id must be in ["null"]
	
	- **condition validate_attribute_15**: no element of $.message.order.items[*].quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_16**: no element of $.message.order.provider.id must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["select"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]

- **init** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.context.bpp_id must be in ["null"]
	
	- **condition validate_attribute_13**: no element of $.context.bpp_uri must be in ["null"]
	
	- **condition validate_attribute_14**: no element of $.message.order.items[*].id must be in ["null"]
	
	- **condition validate_attribute_15**: no element of $.message.order.items[*].quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_16**: no element of $.message.order.provider.id must be in ["null"]
	
	- **condition validate_attribute_17**: no element of $.message.order.payments[*].collected_by must be in ["null"]
	
	- **condition validate_attribute_18**: no element of $.message.order.payments[*].status must be in ["null"]
	
	- **condition validate_attribute_19**: no element of $.message.order.payments[*].type must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["init"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_3**: every element of $.context.location.city.code must be in ["std:080"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
	- **condition validate_enum_13**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]

- **confirm** : All the following sub conditions must pass as per the api requirement

	- **condition payments_test**: all of the following sub conditions must be met:
	
	  - **condition payments_test.1**: no element of $.params.transaction_id must be in ["null"]
	  - **condition payments_test.2**: every element of $.status must be in ["PAID"]
	
		> Note: **Condition payments_test** can be skipped if the following conditions are met:
		>
		> - **condition B**: no element of $.status must be in ["PAID"]
	
	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.context.bpp_id must be in ["null"]
	
	- **condition validate_attribute_13**: no element of $.context.bpp_uri must be in ["null"]
	
	- **condition validate_attribute_14**: no element of $.message.order.items[*].id must be in ["null"]
	
	- **condition validate_attribute_15**: no element of $.message.order.items[*].quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_16**: no element of $.message.order.provider.id must be in ["null"]
	
	- **condition validate_attribute_17**: no element of $.message.order.payments[*].id must be in ["null"]
	
	- **condition validate_attribute_18**: no element of $.message.order.payments[*].collected_by must be in ["null"]
	
	- **condition validate_attribute_19**: no element of $.message.order.payments[*].status must be in ["null"]
	
	- **condition validate_attribute_20**: no element of $.message.order.payments[*].type must be in ["null"]
	
	- **condition validate_attribute_21**: no element of $.message.order.payments[*].params.transaction_id must be in ["null"]
	
	- **condition validate_attribute_22**: no element of $.message.order.payments[*].params.currency must be in ["null"]
	
	- **condition validate_attribute_23**: no element of $.message.order.payments[*].params.amount must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["confirm"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR", "VEHICLE_NUMBER"]
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition validate_enum_16**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]

- **status** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.context.bpp_id must be in ["null"]
	
	- **condition validate_attribute_13**: no element of $.context.bpp_uri must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["status"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition order_id_check**: no element of $.message.order_id must be in ["null"]

- **cancel** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.context.bpp_id must be in ["null"]
	
	- **condition validate_attribute_13**: no element of $.context.bpp_uri must be in ["null"]
	
	- **condition validate_attribute_14**: no element of $.message.order_id must be in ["null"]
	
	- **condition validate_attribute_15**: no element of $.message.cancellation_reason_id must be in ["null"]
	
	- **condition validate_attribute_16**: no element of $.message.descriptor.code must be in ["null"]
	
	- **condition validate_attribute_17**: no element of $.message.descriptor.name must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["cancel"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_3**: every element of $.context.location.city.code must be in ["std:080"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition validate_enum_5**: every element of $.message.descriptor.code must be in ["SOFT-CANCEL", "CONFIRM-CANCEL"]

- **on_search** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.context.bpp_id must be in ["null"]
	
	- **condition validate_attribute_13**: no element of $.context.bpp_uri must be in ["null"]
	
	- **condition validate_attribute_14**: no element of $.message.catalog.descriptor.name must be in ["null"]
	
	- **condition validate_attribute_15**: no element of $.message.catalog.providers[*].id must be in ["null"]
	
	- **condition validate_attribute_16**: no element of $.message.catalog.providers[*].descriptor.name must be in ["null"]
	
	- **condition validate_attribute_17**: no element of $.message.catalog.providers[*].fulfillments[*].id must be in ["null"]
	
	- **condition validate_attribute_18**: no element of $.message.catalog.providers[*].fulfillments[*].type must be in ["null"]
	
	- **condition validate_attribute_19**: no element of $.message.catalog.providers[*].fulfillments[*].id must be in ["null"]
	
	- **condition validate_attribute_20**: no element of $.message.catalog.providers[*].categories[*].id must be in ["null"]
	
	- **condition validate_attribute_21**: no element of $.message.catalog.providers[*].categories[*].descriptor.code must be in ["null"]
	
	- **condition validate_attribute_22**: no element of $.message.catalog.providers[*].time.range.start must be in ["null"]
	
	- **condition validate_attribute_23**: no element of $.message.catalog.providers[*].time.range.end must be in ["null"]
	
	- **condition validate_attribute_24**: no element of $.message.catalog.providers[*].payments[*].collected_by must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_search"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition validate_enum_5**: every element of $.message.catalog.providers[*].categories[*].descriptor.code must be in ["TICKET", "PASS"]
	
	- **condition validate_enum_7**: every element of $.message.catalog.providers[*].fulfillments[*].vehicle.category must be in ["METRO"]
	
	- **condition validate_enum_9**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
	- **condition validate_enum_10**: every element of $.message.catalog.providers[*].fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
	- **condition validate_enum_11**: every element of $.message.catalog.providers[*].fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
	- **condition validate_enum_13**: every element of $.message.catalog.providers[*].fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
	- **condition validate_enum_14**: every element of $.message.catalog.providers[*].payments[*].status must be in ["NOT-PAID", "PAID"]
	
	- **condition validate_enum_15**: every element of $.message.catalog.providers[*].payments[*].collected_by must be in ["BPP", "BAP"]
	
	- **condition validate_enum_16**: every element of $.message.catalog.providers[*].payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]

- **on_select** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.context.bpp_id must be in ["null"]
	
	- **condition validate_attribute_13**: no element of $.context.bpp_uri must be in ["null"]
	
	- **condition validate_attribute_14**: no element of $.message.order.items[*].id must be in ["null"]
	
	- **condition validate_attribute_15**: no element of $.message.order.items[*].descriptor.code must be in ["null"]
	
	- **condition validate_attribute_16**: no element of $.message.order.items[*].price.currency must be in ["null"]
	
	- **condition validate_attribute_17**: no element of $.message.order.items[*].price.value must be in ["null"]
	
	- **condition validate_attribute_18**: no element of $.message.order.items[*].quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_19**: no element of $.message.order.items[*].fulfillment_ids[*] must be in ["null"]
	
	- **condition validate_attribute_20**: no element of $.message.order.items[*].time.label must be in ["null"]
	
	- **condition validate_attribute_21**: no element of $.message.order.items[*].time.duration must be in ["null"]
	
	- **condition validate_attribute_22**: no element of $.message.order.provider.id must be in ["null"]
	
	- **condition validate_attribute_23**: no element of $.message.order.provider.descriptor.name must be in ["null"]
	
	- **condition validate_attribute_24**: no element of $.message.order.fulfillments[*].id must be in ["null"]
	
	- **condition validate_attribute_25**: no element of $.message.order.quote.price.value must be in ["null"]
	
	- **condition validate_attribute_26**: no element of $.message.order.quote.price.currency must be in ["null"]
	
	- **condition validate_attribute_27**: no element of $.message.order.quote.breakup[*].title must be in ["null"]
	
	- **condition validate_attribute_28**: no element of $.message.order.items[*].category_ids[*] must be in ["null"]
	
	- **condition validate_attribute_29**: no element of $.message.order.provider.time.range.start must be in ["null"]
	
	- **condition validate_attribute_30**: no element of $.message.order.provider.time.range.end must be in ["null"]
	
	- **condition validate_attribute_31**: no element of $.message.order.fulfillments[*].type must be in ["null"]
	
	- **condition validate_attribute_32**: no element of $.message.order.quote.breakup[*].item.price.currency must be in ["null"]
	
	- **condition validate_attribute_33**: no element of $.message.order.quote.breakup[*].item.price.value must be in ["null"]
	
	- **condition validate_attribute_34**: no element of $.message.order.quote.breakup[*].item.quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_35**: no element of $.message.order.cancellation_terms[*].external_ref.url must be in ["null"]
	
	- **condition validate_attribute_36**: no element of $.message.order.cancellation_terms[*].external_ref.mimetype must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_select"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
	- **condition validate_enum_13**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]

- **on_init** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.context.bpp_id must be in ["null"]
	
	- **condition validate_attribute_13**: no element of $.context.bpp_uri must be in ["null"]
	
	- **condition validate_attribute_14**: no element of $.message.order.items[*].id must be in ["null"]
	
	- **condition validate_attribute_15**: no element of $.message.order.items[*].descriptor.code must be in ["null"]
	
	- **condition validate_attribute_16**: no element of $.message.order.items[*].price.currency must be in ["null"]
	
	- **condition validate_attribute_17**: no element of $.message.order.items[*].price.value must be in ["null"]
	
	- **condition validate_attribute_18**: no element of $.message.order.items[*].quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_19**: no element of $.message.order.items[*].fulfillment_ids[*] must be in ["null"]
	
	- **condition validate_attribute_20**: no element of $.message.order.items[*].time.label must be in ["null"]
	
	- **condition validate_attribute_21**: no element of $.message.order.items[*].time.duration must be in ["null"]
	
	- **condition validate_attribute_22**: no element of $.message.order.provider.id must be in ["null"]
	
	- **condition validate_attribute_23**: no element of $.message.order.provider.descriptor.name must be in ["null"]
	
	- **condition validate_attribute_24**: no element of $.message.order.fulfillments[*].id must be in ["null"]
	
	- **condition validate_attribute_25**: no element of $.message.order.quote.price.value must be in ["null"]
	
	- **condition validate_attribute_26**: no element of $.message.order.quote.price.currency must be in ["null"]
	
	- **condition validate_attribute_27**: no element of $.message.order.quote.breakup[*].title must be in ["null"]
	
	- **condition validate_attribute_28**: no element of $.message.order.payments[*].id must be in ["null"]
	
	- **condition validate_attribute_29**: no element of $.message.order.payments[*].collected_by must be in ["null"]
	
	- **condition validate_attribute_30**: no element of $.message.order.payments[*].status must be in ["null"]
	
	- **condition validate_attribute_31**: no element of $.message.order.payments[*].type must be in ["null"]
	
	- **condition validate_attribute_32**: no element of $.message.order.items[*].category_ids[*] must be in ["null"]
	
	- **condition validate_attribute_33**: no element of $.message.order.provider.time.range.start must be in ["null"]
	
	- **condition validate_attribute_34**: no element of $.message.order.provider.time.range.end must be in ["null"]
	
	- **condition validate_attribute_35**: no element of $.message.order.fulfillments[*].type must be in ["null"]
	
	- **condition validate_attribute_36**: no element of $.message.order.quote.breakup[*].item.quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_37**: no element of $.message.order.quote.breakup[*].item.price.value must be in ["null"]
	
	- **condition validate_attribute_38**: no element of $.message.order.quote.breakup[*].item.price.currency must be in ["null"]
	
	- **condition validate_attribute_39**: no element of $.message.order.cancellation_terms[*].external_ref.url must be in ["null"]
	
	- **condition validate_attribute_40**: no element of $.message.order.cancellation_terms[*].external_ref.mimetype must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_init"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_3**: every element of $.context.location.city.code must be in ["std:080"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition validate_enum_16**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]

- **on_confirm** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.context.bpp_id must be in ["null"]
	
	- **condition validate_attribute_13**: no element of $.context.bpp_uri must be in ["null"]
	
	- **condition validate_attribute_14**: no element of $.message.order.id must be in ["null"]
	
	- **condition validate_attribute_15**: no element of $.message.order.items[*].id must be in ["null"]
	
	- **condition validate_attribute_16**: no element of $.message.order.items[*].descriptor.name must be in ["null"]
	
	- **condition validate_attribute_17**: no element of $.message.order.items[*].descriptor.code must be in ["null"]
	
	- **condition validate_attribute_18**: no element of $.message.order.items[*].price.currency must be in ["null"]
	
	- **condition validate_attribute_19**: no element of $.message.order.items[*].price.value must be in ["null"]
	
	- **condition validate_attribute_20**: no element of $.message.order.items[*].quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_21**: no element of $.message.order.items[*].fulfillment_ids[*] must be in ["null"]
	
	- **condition validate_attribute_22**: no element of $.message.order.items[*].time.label must be in ["null"]
	
	- **condition validate_attribute_23**: no element of $.message.order.items[*].time.duration must be in ["null"]
	
	- **condition validate_attribute_24**: no element of $.message.order.provider.id must be in ["null"]
	
	- **condition validate_attribute_25**: no element of $.message.order.provider.descriptor.name must be in ["null"]
	
	- **condition validate_attribute_26**: no element of $.message.order.fulfillments[*].id must be in ["null"]
	
	- **condition validate_attribute_27**: no element of $.message.order.quote.price.value must be in ["null"]
	
	- **condition validate_attribute_28**: no element of $.message.order.quote.price.currency must be in ["null"]
	
	- **condition validate_attribute_29**: no element of $.message.order.quote.breakup[*].title must be in ["null"]
	
	- **condition validate_attribute_30**: no element of $.message.order.payments[*].id must be in ["null"]
	
	- **condition validate_attribute_31**: no element of $.message.order.payments[*].collected_by must be in ["null"]
	
	- **condition validate_attribute_32**: no element of $.message.order.payments[*].status must be in ["null"]
	
	- **condition validate_attribute_33**: no element of $.message.order.payments[*].type must be in ["null"]
	
	- **condition validate_attribute_34**: no element of $.message.order.payments[*].params.transaction_id must be in ["null"]
	
	- **condition validate_attribute_35**: no element of $.message.order.payments[*].params.currency must be in ["null"]
	
	- **condition validate_attribute_36**: no element of $.message.order.payments[*].params.amount must be in ["null"]
	
	- **condition validate_attribute_37**: no element of $.message.order.cancellation_terms[*].cancel_by.duration must be in ["null"]
	
	- **condition validate_attribute_38**: no element of $.message.order.status must be in ["null"]
	
	- **condition validate_attribute_39**: no element of $.message.order.items[*].category_ids[*] must be in ["null"]
	
	- **condition validate_attribute_40**: no element of $.message.order.provider.time.range.start must be in ["null"]
	
	- **condition validate_attribute_41**: no element of $.message.order.provider.time.range.end must be in ["null"]
	
	- **condition validate_attribute_42**: no element of $.message.order.fulfillments[*].type must be in ["null"]
	
	- **condition validate_attribute_43**: no element of $.message.order.quote.breakup[*].item.price.value must be in ["null"]
	
	- **condition validate_attribute_44**: no element of $.message.order.quote.breakup[*].item.price.currency must be in ["null"]
	
	- **condition validate_attribute_45**: no element of $.message.order.quote.breakup[*].item.quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_46**: no element of $.message.order.cancellation_terms[*].external_ref.url must be in ["null"]
	
	- **condition validate_attribute_47**: no element of $.message.order.cancellation_terms[*].external_ref.mimetype must be in ["null"]
	
	- **condition validate_attribute_48**: no element of $.message.order.created_at must be in ["null"]
	
	- **condition validate_attribute_49**: no element of $.message.order.updated_at must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_confirm"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_3**: every element of $.context.location.city.code must be in ["std:080"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["BUS", "METRO"]
	
	- **condition validate_enum_7**: every element of $.message.order.fulfillments[*].vehicle.variant must be in ["AC", "NON_AC"]
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["OTP", "QR", "VEHICLE_NUMBER"]
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition validate_enum_16**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
	- **condition validate_enum_17**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]

- **on_cancel** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.context.bpp_id must be in ["null"]
	
	- **condition validate_attribute_13**: no element of $.context.bpp_uri must be in ["null"]
	
	- **condition validate_attribute_14**: no element of $.message.order.id must be in ["null"]
	
	- **condition validate_attribute_15**: no element of $.message.order.status must be in ["null"]
	
	- **condition validate_attribute_16**: no element of $.message.order.items[*].id must be in ["null"]
	
	- **condition validate_attribute_17**: no element of $.message.order.items[*].descriptor.name must be in ["null"]
	
	- **condition validate_attribute_18**: no element of $.message.order.items[*].descriptor.code must be in ["null"]
	
	- **condition validate_attribute_19**: no element of $.message.order.items[*].price.currency must be in ["null"]
	
	- **condition validate_attribute_20**: no element of $.message.order.items[*].price.value must be in ["null"]
	
	- **condition validate_attribute_21**: no element of $.message.order.items[*].quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_22**: no element of $.message.order.items[*].fulfillment_ids[*] must be in ["null"]
	
	- **condition validate_attribute_23**: no element of $.message.order.items[*].category_ids[*] must be in ["null"]
	
	- **condition validate_attribute_24**: no element of $.message.order.items[*].time.label must be in ["null"]
	
	- **condition validate_attribute_25**: no element of $.message.order.items[*].time.duration must be in ["null"]
	
	- **condition validate_attribute_26**: no element of $.message.order.provider.id must be in ["null"]
	
	- **condition validate_attribute_27**: no element of $.message.order.provider.descriptor.name must be in ["null"]
	
	- **condition validate_attribute_28**: no element of $.message.order.provider.descriptor.images[*].url must be in ["null"]
	
	- **condition validate_attribute_29**: no element of $.message.order.provider.time.range.start must be in ["null"]
	
	- **condition validate_attribute_30**: no element of $.message.order.provider.time.range.end must be in ["null"]
	
	- **condition validate_attribute_31**: no element of $.message.order.fulfillments[*].id must be in ["null"]
	
	- **condition validate_attribute_32**: no element of $.message.order.fulfillments[*].type must be in ["null"]
	
	- **condition validate_attribute_33**: no element of $.message.order.quote.price.value must be in ["null"]
	
	- **condition validate_attribute_34**: no element of $.message.order.quote.price.currency must be in ["null"]
	
	- **condition validate_attribute_35**: no element of $.message.order.quote.breakup[*].title must be in ["null"]
	
	- **condition validate_attribute_36**: no element of $.message.order.payments[*].id must be in ["null"]
	
	- **condition validate_attribute_37**: no element of $.message.order.payments[*].collected_by must be in ["null"]
	
	- **condition validate_attribute_38**: no element of $.message.order.payments[*].status must be in ["null"]
	
	- **condition validate_attribute_39**: no element of $.message.order.payments[*].type must be in ["null"]
	
	- **condition validate_attribute_40**: no element of $.message.order.payments[*].params.bank_code must be in ["null"]
	
	- **condition validate_attribute_41**: no element of $.message.order.payments[*].params.bank_account_number must be in ["null"]
	
	- **condition validate_attribute_42**: no element of $.message.order.cancellation_terms[*].external_ref.url must be in ["null"]
	
	- **condition validate_attribute_43**: no element of $.message.order.cancellation_terms[*].external_ref.mimetype must be in ["null"]
	
	- **condition validate_attribute_44**: no element of $.message.order.cancellation.cancelled_by must be in ["null"]
	
	- **condition validate_attribute_45**: no element of $.message.order.cancellation.time must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_cancel"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_3**: every element of $.context.location.city.code must be in ["std:080"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition validate_enum_16**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
	- **condition validate_enum_17**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]

- **on_status** : All the following sub conditions must pass as per the api requirement

	- **condition validate_attribute_1**: no element of $.context.location.country.code must be in ["null"]
	
	- **condition validate_attribute_2**: no element of $.context.location.city.code must be in ["null"]
	
	- **condition validate_attribute_3**: no element of $.context.domain must be in ["null"]
	
	- **condition validate_attribute_4**: no element of $.context.timestamp must be in ["null"]
	
	- **condition validate_attribute_5**: no element of $.context.bap_id must be in ["null"]
	
	- **condition validate_attribute_6**: no element of $.context.transaction_id must be in ["null"]
	
	- **condition validate_attribute_7**: no element of $.context.message_id must be in ["null"]
	
	- **condition validate_attribute_8**: no element of $.context.version must be in ["null"]
	
	- **condition validate_attribute_9**: no element of $.context.action must be in ["null"]
	
	- **condition validate_attribute_10**: no element of $.context.bap_uri must be in ["null"]
	
	- **condition validate_attribute_11**: no element of $.context.ttl must be in ["null"]
	
	- **condition validate_attribute_12**: no element of $.context.bpp_id must be in ["null"]
	
	- **condition validate_attribute_13**: no element of $.context.bpp_uri must be in ["null"]
	
	- **condition validate_attribute_14**: no element of $.message.order.id must be in ["null"]
	
	- **condition validate_attribute_15**: no element of $.message.order.status must be in ["null"]
	
	- **condition validate_attribute_16**: no element of $.message.order.items[*].id must be in ["null"]
	
	- **condition validate_attribute_17**: no element of $.message.order.items[*].descriptor.name must be in ["null"]
	
	- **condition validate_attribute_18**: no element of $.message.order.items[*].descriptor.code must be in ["null"]
	
	- **condition validate_attribute_19**: no element of $.message.order.items[*].price.currency must be in ["null"]
	
	- **condition validate_attribute_20**: no element of $.message.order.items[*].price.value must be in ["null"]
	
	- **condition validate_attribute_21**: no element of $.message.order.items[*].quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_22**: no element of $.message.order.items[*].fulfillment_ids[*] must be in ["null"]
	
	- **condition validate_attribute_23**: no element of $.message.order.items[*].time.label must be in ["null"]
	
	- **condition validate_attribute_24**: no element of $.message.order.items[*].time.duration must be in ["null"]
	
	- **condition validate_attribute_25**: no element of $.message.order.provider.id must be in ["null"]
	
	- **condition validate_attribute_26**: no element of $.message.order.provider.descriptor.name must be in ["null"]
	
	- **condition validate_attribute_27**: no element of $.message.order.fulfillments[*].id must be in ["null"]
	
	- **condition validate_attribute_28**: no element of $.message.order.quote.price.value must be in ["null"]
	
	- **condition validate_attribute_29**: no element of $.message.order.quote.price.currency must be in ["null"]
	
	- **condition validate_attribute_30**: no element of $.message.order.quote.breakup[*].title must be in ["null"]
	
	- **condition validate_attribute_31**: no element of $.message.order.payments[*].id must be in ["null"]
	
	- **condition validate_attribute_32**: no element of $.message.order.payments[*].collected_by must be in ["null"]
	
	- **condition validate_attribute_33**: no element of $.message.order.payments[*].status must be in ["null"]
	
	- **condition validate_attribute_34**: no element of $.message.order.payments[*].type must be in ["null"]
	
	- **condition validate_attribute_35**: no element of $.message.order.payments[*].params.transaction_id must be in ["null"]
	
	- **condition validate_attribute_36**: no element of $.message.order.payments[*].params.currency must be in ["null"]
	
	- **condition validate_attribute_37**: no element of $.message.order.payments[*].params.amount must be in ["null"]
	
	- **condition validate_attribute_38**: no element of $.message.order.payments[*].params.bank_code must be in ["null"]
	
	- **condition validate_attribute_39**: no element of $.message.order.payments[*].params.bank_account_number must be in ["null"]
	
	- **condition validate_attribute_40**: no element of $.message.order.payments[*].params.virtual_payment_address must be in ["null"]
	
	- **condition validate_attribute_41**: no element of $.message.order.cancellation_terms[*].cancel_by.duration must be in ["null"]
	
	- **condition validate_attribute_42**: no element of $.message.order.items[*].category_ids[*] must be in ["null"]
	
	- **condition validate_attribute_43**: no element of $.message.order.provider.time.range.start must be in ["null"]
	
	- **condition validate_attribute_44**: no element of $.message.order.provider.time.range.end must be in ["null"]
	
	- **condition validate_attribute_45**: no element of $.message.order.fulfillments[*].type must be in ["null"]
	
	- **condition validate_attribute_46**: no element of $.message.order.quote.breakup[*].item.price.currency must be in ["null"]
	
	- **condition validate_attribute_47**: no element of $.message.order.quote.breakup[*].item.price.value must be in ["null"]
	
	- **condition validate_attribute_48**: no element of $.message.order.quote.breakup[*].item.quantity.selected.count must be in ["null"]
	
	- **condition validate_attribute_49**: no element of $.message.order.cancellation_terms[*].external_ref.url must be in ["null"]
	
	- **condition validate_attribute_50**: no element of $.message.order.cancellation_terms[*].external_ref.mimetype must be in ["null"]
	
	- **condition validate_attribute_51**: no element of $.message.order.created_at must be in ["null"]
	
	- **condition validate_attribute_52**: no element of $.message.order.updated_at must be in ["null"]
	
	- **condition validate_enum_1**: every element of $.context.action must be in ["on_status"]
	
	- **condition validate_enum_2**: every element of $.context.location.country.code must be in ["IND"]
	
	- **condition validate_enum_4**: every element of $.context.domain must be in ["ONDC:TRV11"]
	
	- **condition validate_enum_5**: every element of $.message.order.items[*].descriptor.code must be in ["SJT", "SFSJT", "RJT", "PASS"]
	
	- **condition validate_enum_6**: every element of $.message.order.fulfillments[*].vehicle.category must be in ["METRO"]
	
	- **condition validate_enum_8**: every element of $.message.order.fulfillments[*].type must be in ["ROUTE", "TRIP", "TICKET", "PASS", "STOPS"]
	
	- **condition validate_enum_9**: every element of $.message.order.fulfillments[*].type must be in ["START", "END", "INTERMEDIATE_STOP", "TRANSIT_STOP"]
	
	- **condition validate_enum_10**: every element of $.message.order.fulfillments[*].stops[*].authorization.type must be in ["QR"]
	
	- **condition validate_enum_11**: every element of $.message.order.fulfillments[*].stops[*].authorization.status must be in ["UNCLAIMED", "CLAIMED", "EXPIRED"]
	
	- **condition validate_enum_12**: every element of $.message.order.fulfillments[*].state.descriptor.code must be in ["INACTIVE", "ACTIVE"]
	
	- **condition validate_enum_13**: every element of $.message.order.payments[*].status must be in ["NOT-PAID", "PAID"]
	
	- **condition validate_enum_14**: every element of $.message.order.payments[*].collected_by must be in ["BPP", "BAP"]
	
	- **condition validate_enum_15**: every element of $.message.order.payments[*].type must be in ["PRE-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]
	
	- **condition validate_enum_16**: every element of $.message.order.quote.breakup[*].title must be in ["BASE_PRICE", "REFUND", "CANCELLATION_CHARGES", "OFFER", "TOLL"]
	
	- **condition validate_enum_17**: every element of $.message.order.status must be in ["SOFT_CANCEL", "ACTIVE", "COMPLETE", "CANCELLED", "CANCEL_INITIATED"]