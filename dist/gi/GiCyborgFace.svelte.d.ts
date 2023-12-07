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
export type GiCyborgFaceProps = typeof __propDef.props;
export type GiCyborgFaceEvents = typeof __propDef.events;
export type GiCyborgFaceSlots = typeof __propDef.slots;
export default class GiCyborgFace extends SvelteComponentTyped<GiCyborgFaceProps, GiCyborgFaceEvents, GiCyborgFaceSlots> {
}
export {};
