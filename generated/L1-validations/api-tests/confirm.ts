import payloadUtils from "../utils/json-path-utils";
import validations from "../utils/validation-utils";
import {
    testFunctionArray,
    validationInput,
    validationOutput,
} from "../types/test-config";

export default function confirm(input: validationInput): validationOutput {
    const scope = payloadUtils.getJsonPath(input.payload, "$");
    let subResults: validationOutput = [];
    let valid = true;
    for (const testObj of scope) {
        testObj._EXTERNAL = input.externalData;

        function REQUIRED_CONTEXT_DOMAIN(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.domain",
                );
                const enumList = [
                    "ONDC:RET10",
                    "ONDC:RET11",
                    "ONDC:RET12",
                    "ONDC:RET13",
                    "ONDC:RET14",
                    "ONDC:RET15",
                    "ONDC:RET16",
                    "ONDC:RET17",
                    "ONDC:RET18",
                    "ONDC:RET19",
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_DOMAIN**: all of the following sub conditions must be met:

  - **condition REQUIRED_CONTEXT_DOMAIN.1**: $.context.domain must be present in the payload
  - **condition REQUIRED_CONTEXT_DOMAIN.2**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_COUNTRY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.country",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_COUNTRY**: $.context.country must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_CITY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.city",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_CITY**: $.context.city must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_ACTION(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.action",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_ACTION**: $.context.action must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_CORE_VERSION(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.core_version",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_CORE_VERSION**: $.context.core_version must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BAP_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BAP_ID**: $.context.bap_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BAP_URI(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bap_uri",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BAP_URI**: $.context.bap_uri must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BPP_URI(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_uri",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BPP_URI**: $.context.bpp_uri must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TRANSACTION_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.transaction_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_TRANSACTION_ID**: $.context.transaction_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_MESSAGE_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.message_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_MESSAGE_ID**: $.context.message_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TIMESTAMP(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.timestamp",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_TIMESTAMP**: $.context.timestamp must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_BPP_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.bpp_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_BPP_ID**: $.context.bpp_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_CONTEXT_TTL(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(testObj, "$.context.ttl");

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_CONTEXT_TTL**: $.context.ttl must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID(input: validationInput): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID**: $.message.order.id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_STATE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.state",
                );
                const enumList = [
                    "Created",
                    "Accepted",
                    "In-progress",
                    "Completed",
                    "Cancelled",
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_STATE**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_STATE.1**: $.message.order.state must be present in the payload
  - **condition REQUIRED_MESSAGE_STATE.2**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME**: $.message.order.billing.address.name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BUILDING(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.building",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_BUILDING**: $.message.order.billing.address.building must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_LOCALITY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.locality",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_LOCALITY**: $.message.order.billing.address.locality must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CITY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.city",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CITY**: $.message.order.billing.address.city must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_STATE_20(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.state",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_STATE_20**: $.message.order.billing.address.state must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COUNTRY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.country",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_COUNTRY**: $.message.order.billing.address.country must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_AREA_CODE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.area_code",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_AREA_CODE**: $.message.order.billing.address.area_code must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_PHONE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.phone",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_PHONE**: $.message.order.billing.phone must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_EMAIL(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.email",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_EMAIL**: $.message.order.billing.email must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CREATED_AT(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.created_at",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CREATED_AT**: $.message.order.billing.created_at must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_UPDATED_AT(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.updated_at",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_UPDATED_AT**: $.message.order.billing.updated_at must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_27(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_27**: $.message.order.items[*].id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COUNT(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].quantity.maximum.count",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_COUNT**: $.message.order.items[*].quantity.maximum.count must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_FULFILLMENT_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.items[*].fulfillment_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_FULFILLMENT_ID**: $.message.order.items[*].fulfillment_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_30(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_30**: $.message.order.provider.id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_ID_31(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.provider.locations[*].id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_ID_31**: $.message.order.provider.locations[*].id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_URI(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.uri",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_URI**: $.message.order.payment.uri must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TL_METHOD(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.tl_method",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TL_METHOD**: $.message.order.payment.tl_method must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_AMOUNT(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.params.amount",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_AMOUNT**: $.message.order.payment.params.amount must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.params.currency",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY**: $.message.order.payment.params.currency must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TRANSACTION_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.params.transaction_id",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TRANSACTION_ID**: $.message.order.payment.params.transaction_id must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_STATUS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.status",
                );
                const enumList = ["PAID", "NOT-PAID"];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_STATUS**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_STATUS.1**: $.message.order.payment.status must be present in the payload
  - **condition REQUIRED_MESSAGE_STATUS.2**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BENEFICIARY_NAME(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_BENEFICIARY_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].beneficiary_name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BANK_NAME(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_details'][*].bank_name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_BANK_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].bank_name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_SETTLEMENT_BANK_ACCOUNT_NO(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_SETTLEMENT_BANK_ACCOUNT_NO**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_bank_account_no must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_SETTLEMENT_IFSC_CODE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_SETTLEMENT_IFSC_CODE**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_ifsc_code must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_UPI_ADDRESS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_details'][*].upi_address",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_UPI_ADDRESS**: $.message.order.payment['@ondc/org/settlement_details'][*].upi_address must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_SETTLEMENT_COUNTERPARTY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_SETTLEMENT_COUNTERPARTY**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_counterparty must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_SETTLEMENT_PHASE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_SETTLEMENT_PHASE**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_phase must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_SETTLEMENT_TYPE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type",
                );
                const enumList = [
                    "upi",
                    "neft",
                    "rtgs",
                    "wallet",
                    "netbanking",
                    "paylater",
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.1**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be present in the payload
  - **condition REQUIRED_MESSAGE_SETTLEMENT_TYPE.2**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BRANCH_NAME(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_details'][*].branch_name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_BRANCH_NAME**: $.message.order.payment['@ondc/org/settlement_details'][*].branch_name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.type",
                );
                const enumList = [
                    "ON-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TYPE**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_TYPE.1**: $.message.order.payment.type must be present in the payload
  - **condition REQUIRED_MESSAGE_TYPE.2**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COLLECTED_BY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.collected_by",
                );
                const enumList = ["BAP", "BPP"];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_COLLECTED_BY**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_COLLECTED_BY.1**: $.message.order.payment.collected_by must be present in the payload
  - **condition REQUIRED_MESSAGE_COLLECTED_BY.2**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/buyer_app_finder_fee_type']",
                );
                const enumList = ["percent", "amount"];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE.1**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be present in the payload
  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE.2**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_AMOUNT(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/buyer_app_finder_fee_amount']",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_AMOUNT**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_amount'] must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_basis']",
                );
                const enumList = [
                    "shipment",
                    "delivery",
                    "return_window_expiry",
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS.1**: $.message.order.payment['@ondc/org/settlement_basis'] must be present in the payload
  - **condition REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS.2**: every element of $.message.order.payment['@ondc/org/settlement_basis'] must be in ["shipment", "delivery", "return_window_expiry"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_WINDOW(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_window']",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_WINDOW**: $.message.order.payment['@ondc/org/settlement_window'] must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_PAYMENTONDCORGWITHHOLDING_AMOUNT(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/withholding_amount']",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_PAYMENTONDCORGWITHHOLDING_AMOUNT**: $.message.order.payment['@ondc/org/withholding_amount'] must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CREATED_AT_54(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.created_at",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CREATED_AT_54**: $.message.order.created_at must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_UPDATED_AT_55(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.updated_at",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_UPDATED_AT_55**: $.message.order.updated_at must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_LOCALITY_56(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.locality",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_LOCALITY_56**: $.message.order.billing.address.locality must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_NAME_57(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.billing.address.name",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_NAME_57**: $.message.order.billing.address.name must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TYPE_58(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].type",
                );
                const enumList = [
                    "Delivery",
                    "Self-Pickup",
                    "Delivery and Self-Pickup",
                ];

                const validate =
                    validations.arePresent(attr) &&
                    validations.allIn(attr, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TYPE_58**: all of the following sub conditions must be met:

  - **condition REQUIRED_MESSAGE_TYPE_58.1**: $.message.order.fulfillments[*].type must be present in the payload
  - **condition REQUIRED_MESSAGE_TYPE_58.2**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY_59(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.price.currency",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY_59**: $.message.order.quote.price.currency must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.price.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_VALUE**: $.message.order.quote.price.value must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*]['@ondc/org/item_id']",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID**: $.message.order.quote.breakup[*]['@ondc/org/item_id'] must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_COUNT_62(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_COUNT_62**: $.message.order.quote.breakup[*]['@ondc/org/item_quantity'].count must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_TITLE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].title",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_TITLE**: $.message.order.quote.breakup[*].title must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY_64(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].price.currency",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY_64**: $.message.order.quote.breakup[*].price.currency must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_65(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].price.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_VALUE_65**: $.message.order.quote.breakup[*].price.value must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_CURRENCY_66(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].price.currency",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_CURRENCY_66**: $.message.order.quote.breakup[*].price.currency must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function REQUIRED_MESSAGE_VALUE_67(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const attr = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].price.value",
                );

                const validate = validations.arePresent(attr);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition REQUIRED_MESSAGE_VALUE_67**: $.message.order.quote.breakup[*].price.value must be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_CONTEXT_DOMAIN(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "ONDC:RET10",
                    "ONDC:RET11",
                    "ONDC:RET12",
                    "ONDC:RET13",
                    "ONDC:RET14",
                    "ONDC:RET15",
                    "ONDC:RET16",
                    "ONDC:RET17",
                    "ONDC:RET18",
                    "ONDC:RET19",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.context.domain",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_CONTEXT_DOMAIN**: every element of $.context.domain must be in ["ONDC:RET10", "ONDC:RET11", "ONDC:RET12", "ONDC:RET13", "ONDC:RET14", "ONDC:RET15", "ONDC:RET16", "ONDC:RET17", "ONDC:RET18", "ONDC:RET19"]

	> Note: **Condition VALID_ENUM_CONTEXT_DOMAIN** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.context.domain must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_TYPE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "Delivery",
                    "Self-Pickup",
                    "Delivery and Self-Pickup",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.fulfillments[*].type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_TYPE**: every element of $.message.order.fulfillments[*].type must be in ["Delivery", "Self-Pickup", "Delivery and Self-Pickup"]

	> Note: **Condition VALID_ENUM_MESSAGE_TYPE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.fulfillments[*].type must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "item",
                    "delivery",
                    "packing",
                    "tax",
                    "misc",
                    "discount",
                    "discount_f",
                    "tax_f",
                    "0",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*]['@ondc/org/title_type']",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE**: every element of $.message.order.quote.breakup[*]['@ondc/org/title_type'] must be in ["item", "delivery", "packing", "tax", "misc", "discount", "discount_f", "tax_f", "0"]

	> Note: **Condition VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.quote.breakup[*]['@ondc/org/title_type'] must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_COUNT(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["0", "99"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].item.quantity.available.count",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_COUNT**: every element of $.message.order.quote.breakup[*].item.quantity.available.count must be in ["0", "99"]

	> Note: **Condition VALID_ENUM_MESSAGE_COUNT** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.quote.breakup[*].item.quantity.available.count must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_COUNT_5(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["0", "10"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.quote.breakup[*].item.quantity.maximum.count",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_COUNT_5**: every element of $.message.order.quote.breakup[*].item.quantity.maximum.count must be in ["0", "10"]

	> Note: **Condition VALID_ENUM_MESSAGE_COUNT_5** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.quote.breakup[*].item.quantity.maximum.count must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_TYPE_6(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "ON-ORDER",
                    "ON-FULFILLMENT",
                    "POST-FULFILLMENT",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_TYPE_6**: every element of $.message.order.payment.type must be in ["ON-ORDER", "ON-FULFILLMENT", "POST-FULFILLMENT"]

	> Note: **Condition VALID_ENUM_MESSAGE_TYPE_6** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payment.type must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_SETTLEMENT_TYPE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "upi",
                    "neft",
                    "rtgs",
                    "wallet",
                    "netbanking",
                    "paylater",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_details'][*].settlement_type",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE**: every element of $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must be in ["upi", "neft", "rtgs", "wallet", "netbanking", "paylater"]

	> Note: **Condition VALID_ENUM_MESSAGE_SETTLEMENT_TYPE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payment['@ondc/org/settlement_details'][*].settlement_type must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["percent", "amount"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/buyer_app_finder_fee_type']",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE**: every element of $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must be in ["percent", "amount"]

	> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payment['@ondc/org/buyer_app_finder_fee_type'] must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_COLLECTED_BY(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["BAP", "BPP"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.collected_by",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_COLLECTED_BY**: every element of $.message.order.payment.collected_by must be in ["BAP", "BPP"]

	> Note: **Condition VALID_ENUM_MESSAGE_COLLECTED_BY** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payment.collected_by must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_STATUS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = ["PAID", "NOT-PAID"];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment.status",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_STATUS**: every element of $.message.order.payment.status must be in ["PAID", "NOT-PAID"]

	> Note: **Condition VALID_ENUM_MESSAGE_STATUS** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payment.status must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "shipment",
                    "delivery",
                    "return_window_expiry",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.payment['@ondc/org/settlement_basis']",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS**: every element of $.message.order.payment['@ondc/org/settlement_basis'] must be in ["shipment", "delivery", "return_window_expiry"]

	> Note: **Condition VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.payment['@ondc/org/settlement_basis'] must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }
        function VALID_ENUM_MESSAGE_STATE(
            input: validationInput,
        ): validationOutput {
            const scope = payloadUtils.getJsonPath(input.payload, "$");
            let subResults: validationOutput = [];
            let valid = true;
            for (const testObj of scope) {
                testObj._EXTERNAL = input.externalData;
                const enumList = [
                    "Created",
                    "Accepted",
                    "In-progress",
                    "Completed",
                    "Cancelled",
                ];
                const enumPath = payloadUtils.getJsonPath(
                    testObj,
                    "$.message.order.state",
                );

                const skipCheck = !validations.arePresent(enumPath);
                if (skipCheck) continue;

                const validate = validations.allIn(enumPath, enumList);

                if (!validate) {
                    return [
                        {
                            valid: false,
                            code: 30000,
                            description: `- **condition VALID_ENUM_MESSAGE_STATE**: every element of $.message.order.state must be in ["Created", "Accepted", "In-progress", "Completed", "Cancelled"]

	> Note: **Condition VALID_ENUM_MESSAGE_STATE** can be skipped if the following conditions are met:
	>
	> - **condition B**: $.message.order.state must **not** be present in the payload`,
                        },
                    ];
                }

                delete testObj._EXTERNAL;
            }
            return [{ valid: valid, code: 200 }, ...subResults];
        }

        const testFunctions: testFunctionArray = [
            REQUIRED_CONTEXT_DOMAIN,
            REQUIRED_CONTEXT_COUNTRY,
            REQUIRED_CONTEXT_CITY,
            REQUIRED_CONTEXT_ACTION,
            REQUIRED_CONTEXT_CORE_VERSION,
            REQUIRED_CONTEXT_BAP_ID,
            REQUIRED_CONTEXT_BAP_URI,
            REQUIRED_CONTEXT_BPP_URI,
            REQUIRED_CONTEXT_TRANSACTION_ID,
            REQUIRED_CONTEXT_MESSAGE_ID,
            REQUIRED_CONTEXT_TIMESTAMP,
            REQUIRED_CONTEXT_BPP_ID,
            REQUIRED_CONTEXT_TTL,
            REQUIRED_MESSAGE_ID,
            REQUIRED_MESSAGE_STATE,
            REQUIRED_MESSAGE_NAME,
            REQUIRED_MESSAGE_BUILDING,
            REQUIRED_MESSAGE_LOCALITY,
            REQUIRED_MESSAGE_CITY,
            REQUIRED_MESSAGE_STATE_20,
            REQUIRED_MESSAGE_COUNTRY,
            REQUIRED_MESSAGE_AREA_CODE,
            REQUIRED_MESSAGE_PHONE,
            REQUIRED_MESSAGE_EMAIL,
            REQUIRED_MESSAGE_CREATED_AT,
            REQUIRED_MESSAGE_UPDATED_AT,
            REQUIRED_MESSAGE_ID_27,
            REQUIRED_MESSAGE_COUNT,
            REQUIRED_MESSAGE_FULFILLMENT_ID,
            REQUIRED_MESSAGE_ID_30,
            REQUIRED_MESSAGE_ID_31,
            REQUIRED_MESSAGE_URI,
            REQUIRED_MESSAGE_TL_METHOD,
            REQUIRED_MESSAGE_AMOUNT,
            REQUIRED_MESSAGE_CURRENCY,
            REQUIRED_MESSAGE_TRANSACTION_ID,
            REQUIRED_MESSAGE_STATUS,
            REQUIRED_MESSAGE_BENEFICIARY_NAME,
            REQUIRED_MESSAGE_BANK_NAME,
            REQUIRED_MESSAGE_SETTLEMENT_BANK_ACCOUNT_NO,
            REQUIRED_MESSAGE_SETTLEMENT_IFSC_CODE,
            REQUIRED_MESSAGE_UPI_ADDRESS,
            REQUIRED_MESSAGE_SETTLEMENT_COUNTERPARTY,
            REQUIRED_MESSAGE_SETTLEMENT_PHASE,
            REQUIRED_MESSAGE_SETTLEMENT_TYPE,
            REQUIRED_MESSAGE_BRANCH_NAME,
            REQUIRED_MESSAGE_TYPE,
            REQUIRED_MESSAGE_COLLECTED_BY,
            REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE,
            REQUIRED_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_AMOUNT,
            REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS,
            REQUIRED_MESSAGE_PAYMENTONDCORGSETTLEMENT_WINDOW,
            REQUIRED_MESSAGE_PAYMENTONDCORGWITHHOLDING_AMOUNT,
            REQUIRED_MESSAGE_CREATED_AT_54,
            REQUIRED_MESSAGE_UPDATED_AT_55,
            REQUIRED_MESSAGE_LOCALITY_56,
            REQUIRED_MESSAGE_NAME_57,
            REQUIRED_MESSAGE_TYPE_58,
            REQUIRED_MESSAGE_CURRENCY_59,
            REQUIRED_MESSAGE_VALUE,
            REQUIRED_MESSAGE_BREAKUPONDCORGITEM_ID,
            REQUIRED_MESSAGE_COUNT_62,
            REQUIRED_MESSAGE_TITLE,
            REQUIRED_MESSAGE_CURRENCY_64,
            REQUIRED_MESSAGE_VALUE_65,
            REQUIRED_MESSAGE_CURRENCY_66,
            REQUIRED_MESSAGE_VALUE_67,
            VALID_ENUM_CONTEXT_DOMAIN,
            VALID_ENUM_MESSAGE_TYPE,
            VALID_ENUM_MESSAGE_BREAKUPONDCORGTITLE_TYPE,
            VALID_ENUM_MESSAGE_COUNT,
            VALID_ENUM_MESSAGE_COUNT_5,
            VALID_ENUM_MESSAGE_TYPE_6,
            VALID_ENUM_MESSAGE_SETTLEMENT_TYPE,
            VALID_ENUM_MESSAGE_PAYMENTONDCORGBUYER_APP_FINDER_FEE_TYPE,
            VALID_ENUM_MESSAGE_COLLECTED_BY,
            VALID_ENUM_MESSAGE_STATUS,
            VALID_ENUM_MESSAGE_PAYMENTONDCORGSETTLEMENT_BASIS,
            VALID_ENUM_MESSAGE_STATE,
        ];

        let invalidResults: validationOutput = [];
        for (const fn of testFunctions) {
            const subResult = fn(input);
            // .filter(r => !r.valid);
            invalidResults = [...invalidResults, ...subResult];
            if (!input.config.runAllValidations && invalidResults.length > 0) {
                return invalidResults;
            }
        }
        if (invalidResults.length > 0) {
            // return invalidResults;
            subResults = invalidResults;
            valid = subResults.every((r) => r.valid);
        }

        delete testObj._EXTERNAL;
    }
    return [{ valid: valid, code: 200 }, ...subResults];
}
