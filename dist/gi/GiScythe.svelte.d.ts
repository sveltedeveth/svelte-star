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
export type GiScytheProps = typeof __propDef.props;
export type GiScytheEvents = typeof __propDef.events;
export type GiScytheSlots = typeof __propDef.slots;
export default class GiScythe extends SvelteComponentTyped<GiScytheProps, GiScytheEvents, GiScytheSlots> {
}
export {};
