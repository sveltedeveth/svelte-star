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
export type GiHalberdProps = typeof __propDef.props;
export type GiHalberdEvents = typeof __propDef.events;
export type GiHalberdSlots = typeof __propDef.slots;
export default class GiHalberd extends SvelteComponentTyped<GiHalberdProps, GiHalberdEvents, GiHalberdSlots> {
}
export {};
