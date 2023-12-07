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
export type GiUnderhandProps = typeof __propDef.props;
export type GiUnderhandEvents = typeof __propDef.events;
export type GiUnderhandSlots = typeof __propDef.slots;
export default class GiUnderhand extends SvelteComponentTyped<GiUnderhandProps, GiUnderhandEvents, GiUnderhandSlots> {
}
export {};
