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
export type GiInvisibleFaceProps = typeof __propDef.props;
export type GiInvisibleFaceEvents = typeof __propDef.events;
export type GiInvisibleFaceSlots = typeof __propDef.slots;
export default class GiInvisibleFace extends SvelteComponentTyped<GiInvisibleFaceProps, GiInvisibleFaceEvents, GiInvisibleFaceSlots> {
}
export {};
