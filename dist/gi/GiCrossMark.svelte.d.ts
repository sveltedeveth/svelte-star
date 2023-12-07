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
export type GiCrossMarkProps = typeof __propDef.props;
export type GiCrossMarkEvents = typeof __propDef.events;
export type GiCrossMarkSlots = typeof __propDef.slots;
export default class GiCrossMark extends SvelteComponentTyped<GiCrossMarkProps, GiCrossMarkEvents, GiCrossMarkSlots> {
}
export {};
