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
export type FaStopProps = typeof __propDef.props;
export type FaStopEvents = typeof __propDef.events;
export type FaStopSlots = typeof __propDef.slots;
export default class FaStop extends SvelteComponentTyped<FaStopProps, FaStopEvents, FaStopSlots> {
}
export {};
