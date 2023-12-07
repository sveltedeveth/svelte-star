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
export type FaAlipayProps = typeof __propDef.props;
export type FaAlipayEvents = typeof __propDef.events;
export type FaAlipaySlots = typeof __propDef.slots;
export default class FaAlipay extends SvelteComponentTyped<FaAlipayProps, FaAlipayEvents, FaAlipaySlots> {
}
export {};
