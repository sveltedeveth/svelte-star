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
export type FaHeadsetProps = typeof __propDef.props;
export type FaHeadsetEvents = typeof __propDef.events;
export type FaHeadsetSlots = typeof __propDef.slots;
export default class FaHeadset extends SvelteComponentTyped<FaHeadsetProps, FaHeadsetEvents, FaHeadsetSlots> {
}
export {};
