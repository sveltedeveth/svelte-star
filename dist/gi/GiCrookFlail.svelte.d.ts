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
export type GiCrookFlailProps = typeof __propDef.props;
export type GiCrookFlailEvents = typeof __propDef.events;
export type GiCrookFlailSlots = typeof __propDef.slots;
export default class GiCrookFlail extends SvelteComponentTyped<GiCrookFlailProps, GiCrookFlailEvents, GiCrookFlailSlots> {
}
export {};
