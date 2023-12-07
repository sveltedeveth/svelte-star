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
export type GiHandBagProps = typeof __propDef.props;
export type GiHandBagEvents = typeof __propDef.events;
export type GiHandBagSlots = typeof __propDef.slots;
export default class GiHandBag extends SvelteComponentTyped<GiHandBagProps, GiHandBagEvents, GiHandBagSlots> {
}
export {};
