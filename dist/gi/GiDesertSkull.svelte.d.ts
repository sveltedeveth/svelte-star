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
export type GiDesertSkullProps = typeof __propDef.props;
export type GiDesertSkullEvents = typeof __propDef.events;
export type GiDesertSkullSlots = typeof __propDef.slots;
export default class GiDesertSkull extends SvelteComponentTyped<GiDesertSkullProps, GiDesertSkullEvents, GiDesertSkullSlots> {
}
export {};
