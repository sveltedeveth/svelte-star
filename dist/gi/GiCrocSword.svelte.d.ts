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
export type GiCrocSwordProps = typeof __propDef.props;
export type GiCrocSwordEvents = typeof __propDef.events;
export type GiCrocSwordSlots = typeof __propDef.slots;
export default class GiCrocSword extends SvelteComponentTyped<GiCrocSwordProps, GiCrocSwordEvents, GiCrocSwordSlots> {
}
export {};
