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
export type GiHandGripProps = typeof __propDef.props;
export type GiHandGripEvents = typeof __propDef.events;
export type GiHandGripSlots = typeof __propDef.slots;
export default class GiHandGrip extends SvelteComponentTyped<GiHandGripProps, GiHandGripEvents, GiHandGripSlots> {
}
export {};
