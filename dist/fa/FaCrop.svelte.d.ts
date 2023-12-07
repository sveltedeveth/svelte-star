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
export type FaCropProps = typeof __propDef.props;
export type FaCropEvents = typeof __propDef.events;
export type FaCropSlots = typeof __propDef.slots;
export default class FaCrop extends SvelteComponentTyped<FaCropProps, FaCropEvents, FaCropSlots> {
}
export {};
