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
export type GiLifeBuoyProps = typeof __propDef.props;
export type GiLifeBuoyEvents = typeof __propDef.events;
export type GiLifeBuoySlots = typeof __propDef.slots;
export default class GiLifeBuoy extends SvelteComponentTyped<GiLifeBuoyProps, GiLifeBuoyEvents, GiLifeBuoySlots> {
}
export {};
