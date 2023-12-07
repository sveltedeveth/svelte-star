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
export type FaJointProps = typeof __propDef.props;
export type FaJointEvents = typeof __propDef.events;
export type FaJointSlots = typeof __propDef.slots;
export default class FaJoint extends SvelteComponentTyped<FaJointProps, FaJointEvents, FaJointSlots> {
}
export {};
