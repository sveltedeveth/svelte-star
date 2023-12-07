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
export type GiLoveInjectionProps = typeof __propDef.props;
export type GiLoveInjectionEvents = typeof __propDef.events;
export type GiLoveInjectionSlots = typeof __propDef.slots;
export default class GiLoveInjection extends SvelteComponentTyped<GiLoveInjectionProps, GiLoveInjectionEvents, GiLoveInjectionSlots> {
}
export {};
