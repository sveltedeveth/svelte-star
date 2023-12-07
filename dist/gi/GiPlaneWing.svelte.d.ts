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
export type GiPlaneWingProps = typeof __propDef.props;
export type GiPlaneWingEvents = typeof __propDef.events;
export type GiPlaneWingSlots = typeof __propDef.slots;
export default class GiPlaneWing extends SvelteComponentTyped<GiPlaneWingProps, GiPlaneWingEvents, GiPlaneWingSlots> {
}
export {};
