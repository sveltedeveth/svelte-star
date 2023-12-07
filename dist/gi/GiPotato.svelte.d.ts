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
export type GiPotatoProps = typeof __propDef.props;
export type GiPotatoEvents = typeof __propDef.events;
export type GiPotatoSlots = typeof __propDef.slots;
export default class GiPotato extends SvelteComponentTyped<GiPotatoProps, GiPotatoEvents, GiPotatoSlots> {
}
export {};
