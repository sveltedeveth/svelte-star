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
export type GiNecklaceProps = typeof __propDef.props;
export type GiNecklaceEvents = typeof __propDef.events;
export type GiNecklaceSlots = typeof __propDef.slots;
export default class GiNecklace extends SvelteComponentTyped<GiNecklaceProps, GiNecklaceEvents, GiNecklaceSlots> {
}
export {};
