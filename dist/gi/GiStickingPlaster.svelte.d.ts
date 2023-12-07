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
export type GiStickingPlasterProps = typeof __propDef.props;
export type GiStickingPlasterEvents = typeof __propDef.events;
export type GiStickingPlasterSlots = typeof __propDef.slots;
export default class GiStickingPlaster extends SvelteComponentTyped<GiStickingPlasterProps, GiStickingPlasterEvents, GiStickingPlasterSlots> {
}
export {};
