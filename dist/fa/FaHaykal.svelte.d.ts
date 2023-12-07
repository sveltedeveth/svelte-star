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
export type FaHaykalProps = typeof __propDef.props;
export type FaHaykalEvents = typeof __propDef.events;
export type FaHaykalSlots = typeof __propDef.slots;
export default class FaHaykal extends SvelteComponentTyped<FaHaykalProps, FaHaykalEvents, FaHaykalSlots> {
}
export {};
