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
export type GiKnifeThrustProps = typeof __propDef.props;
export type GiKnifeThrustEvents = typeof __propDef.events;
export type GiKnifeThrustSlots = typeof __propDef.slots;
export default class GiKnifeThrust extends SvelteComponentTyped<GiKnifeThrustProps, GiKnifeThrustEvents, GiKnifeThrustSlots> {
}
export {};
