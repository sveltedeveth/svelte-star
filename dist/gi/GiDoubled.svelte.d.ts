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
export type GiDoubledProps = typeof __propDef.props;
export type GiDoubledEvents = typeof __propDef.events;
export type GiDoubledSlots = typeof __propDef.slots;
export default class GiDoubled extends SvelteComponentTyped<GiDoubledProps, GiDoubledEvents, GiDoubledSlots> {
}
export {};
