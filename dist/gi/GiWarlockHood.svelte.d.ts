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
export type GiWarlockHoodProps = typeof __propDef.props;
export type GiWarlockHoodEvents = typeof __propDef.events;
export type GiWarlockHoodSlots = typeof __propDef.slots;
export default class GiWarlockHood extends SvelteComponentTyped<GiWarlockHoodProps, GiWarlockHoodEvents, GiWarlockHoodSlots> {
}
export {};
