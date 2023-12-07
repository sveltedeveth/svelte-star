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
export type GiJointProps = typeof __propDef.props;
export type GiJointEvents = typeof __propDef.events;
export type GiJointSlots = typeof __propDef.slots;
export default class GiJoint extends SvelteComponentTyped<GiJointProps, GiJointEvents, GiJointSlots> {
}
export {};
