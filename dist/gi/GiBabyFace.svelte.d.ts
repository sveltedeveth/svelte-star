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
export type GiBabyFaceProps = typeof __propDef.props;
export type GiBabyFaceEvents = typeof __propDef.events;
export type GiBabyFaceSlots = typeof __propDef.slots;
export default class GiBabyFace extends SvelteComponentTyped<GiBabyFaceProps, GiBabyFaceEvents, GiBabyFaceSlots> {
}
export {};
