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
export type GiGargoyleProps = typeof __propDef.props;
export type GiGargoyleEvents = typeof __propDef.events;
export type GiGargoyleSlots = typeof __propDef.slots;
export default class GiGargoyle extends SvelteComponentTyped<GiGargoyleProps, GiGargoyleEvents, GiGargoyleSlots> {
}
export {};
