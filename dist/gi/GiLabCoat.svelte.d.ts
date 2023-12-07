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
export type GiLabCoatProps = typeof __propDef.props;
export type GiLabCoatEvents = typeof __propDef.events;
export type GiLabCoatSlots = typeof __propDef.slots;
export default class GiLabCoat extends SvelteComponentTyped<GiLabCoatProps, GiLabCoatEvents, GiLabCoatSlots> {
}
export {};
