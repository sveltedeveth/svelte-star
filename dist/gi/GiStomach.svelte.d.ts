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
export type GiStomachProps = typeof __propDef.props;
export type GiStomachEvents = typeof __propDef.events;
export type GiStomachSlots = typeof __propDef.slots;
export default class GiStomach extends SvelteComponentTyped<GiStomachProps, GiStomachEvents, GiStomachSlots> {
}
export {};
