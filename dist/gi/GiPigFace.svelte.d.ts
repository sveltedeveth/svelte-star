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
export type GiPigFaceProps = typeof __propDef.props;
export type GiPigFaceEvents = typeof __propDef.events;
export type GiPigFaceSlots = typeof __propDef.slots;
export default class GiPigFace extends SvelteComponentTyped<GiPigFaceProps, GiPigFaceEvents, GiPigFaceSlots> {
}
export {};
