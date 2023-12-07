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
export type GiCrescentBladeProps = typeof __propDef.props;
export type GiCrescentBladeEvents = typeof __propDef.events;
export type GiCrescentBladeSlots = typeof __propDef.slots;
export default class GiCrescentBlade extends SvelteComponentTyped<GiCrescentBladeProps, GiCrescentBladeEvents, GiCrescentBladeSlots> {
}
export {};
