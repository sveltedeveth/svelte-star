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
export type GiJerrycanProps = typeof __propDef.props;
export type GiJerrycanEvents = typeof __propDef.events;
export type GiJerrycanSlots = typeof __propDef.slots;
export default class GiJerrycan extends SvelteComponentTyped<GiJerrycanProps, GiJerrycanEvents, GiJerrycanSlots> {
}
export {};
