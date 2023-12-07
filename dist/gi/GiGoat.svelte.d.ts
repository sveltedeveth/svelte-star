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
export type GiGoatProps = typeof __propDef.props;
export type GiGoatEvents = typeof __propDef.events;
export type GiGoatSlots = typeof __propDef.slots;
export default class GiGoat extends SvelteComponentTyped<GiGoatProps, GiGoatEvents, GiGoatSlots> {
}
export {};
