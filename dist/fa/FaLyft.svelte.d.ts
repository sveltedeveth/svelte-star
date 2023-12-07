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
export type FaLyftProps = typeof __propDef.props;
export type FaLyftEvents = typeof __propDef.events;
export type FaLyftSlots = typeof __propDef.slots;
export default class FaLyft extends SvelteComponentTyped<FaLyftProps, FaLyftEvents, FaLyftSlots> {
}
export {};
