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
export type GiFloorHatchProps = typeof __propDef.props;
export type GiFloorHatchEvents = typeof __propDef.events;
export type GiFloorHatchSlots = typeof __propDef.slots;
export default class GiFloorHatch extends SvelteComponentTyped<GiFloorHatchProps, GiFloorHatchEvents, GiFloorHatchSlots> {
}
export {};
