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
export type FaBarsProps = typeof __propDef.props;
export type FaBarsEvents = typeof __propDef.events;
export type FaBarsSlots = typeof __propDef.slots;
export default class FaBars extends SvelteComponentTyped<FaBarsProps, FaBarsEvents, FaBarsSlots> {
}
export {};
