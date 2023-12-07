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
export type GiDesertEagleProps = typeof __propDef.props;
export type GiDesertEagleEvents = typeof __propDef.events;
export type GiDesertEagleSlots = typeof __propDef.slots;
export default class GiDesertEagle extends SvelteComponentTyped<GiDesertEagleProps, GiDesertEagleEvents, GiDesertEagleSlots> {
}
export {};
