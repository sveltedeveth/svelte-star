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
export type GiGaulsHelmProps = typeof __propDef.props;
export type GiGaulsHelmEvents = typeof __propDef.events;
export type GiGaulsHelmSlots = typeof __propDef.slots;
export default class GiGaulsHelm extends SvelteComponentTyped<GiGaulsHelmProps, GiGaulsHelmEvents, GiGaulsHelmSlots> {
}
export {};
