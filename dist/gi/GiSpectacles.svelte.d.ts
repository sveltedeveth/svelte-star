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
export type GiSpectaclesProps = typeof __propDef.props;
export type GiSpectaclesEvents = typeof __propDef.events;
export type GiSpectaclesSlots = typeof __propDef.slots;
export default class GiSpectacles extends SvelteComponentTyped<GiSpectaclesProps, GiSpectaclesEvents, GiSpectaclesSlots> {
}
export {};
