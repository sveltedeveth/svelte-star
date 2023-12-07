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
export type GiTreeFaceProps = typeof __propDef.props;
export type GiTreeFaceEvents = typeof __propDef.events;
export type GiTreeFaceSlots = typeof __propDef.slots;
export default class GiTreeFace extends SvelteComponentTyped<GiTreeFaceProps, GiTreeFaceEvents, GiTreeFaceSlots> {
}
export {};
