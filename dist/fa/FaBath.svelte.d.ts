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
export type FaBathProps = typeof __propDef.props;
export type FaBathEvents = typeof __propDef.events;
export type FaBathSlots = typeof __propDef.slots;
export default class FaBath extends SvelteComponentTyped<FaBathProps, FaBathEvents, FaBathSlots> {
}
export {};
