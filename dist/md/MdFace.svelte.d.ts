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
export type MdFaceProps = typeof __propDef.props;
export type MdFaceEvents = typeof __propDef.events;
export type MdFaceSlots = typeof __propDef.slots;
export default class MdFace extends SvelteComponentTyped<MdFaceProps, MdFaceEvents, MdFaceSlots> {
}
export {};
