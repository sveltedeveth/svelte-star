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
export type FaArtstationProps = typeof __propDef.props;
export type FaArtstationEvents = typeof __propDef.events;
export type FaArtstationSlots = typeof __propDef.slots;
export default class FaArtstation extends SvelteComponentTyped<FaArtstationProps, FaArtstationEvents, FaArtstationSlots> {
}
export {};
