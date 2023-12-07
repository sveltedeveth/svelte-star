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
export type GiErlenmeyerProps = typeof __propDef.props;
export type GiErlenmeyerEvents = typeof __propDef.events;
export type GiErlenmeyerSlots = typeof __propDef.slots;
export default class GiErlenmeyer extends SvelteComponentTyped<GiErlenmeyerProps, GiErlenmeyerEvents, GiErlenmeyerSlots> {
}
export {};
