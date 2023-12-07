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
export type GiTopHatProps = typeof __propDef.props;
export type GiTopHatEvents = typeof __propDef.events;
export type GiTopHatSlots = typeof __propDef.slots;
export default class GiTopHat extends SvelteComponentTyped<GiTopHatProps, GiTopHatEvents, GiTopHatSlots> {
}
export {};
