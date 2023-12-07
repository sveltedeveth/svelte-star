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
export type GiStrongManProps = typeof __propDef.props;
export type GiStrongManEvents = typeof __propDef.events;
export type GiStrongManSlots = typeof __propDef.slots;
export default class GiStrongMan extends SvelteComponentTyped<GiStrongManProps, GiStrongManEvents, GiStrongManSlots> {
}
export {};
