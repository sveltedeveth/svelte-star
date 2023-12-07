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
export type GiPointySwordProps = typeof __propDef.props;
export type GiPointySwordEvents = typeof __propDef.events;
export type GiPointySwordSlots = typeof __propDef.slots;
export default class GiPointySword extends SvelteComponentTyped<GiPointySwordProps, GiPointySwordEvents, GiPointySwordSlots> {
}
export {};
