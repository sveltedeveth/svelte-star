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
export type GiCeilingLightProps = typeof __propDef.props;
export type GiCeilingLightEvents = typeof __propDef.events;
export type GiCeilingLightSlots = typeof __propDef.slots;
export default class GiCeilingLight extends SvelteComponentTyped<GiCeilingLightProps, GiCeilingLightEvents, GiCeilingLightSlots> {
}
export {};
