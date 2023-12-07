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
export type GiPlateClawProps = typeof __propDef.props;
export type GiPlateClawEvents = typeof __propDef.events;
export type GiPlateClawSlots = typeof __propDef.slots;
export default class GiPlateClaw extends SvelteComponentTyped<GiPlateClawProps, GiPlateClawEvents, GiPlateClawSlots> {
}
export {};
