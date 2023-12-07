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
export type FaWonSignProps = typeof __propDef.props;
export type FaWonSignEvents = typeof __propDef.events;
export type FaWonSignSlots = typeof __propDef.slots;
export default class FaWonSign extends SvelteComponentTyped<FaWonSignProps, FaWonSignEvents, FaWonSignSlots> {
}
export {};
