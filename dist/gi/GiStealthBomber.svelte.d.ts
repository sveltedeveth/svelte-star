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
export type GiStealthBomberProps = typeof __propDef.props;
export type GiStealthBomberEvents = typeof __propDef.events;
export type GiStealthBomberSlots = typeof __propDef.slots;
export default class GiStealthBomber extends SvelteComponentTyped<GiStealthBomberProps, GiStealthBomberEvents, GiStealthBomberSlots> {
}
export {};
