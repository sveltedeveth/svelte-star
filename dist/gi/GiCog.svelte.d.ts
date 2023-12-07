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
export type GiCogProps = typeof __propDef.props;
export type GiCogEvents = typeof __propDef.events;
export type GiCogSlots = typeof __propDef.slots;
export default class GiCog extends SvelteComponentTyped<GiCogProps, GiCogEvents, GiCogSlots> {
}
export {};
