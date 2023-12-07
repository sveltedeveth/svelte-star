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
export type GiRegenerationProps = typeof __propDef.props;
export type GiRegenerationEvents = typeof __propDef.events;
export type GiRegenerationSlots = typeof __propDef.slots;
export default class GiRegeneration extends SvelteComponentTyped<GiRegenerationProps, GiRegenerationEvents, GiRegenerationSlots> {
}
export {};
