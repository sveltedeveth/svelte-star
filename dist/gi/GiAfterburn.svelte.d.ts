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
export type GiAfterburnProps = typeof __propDef.props;
export type GiAfterburnEvents = typeof __propDef.events;
export type GiAfterburnSlots = typeof __propDef.slots;
export default class GiAfterburn extends SvelteComponentTyped<GiAfterburnProps, GiAfterburnEvents, GiAfterburnSlots> {
}
export {};
