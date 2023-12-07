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
export type FaContaoProps = typeof __propDef.props;
export type FaContaoEvents = typeof __propDef.events;
export type FaContaoSlots = typeof __propDef.slots;
export default class FaContao extends SvelteComponentTyped<FaContaoProps, FaContaoEvents, FaContaoSlots> {
}
export {};
