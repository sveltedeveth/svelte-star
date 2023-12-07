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
export type GiAquariumProps = typeof __propDef.props;
export type GiAquariumEvents = typeof __propDef.events;
export type GiAquariumSlots = typeof __propDef.slots;
export default class GiAquarium extends SvelteComponentTyped<GiAquariumProps, GiAquariumEvents, GiAquariumSlots> {
}
export {};
