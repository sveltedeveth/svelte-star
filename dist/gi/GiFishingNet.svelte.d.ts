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
export type GiFishingNetProps = typeof __propDef.props;
export type GiFishingNetEvents = typeof __propDef.events;
export type GiFishingNetSlots = typeof __propDef.slots;
export default class GiFishingNet extends SvelteComponentTyped<GiFishingNetProps, GiFishingNetEvents, GiFishingNetSlots> {
}
export {};
