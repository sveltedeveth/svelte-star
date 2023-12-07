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
export type FaPoundSignProps = typeof __propDef.props;
export type FaPoundSignEvents = typeof __propDef.events;
export type FaPoundSignSlots = typeof __propDef.slots;
export default class FaPoundSign extends SvelteComponentTyped<FaPoundSignProps, FaPoundSignEvents, FaPoundSignSlots> {
}
export {};
