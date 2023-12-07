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
export type GiFootPlasterProps = typeof __propDef.props;
export type GiFootPlasterEvents = typeof __propDef.events;
export type GiFootPlasterSlots = typeof __propDef.slots;
export default class GiFootPlaster extends SvelteComponentTyped<GiFootPlasterProps, GiFootPlasterEvents, GiFootPlasterSlots> {
}
export {};
