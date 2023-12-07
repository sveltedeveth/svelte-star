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
export type GiSonicBoomProps = typeof __propDef.props;
export type GiSonicBoomEvents = typeof __propDef.events;
export type GiSonicBoomSlots = typeof __propDef.slots;
export default class GiSonicBoom extends SvelteComponentTyped<GiSonicBoomProps, GiSonicBoomEvents, GiSonicBoomSlots> {
}
export {};
