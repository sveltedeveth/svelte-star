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
export type MdTonalityProps = typeof __propDef.props;
export type MdTonalityEvents = typeof __propDef.events;
export type MdTonalitySlots = typeof __propDef.slots;
export default class MdTonality extends SvelteComponentTyped<MdTonalityProps, MdTonalityEvents, MdTonalitySlots> {
}
export {};
