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
export type GiTrafficConeProps = typeof __propDef.props;
export type GiTrafficConeEvents = typeof __propDef.events;
export type GiTrafficConeSlots = typeof __propDef.slots;
export default class GiTrafficCone extends SvelteComponentTyped<GiTrafficConeProps, GiTrafficConeEvents, GiTrafficConeSlots> {
}
export {};
