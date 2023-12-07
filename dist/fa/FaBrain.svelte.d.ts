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
export type FaBrainProps = typeof __propDef.props;
export type FaBrainEvents = typeof __propDef.events;
export type FaBrainSlots = typeof __propDef.slots;
export default class FaBrain extends SvelteComponentTyped<FaBrainProps, FaBrainEvents, FaBrainSlots> {
}
export {};
