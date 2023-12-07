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
export type FaTvProps = typeof __propDef.props;
export type FaTvEvents = typeof __propDef.events;
export type FaTvSlots = typeof __propDef.slots;
export default class FaTv extends SvelteComponentTyped<FaTvProps, FaTvEvents, FaTvSlots> {
}
export {};
