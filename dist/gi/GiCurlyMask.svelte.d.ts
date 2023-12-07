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
export type GiCurlyMaskProps = typeof __propDef.props;
export type GiCurlyMaskEvents = typeof __propDef.events;
export type GiCurlyMaskSlots = typeof __propDef.slots;
export default class GiCurlyMask extends SvelteComponentTyped<GiCurlyMaskProps, GiCurlyMaskEvents, GiCurlyMaskSlots> {
}
export {};
