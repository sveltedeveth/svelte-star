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
export type GiWitchFaceProps = typeof __propDef.props;
export type GiWitchFaceEvents = typeof __propDef.events;
export type GiWitchFaceSlots = typeof __propDef.slots;
export default class GiWitchFace extends SvelteComponentTyped<GiWitchFaceProps, GiWitchFaceEvents, GiWitchFaceSlots> {
}
export {};
