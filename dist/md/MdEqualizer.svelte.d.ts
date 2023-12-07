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
export type MdEqualizerProps = typeof __propDef.props;
export type MdEqualizerEvents = typeof __propDef.events;
export type MdEqualizerSlots = typeof __propDef.slots;
export default class MdEqualizer extends SvelteComponentTyped<MdEqualizerProps, MdEqualizerEvents, MdEqualizerSlots> {
}
export {};
