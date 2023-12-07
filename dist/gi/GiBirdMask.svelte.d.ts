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
export type GiBirdMaskProps = typeof __propDef.props;
export type GiBirdMaskEvents = typeof __propDef.events;
export type GiBirdMaskSlots = typeof __propDef.slots;
export default class GiBirdMask extends SvelteComponentTyped<GiBirdMaskProps, GiBirdMaskEvents, GiBirdMaskSlots> {
}
export {};
