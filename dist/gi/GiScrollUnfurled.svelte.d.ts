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
export type GiScrollUnfurledProps = typeof __propDef.props;
export type GiScrollUnfurledEvents = typeof __propDef.events;
export type GiScrollUnfurledSlots = typeof __propDef.slots;
export default class GiScrollUnfurled extends SvelteComponentTyped<GiScrollUnfurledProps, GiScrollUnfurledEvents, GiScrollUnfurledSlots> {
}
export {};
