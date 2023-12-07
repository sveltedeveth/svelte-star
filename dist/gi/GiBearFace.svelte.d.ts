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
export type GiBearFaceProps = typeof __propDef.props;
export type GiBearFaceEvents = typeof __propDef.events;
export type GiBearFaceSlots = typeof __propDef.slots;
export default class GiBearFace extends SvelteComponentTyped<GiBearFaceProps, GiBearFaceEvents, GiBearFaceSlots> {
}
export {};
