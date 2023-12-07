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
export type GiTotemMaskProps = typeof __propDef.props;
export type GiTotemMaskEvents = typeof __propDef.events;
export type GiTotemMaskSlots = typeof __propDef.slots;
export default class GiTotemMask extends SvelteComponentTyped<GiTotemMaskProps, GiTotemMaskEvents, GiTotemMaskSlots> {
}
export {};
