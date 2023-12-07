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
export type GiRifleProps = typeof __propDef.props;
export type GiRifleEvents = typeof __propDef.events;
export type GiRifleSlots = typeof __propDef.slots;
export default class GiRifle extends SvelteComponentTyped<GiRifleProps, GiRifleEvents, GiRifleSlots> {
}
export {};
