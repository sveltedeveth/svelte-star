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
export type GiSpiderFaceProps = typeof __propDef.props;
export type GiSpiderFaceEvents = typeof __propDef.events;
export type GiSpiderFaceSlots = typeof __propDef.slots;
export default class GiSpiderFace extends SvelteComponentTyped<GiSpiderFaceProps, GiSpiderFaceEvents, GiSpiderFaceSlots> {
}
export {};
