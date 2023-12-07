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
export type GiGibbetProps = typeof __propDef.props;
export type GiGibbetEvents = typeof __propDef.events;
export type GiGibbetSlots = typeof __propDef.slots;
export default class GiGibbet extends SvelteComponentTyped<GiGibbetProps, GiGibbetEvents, GiGibbetSlots> {
}
export {};
