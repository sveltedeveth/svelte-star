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
export type GiParanoiaProps = typeof __propDef.props;
export type GiParanoiaEvents = typeof __propDef.events;
export type GiParanoiaSlots = typeof __propDef.slots;
export default class GiParanoia extends SvelteComponentTyped<GiParanoiaProps, GiParanoiaEvents, GiParanoiaSlots> {
}
export {};
