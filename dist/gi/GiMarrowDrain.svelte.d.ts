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
export type GiMarrowDrainProps = typeof __propDef.props;
export type GiMarrowDrainEvents = typeof __propDef.events;
export type GiMarrowDrainSlots = typeof __propDef.slots;
export default class GiMarrowDrain extends SvelteComponentTyped<GiMarrowDrainProps, GiMarrowDrainEvents, GiMarrowDrainSlots> {
}
export {};
