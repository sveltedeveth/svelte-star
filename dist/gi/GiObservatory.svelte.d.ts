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
export type GiObservatoryProps = typeof __propDef.props;
export type GiObservatoryEvents = typeof __propDef.events;
export type GiObservatorySlots = typeof __propDef.slots;
export default class GiObservatory extends SvelteComponentTyped<GiObservatoryProps, GiObservatoryEvents, GiObservatorySlots> {
}
export {};
