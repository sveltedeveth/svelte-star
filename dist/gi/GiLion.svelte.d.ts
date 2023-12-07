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
export type GiLionProps = typeof __propDef.props;
export type GiLionEvents = typeof __propDef.events;
export type GiLionSlots = typeof __propDef.slots;
export default class GiLion extends SvelteComponentTyped<GiLionProps, GiLionEvents, GiLionSlots> {
}
export {};
