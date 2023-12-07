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
export type GiCardBurnProps = typeof __propDef.props;
export type GiCardBurnEvents = typeof __propDef.events;
export type GiCardBurnSlots = typeof __propDef.slots;
export default class GiCardBurn extends SvelteComponentTyped<GiCardBurnProps, GiCardBurnEvents, GiCardBurnSlots> {
}
export {};
