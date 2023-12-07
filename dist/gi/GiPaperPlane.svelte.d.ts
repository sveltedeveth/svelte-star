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
export type GiPaperPlaneProps = typeof __propDef.props;
export type GiPaperPlaneEvents = typeof __propDef.events;
export type GiPaperPlaneSlots = typeof __propDef.slots;
export default class GiPaperPlane extends SvelteComponentTyped<GiPaperPlaneProps, GiPaperPlaneEvents, GiPaperPlaneSlots> {
}
export {};
