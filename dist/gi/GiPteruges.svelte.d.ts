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
export type GiPterugesProps = typeof __propDef.props;
export type GiPterugesEvents = typeof __propDef.events;
export type GiPterugesSlots = typeof __propDef.slots;
export default class GiPteruges extends SvelteComponentTyped<GiPterugesProps, GiPterugesEvents, GiPterugesSlots> {
}
export {};
