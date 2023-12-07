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
export type GiDwarfFaceProps = typeof __propDef.props;
export type GiDwarfFaceEvents = typeof __propDef.events;
export type GiDwarfFaceSlots = typeof __propDef.slots;
export default class GiDwarfFace extends SvelteComponentTyped<GiDwarfFaceProps, GiDwarfFaceEvents, GiDwarfFaceSlots> {
}
export {};
