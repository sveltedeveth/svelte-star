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
export type FaHammerProps = typeof __propDef.props;
export type FaHammerEvents = typeof __propDef.events;
export type FaHammerSlots = typeof __propDef.slots;
export default class FaHammer extends SvelteComponentTyped<FaHammerProps, FaHammerEvents, FaHammerSlots> {
}
export {};
