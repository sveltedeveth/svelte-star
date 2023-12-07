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
export type GiAcornProps = typeof __propDef.props;
export type GiAcornEvents = typeof __propDef.events;
export type GiAcornSlots = typeof __propDef.slots;
export default class GiAcorn extends SvelteComponentTyped<GiAcornProps, GiAcornEvents, GiAcornSlots> {
}
export {};
