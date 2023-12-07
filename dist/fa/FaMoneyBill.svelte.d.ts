import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FaMoneyBillProps = typeof __propDef.props;
export type FaMoneyBillEvents = typeof __propDef.events;
export type FaMoneyBillSlots = typeof __propDef.slots;
export default class FaMoneyBill extends SvelteComponentTyped<FaMoneyBillProps, FaMoneyBillEvents, FaMoneyBillSlots> {
}
export {};
