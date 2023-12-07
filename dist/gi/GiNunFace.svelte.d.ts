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
export type GiNunFaceProps = typeof __propDef.props;
export type GiNunFaceEvents = typeof __propDef.events;
export type GiNunFaceSlots = typeof __propDef.slots;
export default class GiNunFace extends SvelteComponentTyped<GiNunFaceProps, GiNunFaceEvents, GiNunFaceSlots> {
}
export {};
