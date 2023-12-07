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
export type FaBehanceProps = typeof __propDef.props;
export type FaBehanceEvents = typeof __propDef.events;
export type FaBehanceSlots = typeof __propDef.slots;
export default class FaBehance extends SvelteComponentTyped<FaBehanceProps, FaBehanceEvents, FaBehanceSlots> {
}
export {};
