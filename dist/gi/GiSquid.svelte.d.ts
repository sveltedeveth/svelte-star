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
export type GiSquidProps = typeof __propDef.props;
export type GiSquidEvents = typeof __propDef.events;
export type GiSquidSlots = typeof __propDef.slots;
export default class GiSquid extends SvelteComponentTyped<GiSquidProps, GiSquidEvents, GiSquidSlots> {
}
export {};
