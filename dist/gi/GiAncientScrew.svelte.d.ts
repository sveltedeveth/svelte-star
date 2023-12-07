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
export type GiAncientScrewProps = typeof __propDef.props;
export type GiAncientScrewEvents = typeof __propDef.events;
export type GiAncientScrewSlots = typeof __propDef.slots;
export default class GiAncientScrew extends SvelteComponentTyped<GiAncientScrewProps, GiAncientScrewEvents, GiAncientScrewSlots> {
}
export {};
