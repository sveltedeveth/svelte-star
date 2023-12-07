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
export type GiFaceToFaceProps = typeof __propDef.props;
export type GiFaceToFaceEvents = typeof __propDef.events;
export type GiFaceToFaceSlots = typeof __propDef.slots;
export default class GiFaceToFace extends SvelteComponentTyped<GiFaceToFaceProps, GiFaceToFaceEvents, GiFaceToFaceSlots> {
}
export {};
