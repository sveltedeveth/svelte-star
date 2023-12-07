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
export type GiBatMaskProps = typeof __propDef.props;
export type GiBatMaskEvents = typeof __propDef.events;
export type GiBatMaskSlots = typeof __propDef.slots;
export default class GiBatMask extends SvelteComponentTyped<GiBatMaskProps, GiBatMaskEvents, GiBatMaskSlots> {
}
export {};
