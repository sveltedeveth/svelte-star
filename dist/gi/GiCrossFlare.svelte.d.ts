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
export type GiCrossFlareProps = typeof __propDef.props;
export type GiCrossFlareEvents = typeof __propDef.events;
export type GiCrossFlareSlots = typeof __propDef.slots;
export default class GiCrossFlare extends SvelteComponentTyped<GiCrossFlareProps, GiCrossFlareEvents, GiCrossFlareSlots> {
}
export {};
