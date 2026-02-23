declare const _default: import("convex/server").SchemaDefinition<{
    customers: import("convex/server").TableDefinition<import("convex/values").VObject<{
        metadata?: any;
        email?: string | undefined;
        name?: string | undefined;
        userId?: string | undefined;
        stripeCustomerId: string;
    }, {
        stripeCustomerId: import("convex/values").VString<string, "required">;
        email: import("convex/values").VString<string | undefined, "optional">;
        name: import("convex/values").VString<string | undefined, "optional">;
        metadata: import("convex/values").VAny<any, "optional", string>;
        userId: import("convex/values").VString<string | undefined, "optional">;
    }, "required", "metadata" | "stripeCustomerId" | "email" | "name" | "userId" | `metadata.${string}`>, {
        by_stripe_customer_id: ["stripeCustomerId", "_creationTime"];
        by_email: ["email", "_creationTime"];
        by_user_id: ["userId", "_creationTime"];
    }, {}, {}>;
    subscriptions: import("convex/server").TableDefinition<import("convex/values").VObject<{
        metadata?: any;
        cancelAt?: number | undefined;
        quantity?: number | undefined;
        userId?: string | undefined;
        orgId?: string | undefined;
        stripeCustomerId: string;
        status: string;
        stripeSubscriptionId: string;
        cancelAtPeriodEnd: boolean;
        currentPeriodEnd: number;
        priceId: string;
    }, {
        stripeSubscriptionId: import("convex/values").VString<string, "required">;
        stripeCustomerId: import("convex/values").VString<string, "required">;
        status: import("convex/values").VString<string, "required">;
        currentPeriodEnd: import("convex/values").VFloat64<number, "required">;
        cancelAtPeriodEnd: import("convex/values").VBoolean<boolean, "required">;
        cancelAt: import("convex/values").VFloat64<number | undefined, "optional">;
        quantity: import("convex/values").VFloat64<number | undefined, "optional">;
        priceId: import("convex/values").VString<string, "required">;
        metadata: import("convex/values").VAny<any, "optional", string>;
        orgId: import("convex/values").VString<string | undefined, "optional">;
        userId: import("convex/values").VString<string | undefined, "optional">;
    }, "required", "metadata" | "stripeCustomerId" | "status" | "stripeSubscriptionId" | "cancelAt" | "cancelAtPeriodEnd" | "currentPeriodEnd" | "priceId" | "quantity" | "userId" | "orgId" | `metadata.${string}`>, {
        by_stripe_subscription_id: ["stripeSubscriptionId", "_creationTime"];
        by_stripe_customer_id: ["stripeCustomerId", "_creationTime"];
        by_org_id: ["orgId", "_creationTime"];
        by_user_id: ["userId", "_creationTime"];
    }, {}, {}>;
    checkout_sessions: import("convex/server").TableDefinition<import("convex/values").VObject<{
        metadata?: any;
        stripeCustomerId?: string | undefined;
        mode: string;
        stripeCheckoutSessionId: string;
        status: string;
    }, {
        stripeCheckoutSessionId: import("convex/values").VString<string, "required">;
        stripeCustomerId: import("convex/values").VString<string | undefined, "optional">;
        status: import("convex/values").VString<string, "required">;
        mode: import("convex/values").VString<string, "required">;
        metadata: import("convex/values").VAny<any, "optional", string>;
    }, "required", "metadata" | "mode" | "stripeCheckoutSessionId" | "stripeCustomerId" | "status" | `metadata.${string}`>, {
        by_stripe_checkout_session_id: ["stripeCheckoutSessionId", "_creationTime"];
        by_stripe_customer_id: ["stripeCustomerId", "_creationTime"];
    }, {}, {}>;
    payments: import("convex/server").TableDefinition<import("convex/values").VObject<{
        metadata?: any;
        stripeCustomerId?: string | undefined;
        userId?: string | undefined;
        orgId?: string | undefined;
        created: number;
        status: string;
        amount: number;
        currency: string;
        stripePaymentIntentId: string;
    }, {
        stripePaymentIntentId: import("convex/values").VString<string, "required">;
        stripeCustomerId: import("convex/values").VString<string | undefined, "optional">;
        amount: import("convex/values").VFloat64<number, "required">;
        currency: import("convex/values").VString<string, "required">;
        status: import("convex/values").VString<string, "required">;
        created: import("convex/values").VFloat64<number, "required">;
        metadata: import("convex/values").VAny<any, "optional", string>;
        orgId: import("convex/values").VString<string | undefined, "optional">;
        userId: import("convex/values").VString<string | undefined, "optional">;
    }, "required", "metadata" | "stripeCustomerId" | "created" | "status" | "amount" | "currency" | "stripePaymentIntentId" | "userId" | "orgId" | `metadata.${string}`>, {
        by_stripe_payment_intent_id: ["stripePaymentIntentId", "_creationTime"];
        by_stripe_customer_id: ["stripeCustomerId", "_creationTime"];
        by_org_id: ["orgId", "_creationTime"];
        by_user_id: ["userId", "_creationTime"];
    }, {}, {}>;
    invoices: import("convex/server").TableDefinition<import("convex/values").VObject<{
        stripeSubscriptionId?: string | undefined;
        userId?: string | undefined;
        orgId?: string | undefined;
        stripeCustomerId: string;
        amountDue: number;
        amountPaid: number;
        created: number;
        status: string;
        stripeInvoiceId: string;
    }, {
        stripeInvoiceId: import("convex/values").VString<string, "required">;
        stripeCustomerId: import("convex/values").VString<string, "required">;
        stripeSubscriptionId: import("convex/values").VString<string | undefined, "optional">;
        status: import("convex/values").VString<string, "required">;
        amountDue: import("convex/values").VFloat64<number, "required">;
        amountPaid: import("convex/values").VFloat64<number, "required">;
        created: import("convex/values").VFloat64<number, "required">;
        orgId: import("convex/values").VString<string | undefined, "optional">;
        userId: import("convex/values").VString<string | undefined, "optional">;
    }, "required", "stripeCustomerId" | "amountDue" | "amountPaid" | "created" | "status" | "stripeInvoiceId" | "stripeSubscriptionId" | "userId" | "orgId">, {
        by_stripe_invoice_id: ["stripeInvoiceId", "_creationTime"];
        by_stripe_customer_id: ["stripeCustomerId", "_creationTime"];
        by_stripe_subscription_id: ["stripeSubscriptionId", "_creationTime"];
        by_org_id: ["orgId", "_creationTime"];
        by_user_id: ["userId", "_creationTime"];
    }, {}, {}>;
}, true>;
export default _default;
//# sourceMappingURL=schema.d.ts.map