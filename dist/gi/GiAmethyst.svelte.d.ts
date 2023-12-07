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
export type GiAmethystProps = typeof __propDef.props;
export type GiAmethystEvents = typeof __propDef.events;
export type GiAmethystSlots = typeof __propDef.slots;
export default class GiAmethyst extends SvelteComponentTyped<GiAmethystProps, GiAmethystEvents, GiAmethystSlots> {
}
export {};
