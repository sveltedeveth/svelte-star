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
export type GiBeetProps = typeof __propDef.props;
export type GiBeetEvents = typeof __propDef.events;
export type GiBeetSlots = typeof __propDef.slots;
export default class GiBeet extends SvelteComponentTyped<GiBeetProps, GiBeetEvents, GiBeetSlots> {
}
export {};
