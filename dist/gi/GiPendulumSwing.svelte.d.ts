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
export type GiPendulumSwingProps = typeof __propDef.props;
export type GiPendulumSwingEvents = typeof __propDef.events;
export type GiPendulumSwingSlots = typeof __propDef.slots;
export default class GiPendulumSwing extends SvelteComponentTyped<GiPendulumSwingProps, GiPendulumSwingEvents, GiPendulumSwingSlots> {
}
export {};
