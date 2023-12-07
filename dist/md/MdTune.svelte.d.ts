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
export type MdTuneProps = typeof __propDef.props;
export type MdTuneEvents = typeof __propDef.events;
export type MdTuneSlots = typeof __propDef.slots;
export default class MdTune extends SvelteComponentTyped<MdTuneProps, MdTuneEvents, MdTuneSlots> {
}
export {};
