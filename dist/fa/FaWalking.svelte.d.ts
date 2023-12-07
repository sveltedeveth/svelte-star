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
export type FaWalkingProps = typeof __propDef.props;
export type FaWalkingEvents = typeof __propDef.events;
export type FaWalkingSlots = typeof __propDef.slots;
export default class FaWalking extends SvelteComponentTyped<FaWalkingProps, FaWalkingEvents, FaWalkingSlots> {
}
export {};
