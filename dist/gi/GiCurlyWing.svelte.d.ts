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
export type GiCurlyWingProps = typeof __propDef.props;
export type GiCurlyWingEvents = typeof __propDef.events;
export type GiCurlyWingSlots = typeof __propDef.slots;
export default class GiCurlyWing extends SvelteComponentTyped<GiCurlyWingProps, GiCurlyWingEvents, GiCurlyWingSlots> {
}
export {};
