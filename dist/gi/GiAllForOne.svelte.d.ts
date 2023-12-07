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
export type GiAllForOneProps = typeof __propDef.props;
export type GiAllForOneEvents = typeof __propDef.events;
export type GiAllForOneSlots = typeof __propDef.slots;
export default class GiAllForOne extends SvelteComponentTyped<GiAllForOneProps, GiAllForOneEvents, GiAllForOneSlots> {
}
export {};
