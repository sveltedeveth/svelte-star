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
export type FaBoldProps = typeof __propDef.props;
export type FaBoldEvents = typeof __propDef.events;
export type FaBoldSlots = typeof __propDef.slots;
export default class FaBold extends SvelteComponentTyped<FaBoldProps, FaBoldEvents, FaBoldSlots> {
}
export {};
