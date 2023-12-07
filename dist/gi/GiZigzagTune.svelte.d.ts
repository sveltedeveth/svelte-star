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
export type GiZigzagTuneProps = typeof __propDef.props;
export type GiZigzagTuneEvents = typeof __propDef.events;
export type GiZigzagTuneSlots = typeof __propDef.slots;
export default class GiZigzagTune extends SvelteComponentTyped<GiZigzagTuneProps, GiZigzagTuneEvents, GiZigzagTuneSlots> {
}
export {};
