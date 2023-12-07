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
export type GiCrucifixProps = typeof __propDef.props;
export type GiCrucifixEvents = typeof __propDef.events;
export type GiCrucifixSlots = typeof __propDef.slots;
export default class GiCrucifix extends SvelteComponentTyped<GiCrucifixProps, GiCrucifixEvents, GiCrucifixSlots> {
}
export {};
