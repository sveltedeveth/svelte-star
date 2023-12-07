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
export type FaYenSignProps = typeof __propDef.props;
export type FaYenSignEvents = typeof __propDef.events;
export type FaYenSignSlots = typeof __propDef.slots;
export default class FaYenSign extends SvelteComponentTyped<FaYenSignProps, FaYenSignEvents, FaYenSignSlots> {
}
export {};
