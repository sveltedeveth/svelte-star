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
export type FaHandMiddleFingerProps = typeof __propDef.props;
export type FaHandMiddleFingerEvents = typeof __propDef.events;
export type FaHandMiddleFingerSlots = typeof __propDef.slots;
export default class FaHandMiddleFinger extends SvelteComponentTyped<FaHandMiddleFingerProps, FaHandMiddleFingerEvents, FaHandMiddleFingerSlots> {
}
export {};
