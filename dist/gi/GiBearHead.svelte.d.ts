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
export type GiBearHeadProps = typeof __propDef.props;
export type GiBearHeadEvents = typeof __propDef.events;
export type GiBearHeadSlots = typeof __propDef.slots;
export default class GiBearHead extends SvelteComponentTyped<GiBearHeadProps, GiBearHeadEvents, GiBearHeadSlots> {
}
export {};
