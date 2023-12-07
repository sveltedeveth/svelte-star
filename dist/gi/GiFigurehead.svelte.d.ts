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
export type GiFigureheadProps = typeof __propDef.props;
export type GiFigureheadEvents = typeof __propDef.events;
export type GiFigureheadSlots = typeof __propDef.slots;
export default class GiFigurehead extends SvelteComponentTyped<GiFigureheadProps, GiFigureheadEvents, GiFigureheadSlots> {
}
export {};
