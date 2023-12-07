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
export type GiCargoCraneProps = typeof __propDef.props;
export type GiCargoCraneEvents = typeof __propDef.events;
export type GiCargoCraneSlots = typeof __propDef.slots;
export default class GiCargoCrane extends SvelteComponentTyped<GiCargoCraneProps, GiCargoCraneEvents, GiCargoCraneSlots> {
}
export {};
