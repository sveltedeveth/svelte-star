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
export type FaServicestackProps = typeof __propDef.props;
export type FaServicestackEvents = typeof __propDef.events;
export type FaServicestackSlots = typeof __propDef.slots;
export default class FaServicestack extends SvelteComponentTyped<FaServicestackProps, FaServicestackEvents, FaServicestackSlots> {
}
export {};
