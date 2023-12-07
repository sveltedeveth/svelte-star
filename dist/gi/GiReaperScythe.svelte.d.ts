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
export type GiReaperScytheProps = typeof __propDef.props;
export type GiReaperScytheEvents = typeof __propDef.events;
export type GiReaperScytheSlots = typeof __propDef.slots;
export default class GiReaperScythe extends SvelteComponentTyped<GiReaperScytheProps, GiReaperScytheEvents, GiReaperScytheSlots> {
}
export {};
