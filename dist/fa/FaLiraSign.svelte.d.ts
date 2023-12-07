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
export type FaLiraSignProps = typeof __propDef.props;
export type FaLiraSignEvents = typeof __propDef.events;
export type FaLiraSignSlots = typeof __propDef.slots;
export default class FaLiraSign extends SvelteComponentTyped<FaLiraSignProps, FaLiraSignEvents, FaLiraSignSlots> {
}
export {};
