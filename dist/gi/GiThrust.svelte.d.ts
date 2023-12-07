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
export type GiThrustProps = typeof __propDef.props;
export type GiThrustEvents = typeof __propDef.events;
export type GiThrustSlots = typeof __propDef.slots;
export default class GiThrust extends SvelteComponentTyped<GiThrustProps, GiThrustEvents, GiThrustSlots> {
}
export {};
