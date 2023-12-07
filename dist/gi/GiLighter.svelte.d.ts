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
export type GiLighterProps = typeof __propDef.props;
export type GiLighterEvents = typeof __propDef.events;
export type GiLighterSlots = typeof __propDef.slots;
export default class GiLighter extends SvelteComponentTyped<GiLighterProps, GiLighterEvents, GiLighterSlots> {
}
export {};
