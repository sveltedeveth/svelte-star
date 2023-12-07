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
export type FaSignProps = typeof __propDef.props;
export type FaSignEvents = typeof __propDef.events;
export type FaSignSlots = typeof __propDef.slots;
export default class FaSign extends SvelteComponentTyped<FaSignProps, FaSignEvents, FaSignSlots> {
}
export {};
