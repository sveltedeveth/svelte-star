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
export type MdDirectionsCarProps = typeof __propDef.props;
export type MdDirectionsCarEvents = typeof __propDef.events;
export type MdDirectionsCarSlots = typeof __propDef.slots;
export default class MdDirectionsCar extends SvelteComponentTyped<MdDirectionsCarProps, MdDirectionsCarEvents, MdDirectionsCarSlots> {
}
export {};
