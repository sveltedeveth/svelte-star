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
export type GiSonicScreechProps = typeof __propDef.props;
export type GiSonicScreechEvents = typeof __propDef.events;
export type GiSonicScreechSlots = typeof __propDef.slots;
export default class GiSonicScreech extends SvelteComponentTyped<GiSonicScreechProps, GiSonicScreechEvents, GiSonicScreechSlots> {
}
export {};
