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
export type FaGratipayProps = typeof __propDef.props;
export type FaGratipayEvents = typeof __propDef.events;
export type FaGratipaySlots = typeof __propDef.slots;
export default class FaGratipay extends SvelteComponentTyped<FaGratipayProps, FaGratipayEvents, FaGratipaySlots> {
}
export {};
